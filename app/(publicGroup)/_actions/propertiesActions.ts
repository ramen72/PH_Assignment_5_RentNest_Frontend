import { isAccessTokenValid } from "@/service/isAccessTokenValid";
import { cookies } from "next/headers";

export const getAllPublicProperties = async () => {
  // await isAccessTokenValid();

  // const cookieStore = await cookies();

  // const cookieHeader = cookieStore
  //   .getAll()
  //   .map((cookie) => `${cookie.name}=${cookie.value}`)
  //   .join("; ");

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties`, {
    method: "GET",
    // headers: {
    //   "content-Type": "application/json",
    //   Cookie: cookieHeader,
    // },
    // cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24, // 1 day
      tags: ["get-all-public-properties"],
    },
  });

  const result = await res.json();

  return result;
};

export const getSinglePublicProperties = async (id: string) => {
  
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/${id}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24, // 1 day
        tags: ["get-single-public-properties"],
      },
    },
  );

  const result = await res.json();

  return result;
};
