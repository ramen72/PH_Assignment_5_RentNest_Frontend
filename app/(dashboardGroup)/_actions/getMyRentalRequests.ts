import { isAccessTokenValid } from "@/service/isAccessTokenValid";
import { cookies } from "next/headers";

export const getMyRentalRequests = async () => {
  await isAccessTokenValid();

  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentalsRequest`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Cookie: cookieHeader,
    },
  });

  const result = await res.json();

  return result;
};
