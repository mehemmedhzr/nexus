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
import { LoginFormValues, loginSchema } from "../schemas/login-schema";
import { Eye, EyeClosed } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { shakeVariants } from "@/utils/motion/shake";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<true | false>(false);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
    }, 500);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="login"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
                  aria-invalid={!!errors.username}
                  autoFocus
                  autoComplete="username"
                  placeholder="hazar"
                  {...register("username")}
                />
                {errors.username && (
                  <FieldError className="text-red-600">
                    {errors.username.message}
                  </FieldError>
                )}
              </Field>

              <Field className="relative" data-invalid={!!errors.password}>
                <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
                <div className="relative">
                  <Input
                    id="fieldgroup-password"
                    aria-invalid={!!errors.password}
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
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
                {errors.password && (
                  <FieldError className="text-red-600">
                    {errors.password.message}
                  </FieldError>
                )}
              </Field>

              <FieldGroup className="flex flex-row items-center">
                <Field orientation="horizontal">
                  <Input
                    id="fieldgroup-rememberme"
                    type="checkbox"
                    className="max-w-fit"
                  />
                  <FieldLabel htmlFor="fieldgroup-rememberme">
                    Remember me
                  </FieldLabel>
                </Field>

                <Field>
                  <Link href="/forgot-password" className="text-end text-sm">
                    Forgot password?
                  </Link>
                </Field>
              </FieldGroup>

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
                  {isLoading ? "Signing in..." : "Login"}
                </motion.div>
              </Button>
            </FieldGroup>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
