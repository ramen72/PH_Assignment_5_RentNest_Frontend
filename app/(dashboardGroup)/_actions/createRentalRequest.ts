// "use server";

// import { cookies } from "next/headers";

// export interface RentalRequestPayload {
//   propertyId: string;
//   moveInDate: string;
//   rentalDuration: number;
//   message: string;
// }

// export const createRentalRequest = async (
//   payload: RentalRequestPayload
// ) => {
//   try {
//     const cookieStore = await cookies();

//     const cookieHeader = cookieStore
//       .getAll()
//       .map((cookie) => `${cookie.name}=${cookie.value}`)
//       .join("; ");

//     const res = await fetch(
//       `${process.env.BACKEND_API_URL}/api/rentalsRequest`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookieHeader,
//         },
//         body: JSON.stringify(payload),
//         cache: "no-store",
//       }
//     );

//     const result = await res.json();

//     if (!res.ok) {
//       return {
//         success: false,
//         statusCode: res.status,
//         message: result.message || "Failed to create rental request",
//       };
//     }

//     return result;
//   } catch (error) {
//     console.error(error);

//     return {
//       success: false,
//       message: "Something went wrong",
//     };
//   }
// };


// ====================================
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