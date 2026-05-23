import { AuthCard } from "@/features/auth/components/auth-card";
import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";

export default function ForgotPassword () {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <AuthCard title="Forgot password?" description="Enter the e-mail to send OTP.">
                <ForgotPasswordForm />
            </AuthCard>
        </div>
    )
}