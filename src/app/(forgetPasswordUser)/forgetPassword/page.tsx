"use client";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
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
import { userEmailType } from "../forgetPassword.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { fortgetPasswordSchema } from "../fotgetPassword.schema";
import { forgetPasswordServer } from "@/Services/Auth.services.Server";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const features = [
  { key: 1, title: "Email Verification", icon: FaEnvelope },
  { key: 2, title: "Secure Reset", icon: FaShieldAlt },
  { key: 3, title: "Encrypted", icon: FaLock },
];

export default function page() {
  const router = useRouter();

  const form = useForm<userEmailType>({
    resolver: zodResolver(fortgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

async function handelSubmitEmail(values: userEmailType) {
  console.log("values", values);
  const resp = await forgetPasswordServer(values);
  console.log("resp from forgetPassword in page", resp);
  
  if (resp.statusMsg === "success") {
  
    toast.success(resp.message, { autoClose: 2500 });
    setTimeout(() => {
      router.replace("/verifyPassword");
    }, 1500);
  } else {
    toast.error(resp.message);
  }


}
  return (
    <>
      <div className="">
        {/* logo + title */}
        <div className="text-center">
          <h2 className="font-bold text-3xl text-[#364153]">
            <span className="text-[#16A34A]">Fresh</span>Cart
          </h2>
          <h3 className="font-semibold text-xl text-[#364153] mt-4">
            Check Your Email
          </h3>
          <p className="font-medium text-sm text-[#4A5565] mt-2">
            No worries, we will send you a reset code
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
            onSubmit={form.handleSubmit(handelSubmitEmail)}
            className="my-2"
          >
            <div>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      className="text-sm font-medium text-[#364153] mb-1"
                      htmlFor={field.name}
                    >
                      Email Address
                    </FieldLabel>

                    <div className="relative ">
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        type="email"
                        placeholder="Enter your email address"
                        autoComplete="on"
                        className="pl-10 h-10 "
                      />
                      <span className="  absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                        <FaEnvelope />
                      </span>
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

         <button
  disabled={form.formState.isSubmitting}
  type="submit"
  className="bg-[#16A34A] w-full h-11 rounded-xl cursor-pointer flex items-center justify-center text-white font-semibold text-base hover:bg-[#15803D] transition mt-4 disabled:cursor-not-allowed"
>
  Send Reset Code
</button>
          </form>
        </div>

        {/* resend */}
        <p className="text-center capitalize text-xs text-[#4A5565] my-4">
          <a href="/login">
            <button
              type="button"
              className="text-[#16A34A] ms-2 font-semibold cursor-pointer hover:underline"
            >
              back to signin
            </button>
          </a>
        </p>
      </div>
    </>
  );
}
