// src/components/ProfileForm.jsx
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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(values) {
    console.log(values);
    navigate("/tasks");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-10 text-left">
              <FormLabel>Email</FormLabel>
              <FormControl className="p-2 border border-stone-500 rounded-md w-full">
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
              <FormControl className="p-2 border border-stone-500 rounded-md">
                <Input placeholder="*****" {...field} type="password" />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="bg-white text-black">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default Login;
