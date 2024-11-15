"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import login from "../../../api/userApi";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State untuk menampilkan error jika login gagal
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      // Panggil fungsi login dari userApi
      const user = await login(values.email, values.password);
      console.log("Login successful:", user);
      // Navigasi ke halaman lain setelah berhasil login
      navigate("/tasks");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your email and password.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {error && <p className="text-red-600">{error}</p>}{" "}
        {/* Tampilkan pesan error */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-10 text-left">
              <FormLabel>Email</FormLabel>
              <FormControl className="p-2 border border-[#997cc2] rounded-md w-full">
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel>Password</FormLabel>
              <FormControl className="p-2 border border-[#997cc2] rounded-md">
                <Input placeholder="*****" {...field} type="password" />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="bg-[#9c7fc2] mb-5 w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default Login;
