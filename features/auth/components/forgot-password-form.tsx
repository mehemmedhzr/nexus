"use client";
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
import { motion, AnimatePresence } from "motion/react";
import { shakeVariants } from "@/utils/motion/shake";

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
    <AnimatePresence>
      <motion.div
        key="forgot-password"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          variants={shakeVariants}
          animate={Object.keys(errors).length ? "shake" : "initial"}
        >
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
                variant="outline"
                className="font-mono cursor-pointer"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {isSubmitting ? "Sending..." : "Send OTP"}
                </motion.div>
              </Button>
            </FieldGroup>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
