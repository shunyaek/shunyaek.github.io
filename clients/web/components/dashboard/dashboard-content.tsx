import { useAuth } from "@/lib/supabase/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserManagement } from "@/components/dashboard/user-management"

export function DashboardContent() {
    const { user, signOut } = useAuth()

    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                        <CardDescription>You are logged in as {user?.email}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={handleSignOut} variant="outline">
                            Sign Out
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common management tasks</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <Button variant="outline">Manage Blog Posts</Button>
                            <Button variant="outline">View Newsletter Subscribers</Button>
                            <Button variant="outline">Update Site Content</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>System Status</CardTitle>
                        <CardDescription>Current system information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Authentication:</span>
                                <span className="text-green-500">Active</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Database:</span>
                                <span className="text-green-500">Connected</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Storage:</span>
                                <span className="text-green-500">Available</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Team Management</h2>
                <UserManagement />
            </div>
        </div>
    )
} 