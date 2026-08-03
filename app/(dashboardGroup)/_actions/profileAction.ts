"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

import { isAccessTokenValid } from "@/service/isAccessTokenValid";

interface ActionState {
  success: boolean;
  message: string;
}

export async function getLandlordProfile() {
  await isAccessTokenValid();

  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
        next: {
          revalidate: 60 * 60 * 24,
          tags: ["get-Landlord-Profile"],
        },
      }
    );

    return await res.json();
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to load profile.",
    };
  }
}

export async function updateLandlordProfile(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await isAccessTokenValid();

  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

const payload = {
  name: formData.get("name") as string,
  phone: formData.get("phone") as string,
  profilePhoto: formData.get("profilePhoto") as string,
  activeStatus: formData.get("activeStatus") as string,
};

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    if (!res.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Profile update failed.",
      };
    }

    revalidateTag("get-Landlord-Profile",{
      expire: 0,
    });

    return {
      success: true,
      message: result.message,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}