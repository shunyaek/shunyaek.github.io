'use client';

import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function DashboardPage() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <DashboardContent />
        </div>
    )
} 