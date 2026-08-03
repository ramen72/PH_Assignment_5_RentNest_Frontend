import { isAccessTokenValid } from "@/service/isAccessTokenValid";
import { cookies } from "next/headers";

export const getMyRentalRequestsForLandlord = async () => {
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
    // cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24, // 1 day
      tags: ["get-Tenant-Rental-Requests"],
    },
  });

  const result = await res.json();

  return result;
};