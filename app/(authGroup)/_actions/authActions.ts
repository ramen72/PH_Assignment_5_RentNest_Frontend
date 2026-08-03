"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";
import { LoginState, RegisterState } from "@/lib/types";



export const loginAction = async (
  redirectTo: string,
  prevState: LoginState,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required.",
        statusCode: 400,
        data: null,
      };
    }


  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1d
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7d
      sameSite: "lax",
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    }

    // if (decodedToken?.role === "ADMIN") {
    //   redirect("/admin-dashboard");
    // } else if (decodedToken?.role === "LANDLORD") {
    //   redirect("/landlord-dashboard");
    // } else if (decodedToken?.role === "TENANT") {
    //   redirect("/dashboard");
    // }

    switch (decodedToken?.role) {
      case "ADMIN":
        redirect("/admin-dashboard");
      case "LANDLORD":
        redirect("/landlord-dashboard");
      default:
        redirect("/dashboard");
    }
  }
  return result;
};

export const registerAction = async (
  redirectTo: string,
  prevState: RegisterState,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const role = formData.get("role");
  const profilePhoto = formData.get("profilePhoto") || null;

  if(name === null || email === null || password === null || phone === null || role === null || profilePhoto === null) {
    return {
      success: false,
      statusCode: 400,
      message: "Missing required fields",
      error: "Missing required fields",
      data: {
        data: {
          user: {
            id: "",
            name: "",
            email: "",
            phone: "",
            profilePhoto: "",
            role: "",
            status: "",
            stripeCustomerId: null,
            createdAt: "",
            updatedAt: "",
          },
        },
      },
    };
  }

  const payload = {
    name,
    email,
    password,
    phone,
    role,
    profilePhoto
  };

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  

  if (result.success) {
    
    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    }
    redirect("/");
  }
  return result;
};
