import { Button, Input, Link } from "@nextui-org/react";
import React from "react";
import { Link as MyLink } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="container mx-auto my-8">
      <form className="flex flex-col gap-4 ">
        <Input
          isRequired
          label="Usename"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <p className="text-center text-small">
          Need to create an account?{" "}
          <MyLink className="text-blue-600" to={"/signin"} size="sm">
            Sign in
          </MyLink>
        </p>
        <div className="flex gap-2 justify-end">
          <Button fullWidth color="primary">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
