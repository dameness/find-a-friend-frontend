import { useAuthContext } from "@/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isUserAuthenticated } = useAuthContext();

  if (!isUserAuthenticated) {
    return <Navigate to={"/pets"} />;
  }

  return <>{children}</>;
};
