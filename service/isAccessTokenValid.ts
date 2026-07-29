import { jwtUtils } from "@/utils/jwt";
import { getNewAccessToken } from "./refreshToken";
import { cookies } from "next/headers";

export const isAccessTokenValid = async () => {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("accessToken")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;

  
  if (!accessToken && !refreshToken) {
    throw new Error("User Not Logged In.");
  }

  let decodedAccessToken = accessToken
    ? await jwtUtils.verifyToken(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string,
      )
    : null;

  let decodedRefreshToken = refreshToken
    ? await jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    //access token has expired but refresh token is valid, get new access token from backend
    const result = await getNewAccessToken();

    if (result.success) {
      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });

      accessToken = newAccessToken;
    }
  }
  return accessToken;
};
