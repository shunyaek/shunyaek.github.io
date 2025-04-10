import { Metadata } from "next"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export const metadata: Metadata = {
    title: "Dashboard | shunyaek.se",
    description: "Management dashboard for shunyaek.se",
}

export default function DashboardPage() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <DashboardContent />
        </div>
    )
} 