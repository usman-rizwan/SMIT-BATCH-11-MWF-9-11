import { Button, Input, Link } from "@nextui-org/react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link as MyLink, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const SigninForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("errorMessage->", errorMessage);
      });
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

        <h1 className="text-center my-3 font-bold">Or</h1>
        <div className="flex gap-2 justify-end">
          <Button
            isLoading={loading}
            onClick={loginWithGoogle}
            fullWidth
            color="primary"
          >
            Login with Google
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
