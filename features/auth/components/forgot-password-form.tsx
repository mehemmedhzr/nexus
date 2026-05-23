"use client"
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ForgotPasswordFormType,
  forgotPasswordSchema,
} from "../schemas/forgot-password-schema";

export function ForgotPasswordForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormType) => {
    console.log(data);
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }}
    >
      <FieldGroup>
        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="fieldgroup-email">E-mail</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            autoFocus
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <FieldError className="text-red-600">
              {errors.email.message}
            </FieldError>
          )}
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send OTP"}
        </Button>
      </FieldGroup>
    </form>
  );
}
