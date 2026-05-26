import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardProps } from "../types/dashboard-card";

export default function DashboardCard({title, icon, value}: CardProps) {
    return (
        <Card size="default">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {icon && <CardAction>{icon}</CardAction>}
            </CardHeader>

            <CardContent>
                <p>{value}</p>
            </CardContent>
        </Card>
    )
}