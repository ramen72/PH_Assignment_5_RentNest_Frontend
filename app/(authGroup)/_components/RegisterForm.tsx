import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const RegisterForm = () => {
  return (
    <>
      <form className={`space-y-4`}>
        <Card className={`p-5 space-y-4`}>
          <Input
            name="firstName"
            type="text"
            placeholder="Enter your First Name"
            required
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Enter your Last Name"
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
          <Button type="submit">Login</Button>
        </Card>
      </form>
    </>
  );
};

export default RegisterForm;
