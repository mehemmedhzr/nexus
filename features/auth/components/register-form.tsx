"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormValues, registerSchema } from "../schemas/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { shakeVariants } from "@/utils/motion/shake";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState<true | false>(false);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    setIsLoading(true);
    console.log(isSubmitting);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
    }, 500);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="register"
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
              <Field data-invalid={!!errors.username}>
                <FieldLabel htmlFor="fieldgroup-username">Username</FieldLabel>
                <Input
                  id="fieldgroup-username"
                  aria-required="true"
                  aria-invalid={!!errors.username}
                  autoComplete="username"
                  autoFocus
                  placeholder="hazar"
                  type="text"
                  {...register("username")}
                />
                {errors.username && (
                  <FieldError className="text-red-600">
                    {errors.username.message}
                  </FieldError>
                )}
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="fieldgroup-email">E-mail</FieldLabel>
                <Input
                  id="fieldgroup-email"
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                  placeholder="hazar@gmail.com"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <FieldError className="text-red-600">
                    {errors.email.message}
                  </FieldError>
                )}
              </Field>

              <Field data-invalid={!!errors.password}>
                <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
                <div className="relative">
                  <Input
                    id="fieldgroup-password"
                    aria-invalid={!!errors.password}
                    autoComplete="new-password"
                    placeholder="********"
                    type="password"
                    {...register("password")}
                  />
                  <Button
                    className="absolute bottom-0 right-1 max-w-fit bg-transparent"
                    type="button"
                    onClick={() =>
                      setShowPassword((t) => (t === false ? true : false))
                    }
                  >
                    <Eye
                      className={`absolute ${!showPassword ? "scale-100" : "scale-0"} text-black dark:text-white`}
                    />
                    <EyeClosed
                      className={`absolute ${showPassword ? "scale-100" : "scale-0"} text-black dark:text-white`}
                    />
                  </Button>
                </div>
                <FieldDescription>
                  Password must be at least 8 characters
                </FieldDescription>
                {errors.password && (
                  <FieldError className="text-red-600">
                    {errors.password.message}
                  </FieldError>
                )}
              </Field>
              <Button
                type="submit"
                disabled={isLoading}
                aria-disabled={isLoading}
                variant="outline"
                className="font-mono cursor-pointer"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {isLoading ? "Signing up..." : "Sign up"}
                </motion.div>
              </Button>
            </FieldGroup>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
