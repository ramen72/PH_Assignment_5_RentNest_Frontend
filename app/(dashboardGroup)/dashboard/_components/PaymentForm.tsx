"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { createCheckoutAction } from "../../_actions/tenantActions";
// import { createCheckoutAction } from "../_actions/paymentAction";

interface PaymentProps {
    payment:{
        success: boolean,
    statusCode: number,
    message: string,
    data: {
        paymentUrl: string,
        sessionId: string
    }
    }
}

const initialState = {
  success: true,
  message: "...",
  paymentUrl: "...",
};

export default function PaymentForm() {
  const [state, action, pending] = useActionState(
    createCheckoutAction,
    initialState
  );
 

  useEffect(() => {
  if (state?.data?.paymentUrl) {
    window.location.href = state?.data?.paymentUrl;
  }
}, [state]);
  return (
    <form action={action}>
      {/* <input
        type="hidden"
        name="paymentId"
        value={payment.id}
      /> */}

      <Button
        type="submit"
        disabled={pending}
        className="w-full"
      >
        {pending ? "Processing..." : "Checkout"}
      </Button>

      {!state.success && state.message && (
        <p className="mt-2 text-sm text-red-500">
          {state.message}
        </p>
      )}
    </form>
  );
}