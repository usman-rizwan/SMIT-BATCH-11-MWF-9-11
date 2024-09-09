import { Button, Input, Link } from "@nextui-org/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link as MyLink } from "react-router-dom";
import { auth } from "../utils/firebase";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const handleSignUpUser = () => {
    console.log(username);
    console.log(email);
    console.log(password);
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user is login", user);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };

  return (
    <div className="container mx-auto my-8">
      <form className="flex flex-col gap-4 ">
        <Input
          isRequired
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          isRequired
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex gap-2 justify-end">
          <Button
            isLoading={loading}
            onClick={handleSignUpUser}
            fullWidth
            color="primary"
          >
            Sign Up
          </Button>
        </div>
        <p className="text-center text-small">
          Need to create an account?{" "}
          <MyLink className="text-blue-600" to={"/signin"} size="sm">
            Sign in
          </MyLink>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
