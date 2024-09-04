import { api } from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthenticate } from "./useAuthenticate";

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
}

const registerOrganization = async (data: RegisterOrganizationRequest) => {
  const response = await api.post("/organizations", data);

  return response.data;
};

export const useRegisterOrganization = () => {
  const { mutate: authenticate } = useAuthenticate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerOrganization,
    onSuccess: (_data, variables) => {
      authenticate({ email: variables.email, password: variables.password });
      queryClient.invalidateQueries({ queryKey: ["states"] });
    },
    onError: (error) => console.error(error),
  });
};
