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
  image_url?: string;
  organization_id: string;
}

const registerPet = async (data: RegisterPetRequest) => {
  const token = localStorage.getItem("accessToken");

  const response = await api.post("/pets", data, {
    headers: { Authorization: `Bearer ${token}` },
    validateStatus: (status) => status === 201 || status === 401,
  });

  if (response.status === 401) {
    const { data } = await api.patch<{ token: string }>("/token/refresh");

    const newAccessToken = data.token;

    const configWithRefreshedToken = {
      headers: { Authorization: `Bearer ${newAccessToken}` },
    };

    localStorage.setItem("accessToken", newAccessToken);
    await api.post("/pets", data, configWithRefreshedToken);
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
