import { useAuthContext } from "@/hooks/useAuthContext";
import { decodeAndValidateToken } from "@/utils/decodeAndValidateToken";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const AppWrapper = () => {
  const location = useLocation();

  const { setAuthState } = useAuthContext();

  useEffect(() => {
    const validateToken = async () => {
      try {
        const result = await decodeAndValidateToken();
        setAuthState(result);
      } catch (err) {
        console.error("An error occurred during token validation: ", err);
        setAuthState({
          isUserAuthenticated: false,
          decodedToken: null,
        });
      }
    };
    validateToken();
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
};
