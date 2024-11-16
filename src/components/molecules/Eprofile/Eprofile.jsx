// src/components/ProfileForm.jsx
"use client";
import { useState, useEffect } from "react";
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
import { userApi } from "../../../api/userApi";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  photo_url: z.string().url("Please enter a valid profile URL address"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

function Eprofile({ className, ...props }) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photo_url: "",
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchedUsers = await userApi.getUser();
        setUserData(fetchedUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      form.reset({
        photo_url: userData.photo_url || "",
        name: userData.name || "",
        email: userData.email || "",
        password: "", // Jangan isi password dari server
      });
    }
  }, [userData, form]);

  const onSubmit = async (values) => {
    try {
      const response = await userApi.updateUser(values);
      if (response.ok) {
        console.log("User data updated successfully.");
        navigate("/tasks");
      } else {
        console.error("Failed to update user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormItem>
          <div className="flex justify-center">
            <img
              src={
                userData?.photo_url ||
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='%23997cc2' d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984'/%3E%3C/g%3E%3C/svg%3E"
              }
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        </FormItem>
        <FormField
          control={form.control}
          name="photo_url"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel>Profile URL</FormLabel>
              <FormControl className="p-2 border border-[#997cc2] rounded-md w-full">
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
              <FormControl className="p-2 border border-[#997cc2] rounded-md w-full">
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
              <FormControl className="p-2 border border-[#997cc2] rounded-md w-full">
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
              <FormControl className="p-2 border border-[#997cc2] rounded-md">
                <Input placeholder="*****" {...field} type="password" />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="bg-[#997cc2] mt-4 w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
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
