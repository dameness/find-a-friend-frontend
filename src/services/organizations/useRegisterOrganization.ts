import { api } from "@/config/api";
import { useMutation } from "@tanstack/react-query";

interface RegisterOrganizationRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  zip_code: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  latitude: number;
  longitude: number;
}

const registerOrganization = async (data: RegisterOrganizationRequest) => {
  const response = await api.post("/organizations", data);

  return response.data;
};

export const useRegisterOrganization = () => {
  return useMutation({
    mutationFn: registerOrganization,
  });
};
