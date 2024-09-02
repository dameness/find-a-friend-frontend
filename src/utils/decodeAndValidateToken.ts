import { jwtDecode } from "jwt-decode";
import { api } from "@/config/api";

const getNewAccessToken = async () => {
  const { data } = await api.patch<{ token: string }>("/token/refresh");

  const newAccessToken = data.token;

  localStorage.setItem("accessToken", newAccessToken);

  return newAccessToken;
};

export const decodeAndValidateToken = async () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return {
      isUserAuthenticated: false,
      decodedToken: null,
    };
  }

  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  if (!decoded.exp || decoded.exp <= currentTime) {
    const newToken = await getNewAccessToken();
    const newTokenDecoded = jwtDecode(newToken);

    return {
      isUserAuthenticated: true,
      decodedToken: newTokenDecoded,
    };
  }

  return {
    isUserAuthenticated: true,
    decodedToken: decoded,
  };
};
