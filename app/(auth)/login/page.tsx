import { AuthCard } from "@/features/auth/components/auth-card";
import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
    return(
        <div className="min-h-screen flex items-center justify-center">
            <AuthCard title="Login" description="Welcome back">
                <LoginForm/>
            </AuthCard>
        </div>
    )
}