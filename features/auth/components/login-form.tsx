import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../schemas/login-schema";

export function LoginForm() {
    // const form = useForm<LoginFormValues>({
    //     resolver: zodResolver(loginSchema)
    // })
    const {handleSubmit, register, formState: {errors}} = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: LoginFormValues) => {
        console.log(data)
    }

    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
        }}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-username">Username</FieldLabel>
                    <Input id="fieldgroup-username" placeholder="hazar" {...register("username")}/>
                    {errors.username && <FieldError>{errors.username.message}</FieldError>}
                </Field>

                <Field>
                    <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
                    <Input id="fieldgroup-password" type="password" placeholder="********" {...register("password")}/>
                    {errors.password && <FieldError>{errors.password.message}</FieldError>}
                </Field>

                <Button type="submit">Login</Button>
            </FieldGroup>
        </form>
    )
}