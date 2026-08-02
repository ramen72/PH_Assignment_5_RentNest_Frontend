"use client";

import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { registerAction } from "../_actions/authActions";
import { useActionState, useEffect } from "react";
import { RegisterState } from "@/lib/types";
import { toast } from "sonner";

const initialState: RegisterState = {
  success: false,
  statusCode: 0,
  message: "",
  error: undefined,
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
export const RegisterForm = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  const action = registerAction.bind(null, redirectTo);

  const [state, formAction, pending] = useActionState(
    action,
    initialState
  );
  console.log(state)
  console.log(formAction)
  console.log(pending)

  useEffect(() => {
      if (!state || state?.statusCode === 0) return;
  
      if (!state.success) {
        toast.error(state.message || "Register failed...!");
      }
      if (state.success) {
        toast.success(state.message || "Register successful!");
      }
    }, [state]);
  return (
    <form action={formAction} className="space-y-4">
      <Card className="space-y-4 p-5">
        {state.error && (
          <p className="text-destructive">{state.message}</p>
        )}

        <Input
          name="name"
          type="text"
          placeholder="Enter your Name"
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <Input
          name="phone"
          type="text"
          placeholder="Enter your phone"
          required
        />
        <Input
          name="profilePhoto"
          type="url"
          placeholder="Enter your profile photo URL"
          required
        />

        <select name="role">
          <option value="TENANT">Tenant</option>
          <option value="LANDLORD">Landlord</option>
        </select>

        <Button disabled={pending}>
          {pending ? "Registering..." : "Register"}
        </Button>
      </Card>
    </form>
  );
};