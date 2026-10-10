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
import { userEmailType, verifyCodeType } from "../forgetPassword.type";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fortgetPasswordSchema,
  verificationCode,
  verificationCodeType,
} from "../fotgetPassword.schema";
import { forgetPasswordServer } from "@/Services/Auth.services.Server";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { postVerificationCode } from "@/Services/Auth";

export default function page() {
  const router = useRouter()
  const form = useForm<verificationCodeType>({
    resolver: zodResolver(verificationCode),
    defaultValues: { resetCode: "" },
  });

  async function handelSubmitVerificationCode(values: verifyCodeType) {
  console.log("values", values);
  const resp = await postVerificationCode(values);
  console.log("postVerificationCode in page.tsx", resp);

  if ("status" in resp && resp.status === "Success") {
    toast.success("Code Verified!", { autoClose: 3000 });
    setTimeout(() => {
      router.replace("/newPassword");
    }, 2000);
  } else if ("message" in resp) {
    toast.error(resp.message);
  }
}

  return (
    <div>
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
            Enter the 6-digit code sent to mostafatamer4567@gmail.com
          </p>
        </div>

        {/* stepper */}
        <div className="flex items-center justify-center my-6">
          <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white text-xs flex items-center justify-center">
            <FaCheck />
          </div>
          <div className="w-12 h-0.5 bg-green-600" />
          <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white text-xs flex items-center justify-center shadow-lg shadow-[#16A34A]/40 ring-4 ring-[#BBF7D0]">
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
            onSubmit={form.handleSubmit(handelSubmitVerificationCode)}
            className="my-2"
          >
            <div>
              <Controller
                name="resetCode"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      className="text-sm font-medium text-[#364153] mb-1"
                      htmlFor={field.name}
                    >
                      Verification Code
                    </FieldLabel>

                    <div className="relative ">
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={6}
                        placeholder="Enter the code came to your email  "
                        autoComplete="one-time-code"
                        className="pl-10 h-10"
                      />
                      <span className="  absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                        <FaShieldAlt />
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
              type="submit"
              className="bg-[#16A34A] w-full h-11 rounded-xl cursor-pointer flex items-center justify-center text-white font-semibold text-base hover:bg-[#15803D] transition mt-4"
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
    </div>
  );
}
