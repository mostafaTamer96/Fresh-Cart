"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FaCheck, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { resetPasswordSchema } from "../fotgetPassword.schema";
import { resetPasswordType } from "../forgetPassword.type";


function togglePasswordVisibility(
  e: React.MouseEvent<HTMLButtonElement>,
  inputId: string
) {
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  if (!input) return;
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  e.currentTarget.dataset.show = String(show);
}

export default function Page() {
  const form = useForm<resetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function handelSubmitNewPassword(values: resetPasswordType) {
    console.log("values", values);
    // replace this with your real API call, e.g. await postResetPassword(...)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.error("Sorry, the confirm password isn't working now");
  }

  return (
    <div className="">
      {/* logo + title */}
      <div className="text-center">
        <h2 className="font-bold text-3xl text-[#364153]">
          <span className="text-[#16A34A]">Fresh</span>Cart
        </h2>
        <h3 className="font-semibold text-xl text-[#364153] mt-4">
          Create New Password
        </h3>
        <p className="font-medium text-sm text-[#4A5565] mt-2">
          Your new password must be different from previous passwords
        </p>
      </div>

      {/* stepper */}
      <div className="flex items-center justify-center my-6">
        <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white text-xs flex items-center justify-center">
          <FaCheck />
        </div>
        <div className="w-12 h-0.5 bg-[#16A34A]" />
        <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white text-xs flex items-center justify-center">
          <FaCheck />
        </div>
        <div className="w-12 h-0.5 bg-[#16A34A]" />
        <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white text-xs flex items-center justify-center shadow-lg shadow-[#16A34A]/40 ring-4 ring-[#BBF7D0]">
          <FaLock />
        </div>
      </div>

      {/* form */}
      <form
        onSubmit={form.handleSubmit(handelSubmitNewPassword)}
        className="my-2 space-y-5"
      >
        {/* new password */}
        <Controller
          name="newPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-sm font-medium text-[#364153] mb-1"
                htmlFor={field.name}
              >
                New Password
              </FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  type="password"
                  placeholder="Enter new password"
                  autoComplete="new-password"
                  className="h-12 rounded-xl pl-10 pr-10 text-[#364153] placeholder:text-gray-400"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                  <FaLock />
                </span>
                <button
                  type="button"
                  data-show="false"
                  onClick={(e) => togglePasswordVisibility(e, field.name)}
                  aria-label="Toggle password visibility"
                  className="group absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm cursor-pointer hover:text-gray-600"
                >
                  <FaEye className="group-data-[show=true]:hidden" />
                  <FaEyeSlash className="hidden group-data-[show=true]:block" />
                </button>
              </div>

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* confirm password */}
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-sm font-medium text-[#364153] mb-1"
                htmlFor={field.name}
              >
                Confirm Password
              </FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  type="password"
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  className="h-12 rounded-xl pl-10 pr-10 text-[#364153] placeholder:text-gray-400"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                  <FaLock />
                </span>
                <button
                  type="button"
                  data-show="false"
                  onClick={(e) => togglePasswordVisibility(e, field.name)}
                  aria-label="Toggle password visibility"
                  className="group absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm cursor-pointer hover:text-gray-600"
                >
                  <FaEye className="group-data-[show=true]:hidden" />
                  <FaEyeSlash className="hidden group-data-[show=true]:block" />
                </button>
              </div>

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <button
          type="submit"
disabled={form.formState.isSubmitting}
          className="bg-[#16A34A] w-full h-12 rounded-xl cursor-pointer flex items-center justify-center text-white font-semibold text-base hover:bg-[#15803D] transition shadow-lg shadow-[#16A34A]/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#16A34A]"
        >
          {form.formState.isSubmitting ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}