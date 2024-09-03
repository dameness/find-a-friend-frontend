import { api } from "@/config/api";
import { PetAge, PetLevel, PetSize } from "@/types/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface RegisterPetRequest {
  name: string;
  description?: string;
  requirements?: string;
  age?: PetAge;
  size?: PetSize;
  energy?: PetLevel;
  independency?: PetLevel;
  space_needed?: PetLevel;
  image?: string;
  organization_id: string;
}

const registerPet = async (data: RegisterPetRequest) => {
  const token = localStorage.getItem("accessToken");

  const uploadResponse = await api.post("/upload", data.image, {
    headers: { Authorization: `Bearer ${token}` },
    validateStatus: (status) => status === 200 || status === 401,
  });

  if (uploadResponse.status === 401) {
    const {
      data: { token: newAccessToken },
    } = await api.patch<{ token: string }>("/token/refresh");

    const configWithRefreshedToken = {
      headers: { Authorization: `Bearer ${newAccessToken}` },
    };

    localStorage.setItem("accessToken", newAccessToken);

    const newUploadResponse = await api.post(
      "/upload",
      data.image,
      configWithRefreshedToken,
    );

    const newData = {
      ...data,
      image_url: newUploadResponse.data.filePath,
    };

    await api.post("/pets", newData, configWithRefreshedToken);
    return;
  }

  const newData = {
    ...data,
    image_url: uploadResponse.data.filePath,
  };

  await api.post("/pets", newData, {
    headers: { Authorization: `Bearer ${token}` },
  });
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
