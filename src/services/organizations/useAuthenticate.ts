import { api } from "@/config/api";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "@/hooks/useAuthContext";
import { decodeAndValidateToken } from "@/utils/decodeAndValidateToken";

interface authRequest {
  email: string;
  password: string;
}

const auth = async (data: authRequest) => {
  const response = await api.post<{ token: string }>("/sessions", data);

  return response.data;
};

export const useAuthenticate = () => {
  const { setAuthState } = useAuthContext();

  return useMutation({
    mutationFn: auth,
    onSuccess: async (data) => {
      localStorage.setItem("accessToken", data.token);
      const result = await decodeAndValidateToken();
      setAuthState(result);
    },
    onError: (error) => console.error(error),
  });
};
