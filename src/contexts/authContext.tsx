import { JwtPayload } from "jwt-decode";
import { PropsWithChildren, createContext, useState } from "react";

type AuthStateType = {
  isUserAuthenticated: boolean;
  decodedToken: JwtPayload | null;
};

export type AuthContextType = AuthStateType & {
  setAuthState: React.Dispatch<React.SetStateAction<AuthStateType>>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useState<AuthStateType>({
    isUserAuthenticated: false,
    decodedToken: null,
  });

  return (
    <AuthContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}
