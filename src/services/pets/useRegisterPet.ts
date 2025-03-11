import { api } from "@/config/api";
import { PetAge, PetLevel, PetSize, RegisterPetFormValues } from "@/types/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface RegisterPetRequest {
  name: string;
  description?: string;
  requirements?: string;
  age?: PetAge;
  size?: PetSize;
  energy?: PetLevel;
  independency?: PetLevel;
  space_needed?: PetLevel;
  image_url?: string;
  organization_id: string;
}

const registerPet = async (
  data: RegisterPetFormValues & { organization_id: string },
) => {
  let submitData: RegisterPetRequest = data;

  if (data.image && data.image.length > 0) {
    const form = new FormData();
    form.append("image", data.image[0]);

    const uploadResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=e8ff8d1baf1a86b0337d48d718d30eef",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    submitData = {
      ...data,
      image_url: uploadResponse.data.data.url,
    };
  }
  const token = localStorage.getItem("accessToken");

  const response = await api.post("/pets", submitData, {
    headers: { Authorization: `Bearer ${token}` },
    validateStatus: (status) => status === 201 || status === 401,
  });

  if (response.status === 401) {
    const {
      data: { token: newAccessToken },
    } = await api.patch<{ token: string }>("/token/refresh");

    const configWithRefreshedToken = {
      headers: { Authorization: `Bearer ${newAccessToken}` },
    };

    localStorage.setItem("accessToken", newAccessToken);

    await api.post("/pets", submitData, configWithRefreshedToken);
  }
};

export const useRegisterPet = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerPet,
    onError: (error) => console.error(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
      navigate("/pets", { state: { from: "/pets/register" } });
    },
  });
};
