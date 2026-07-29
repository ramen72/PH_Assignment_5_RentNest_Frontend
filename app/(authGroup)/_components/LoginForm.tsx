"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { loginAction } from "../_actions/authActions";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo),
    false,
  );

  // For Navigation to Dashboard
  // const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error(state.message || "Login failed...!");
    }

    // It's not need if server side navigation. Because server side navigation don't show toast message.
    // if (state.success) {
    //   toast.success(state.message || "Login Done.");
    //   // router.push("/dashboard");
    // }
  }, [state]);
  return (
    <>
      <form action={action} className={`space-y-4`}>
        <Card className={`p-5 space-y-4`}>
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
          <Button type="submit">{pending ? "Submitting..." : "Login"}</Button>
        </Card>
      </form>
    </>
  );
};

export default LoginForm;
