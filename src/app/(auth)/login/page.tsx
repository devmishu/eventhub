"use client";

import React from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function LoginPage(): React.JSX.Element {
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { email, password } = registerData;

    

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("login successfully");
    }
    if (error) {
      toast.error(error.message || "Something went wrong");
    }
   
  };

  const googleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const githubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className=" w-full max-w-[440px] bg-white border border-zinc-100 rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] mx-auto">
        {/* Header Titles */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-xs font-medium text-zinc-400 mt-1">
            Login to your acount
          </p>
        </div>

        {/* Social Registration Buttons */}
        <div className="flex flex-col gap-3 mb-5">
          <button
            onClick={googleSignIn}
            type="button"
            className="w-full h-11 border border-zinc-200 hover:bg-zinc-50 rounded-xl flex items-center justify-center gap-2.5 text-sm font-semibold text-zinc-700 transition-colors cursor-pointer"
          >
            <FcGoogle className="w-4 h-4 text-zinc-900 fill-current" />
            <span>Continue with Google</span>
          </button>

          <button
            onClick={githubSignIn}
            type="button"
            className="w-full h-11 border border-zinc-200 hover:bg-zinc-50 rounded-xl flex items-center justify-center gap-2.5 text-sm font-semibold text-zinc-700 transition-colors cursor-pointer"
          >
            <FaGithub className="w-4 h-4 text-zinc-900 fill-current" />
            <span>Continue with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-100"></div>
          </div>
          <span className="relative px-3 bg-white text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            or
          </span>
        </div>

        {/* HeroUI Type-safe Form Component */}
        <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
          {/* Email Field with Validation */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-bold text-zinc-800 mb-1.5 block text-left">
              Email
            </Label>
            <Input
              placeholder="Enter your email"
              className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:outline-2 focus-within:outline-zinc-300 focus-within:border-transparent transition-all"
            />
            <FieldError className="text-xs text-red-500 font-medium mt-1 text-left" />
          </TextField>

          {/* Password Field with Validation */}
          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label className="text-xs font-bold text-zinc-800 mb-1.5 block text-left">
              Password
            </Label>
            <Input
              placeholder="Enter your  password"
              className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:outline-2 focus-within:outline-zinc-300 focus-within:border-transparent transition-all"
            />
            <FieldError className="text-xs text-red-500 font-medium mt-1 text-left" />
          </TextField>

          {/* Register Submit Button */}
          <Button
            type="submit"
            className="w-full h-11 rounded-xl text-white font-bold text-sm shadow-xs transition-transform active:scale-98 mt-2 cursor-pointer"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Login
          </Button>
          {/* Premium Minimal Demo Login Button */}
          <Link href="/demologin" className={"w-full inline-block"}>
            <button
              type="button"
              className="w-full h-11 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold text-sm shadow-xs transition-transform active:scale-98 cursor-pointer"
            >
              Try Demo Login
            </button>
          </Link>
        </Form>

        {/* Bottom Redirect Link */}
        <div className="text-center mt-6">
          <p className="text-xs font-semibold text-zinc-500">
            Don't have an acount?{" "}
            <Link
              href="/register"
              className="text-xs font-bold hover:underline transition-all"
              style={{ color: "var(--primary)" }}
            >
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
