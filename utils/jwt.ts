import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const verifyToken = async (token: string, secret: Secret) => {
  try {
    const verifiedToken = jwt.verify(token, secret);
    return {
      success: true,
      data: verifiedToken,
    };
  } catch (error: any) {
    console.error("Token Verification Failed:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const jwtUtils = {
  verifyToken,
};
