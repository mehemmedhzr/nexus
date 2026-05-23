import { AuthCard } from "@/features/auth/components/auth-card";
import { RegisterForm } from "@/features/auth/components/register-form";

export default function RegisterPage() {
    return(
        <div className="min-h-screen flex items-center justify-center">
            <AuthCard title="Sign Up" description="Welcome">
                <RegisterForm />
            </AuthCard>
        </div>
    )
}