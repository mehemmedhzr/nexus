import DashboardCard from "@/features/dashboard/components/DashboardCard";
import { dashboardCardMetrics } from "@/features/dashboard/data/fakeData";

export default function DashboardPage() {
    return(
        <div>
            {dashboardCardMetrics.map(metric => {
                const Icon = metric.icon;
                return <DashboardCard key={metric.title} title={metric.title} icon={<Icon/>} value={metric.value} />
            })}
        </div>
    )
}