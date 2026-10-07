"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaArrowLeft,
  FaCheck,
  FaEnvelope,
  FaKey,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import { fortgetPasswordSchema } from "./fotgetPassword.schema";
import {  userEmailType } from "./forgetPassword.type";
import { postForgetPassword } from "@/Services/Auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const features = [
  { key: 1, title: "Email Verification", icon: FaEnvelope },
  { key: 2, title: "Secure Reset", icon: FaShieldAlt },
  { key: 3, title: "Encrypted", icon: FaLock },
];

export default function page() {
  const router=useRouter()
  
  const form = useForm<userEmailType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(fortgetPasswordSchema),
  });

 async function handleForgetPassword(values:userEmailType) {
    const email =  await postForgetPassword(values)
    if(email.statusMsg==="success"){
    toast.success(email.message)
     setTimeout(() => {
 // router.push("/login")
  
}, 3000);

    }
    else{
      toast.error(email.message)
    }
    console.log("user email", email );
  }
  return (
    <>
      {/* keyframes for the three dots (dark <-> light green, one after another) */}
      <style>{`
          @keyframes dotPulse {
            0%, 100% { background-color: #86EFAC; }
            50%      { background-color: #16A34A; }
          }
        `}</style>

      <div className="  container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 items-center">
        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:block ">
          {/* illustration card */}
          <div className="  relative overflow-hidden rounded-2xl h-75 bg-linear-to-br from-[#F0FDF4] to-[#F9FAFB] shadow-lg">
            {/* decorative circles */}
            <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#DCFCE7]/70" />
            <div className="absolute top-10 right-20 w-10 h-10 rounded-full bg-[#DCFCE7]/70" />
            <div className="absolute bottom-4 right-14 w-28 h-28 rounded-full bg-[#DCFCE7]/70" />

            {/* icons */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="flex items-center gap-3">
                {/* envelope */}
                <div className="w-12 h-12 mt-4 rounded-xl bg-white shadow-md flex items-center justify-center text-[#16A34A]  transition-transform duration-300 hover:rotate-5">
                  <FaEnvelope />
                </div>

                {/* lock (main) */}
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center  transition-transform duration-300 hover:rotate-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] text-3xl">
                    <FaLock />
                  </div>
                </div>

                {/* shield */}
                <div className="w-12 h-12 mt-6 rounded-xl bg-white shadow-md flex items-center justify-center text-[#16A34A]  transition-transform duration-300 hover:rotate-5">
                  <FaShieldAlt />
                </div>
              </div>

              {/* three animated dots */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#86EFAC]"
                    style={{
                      animation: "dotPulse 1.5s ease-in-out infinite",
                      animationDelay: `${i * 0.25}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* text */}
          <div className="text-center mt-6">
            <h1 className="font-bold text-3xl text-[#364153]">
              Reset Your Password
            </h1>
            <p className="font-medium text-base text-[#4A5565] mt-3 max-w-md mx-auto">
              Don&apos;t worry, it happens to the best of us. We&apos;ll help
              you get back into your account in no time.
            </p>
          </div>

          {/* features (mapped) */}
          <div className="flex items-center justify-center gap-6 mt-5">
            {features.map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-2 text-sm text-[#4A5565]"
              >
                <span className="text-[#16A34A]">
                  <item.icon />
                </span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="bg-white rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] p-8">
          {/* logo + title */}
          <div className="text-center">
            <h2 className="font-bold text-3xl text-[#364153]">
              <span className="text-[#16A34A]">Fresh</span>Cart
            </h2>
            <h3 className="font-semibold text-xl text-[#364153] mt-4">
              Check Your Email
            </h3>
            <p className="font-medium text-sm text-[#4A5565] mt-2">
              Enter the 6-digit code sent to usama.route@gmail.com
            </p>
          </div>

          {/* stepper */}
          <div className="flex items-center justify-center my-6">
            <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white text-xs flex items-center justify-center">
              <FaCheck />
            </div>
            <div className="w-12 h-0.5 bg-gray-200" />
            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center">
              <FaKey />
            </div>
            <div className="w-12 h-0.5 bg-gray-200" />
            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center">
              <FaLock />
            </div>
          </div>

          {/* code input */}
          <div>
            <form
              onSubmit={form.handleSubmit(handleForgetPassword)}
              className="my-2"
            >
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      className="block text-sm font-medium text-[#364153] mb-1"
                      htmlFor={field.name}
                    >
                      Email Address
                    </FieldLabel>

                    <div className="relative">
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        type="email"
                        placeholder="ali@example.com"
                        autoComplete="email"
                        className="h-12 rounded-lg border-[#D1D5DC] pl-10 text-[#364153] placeholder:text-gray-400 focus-visible:border-[#16A34A] focus-visible:ring-2 focus-visible:ring-[#BBF7D0]"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                        <FaEnvelope />
                      </span>
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <button
                type="submit"
                className="bg-[#16A34A] w-full h-11 rounded-xl cursor-pointer flex items-center justify-center text-white font-semibold text-base hover:bg-[#15803D] transition mt-4"
              >
                Send Reset Code
              </button>
            </form>
          </div>

          {/* resend */}
          <p className="text-center capitalize text-xs text-[#4A5565] my-4">

         <Link href={"/login"}>   
            <button
              type="button"
              className="text-[#16A34A] ms-2 font-semibold cursor-pointer hover:underline"
            >
               back to signin
            </button>
            </Link>
          </p>

     
        </div>
      </div>
    </>
  );
}
