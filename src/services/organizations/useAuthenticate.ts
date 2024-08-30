import { api } from "@/config/api";
import { useMutation } from "@tanstack/react-query";

interface authRequest {
  email: string;
  password: string;
}

const auth = async (data: authRequest) => {
  const response = await api.post<{ token: string }>("/sessions", data);

  return response.data;
};

export const useAuthenticate = () => {
  return useMutation({
    mutationFn: auth,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);
    },
    onError: (error) => console.error(error),
  });
};
