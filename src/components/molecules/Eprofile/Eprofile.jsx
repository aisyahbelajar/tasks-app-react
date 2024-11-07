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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  profileurl: z.string().url("Please enter a valid profile URL address"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

function Eprofile({ avatar }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileurl: "",
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    navigate("/tasks");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormItem>
          <div className="flex justify-center">
            <img
              src={
                avatar ||
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kIj48cGF0aCBkPSJNMTggMjBhNiA2IDAgMCAwLTEyIDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4="
              }
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        </FormItem>
        <FormField
          control={form.control}
          name="profileurl"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel>Profile URL</FormLabel>
              <FormControl className="p-2 border border-stone-500 rounded-md w-full">
                <Input placeholder="<Image URL>" {...field} />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel>Name</FormLabel>
              <FormControl className="p-2 border border-stone-500 rounded-md w-full">
                <Input placeholder="Sarah Santoso" {...field} />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel>Email</FormLabel>
              <FormControl className="p-2 border border-stone-500 rounded-md w-full">
                <Input placeholder="shadcn" {...field} type="email" />
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
          <Button type="submit" className="bg-white text-black mt-4 w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                fillRule="evenodd"
                d="M19.633 6.226a1 1 0 0 1 .141 1.407l-9 11a1 1 0 0 1-1.481.074l-5-5a1 1 0 1 1 1.414-1.414l4.219 4.219l8.3-10.145a1 1 0 0 1 1.407-.141"
                clipRule="evenodd"
              ></path>
            </svg>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default Eprofile;
