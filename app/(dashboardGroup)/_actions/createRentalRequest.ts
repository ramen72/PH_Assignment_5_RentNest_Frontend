
"use server";

import { cookies } from "next/headers";

export async function createRentalRequest(
  prevState: any,
  formData: FormData
) {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
      .getAll()
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");

    const payload = {
      propertyId: formData.get("propertyId"),
      moveInDate: formData.get("moveInDate"),
      rentalDuration: Number(formData.get("rentalDuration")),
      message: formData.get("message"),
    };

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/rentalsRequest`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    return {
      success: res.ok,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}