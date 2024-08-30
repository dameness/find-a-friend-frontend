import { JwtPayload, jwtDecode } from "jwt-decode";

/**
 * Decodes a token and verify if it
 * isn't expired. Returns the boolean
 * validation and, if true, returns the
 * decoded token.
 * @param token - JWT token
 */
export const decodeAndValidateToken = (
  token: string | null,
): { isValid: boolean; decodedToken: JwtPayload | null } => {
  if (!token) {
    return {
      isValid: false,
      decodedToken: null,
    };
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (!decoded.exp || decoded.exp <= currentTime) {
      return {
        isValid: false,
        decodedToken: null,
      };
    }

    return {
      isValid: true,
      decodedToken: decoded,
    };
  } catch {
    return {
      isValid: false,
      decodedToken: null,
    };
  }
};
