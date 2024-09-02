import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { Link as MyLink, useNavigate } from "react-router-dom";
import { app, auth, signInWithEmailAndPassword } from "../utils/firebase";
import { toast } from "sonner";

const SigninForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    console.log("email=>", email);
    console.log("password=>", password);
    try {
      setLoading(true);
      const login = await signInWithEmailAndPassword(auth, email, password);
      toast.success("User signin successfully");
      navigate("/");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  return (
    <div className="container mx-auto my-8">
      <form className="flex flex-col gap-4 ">
        <Input
          isRequired
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex gap-2 justify-end">
          <Button
            isLoading={loading}
            onClick={loginUser}
            fullWidth
            color="primary"
          >
            Login
          </Button>
        </div>
        <p className="text-center text-small">
          Need to create an account?{" "}
          <MyLink to={"/signup"} className="text-blue-600">
            Sign up
          </MyLink>
        </p>
      </form>
    </div>
  );
};

export default SigninForm;
