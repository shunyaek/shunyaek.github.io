'use client'

import { useState } from 'react'
import { createNewUser } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle, CheckCircle } from 'lucide-react'

export function UserManagement() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState<{ success: boolean; error: string | null } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setResult(null)

        try {
            const result = await createNewUser(email, password)
            setResult(result)

            if (result.success) {
                setEmail('')
                setPassword('')
            }
        } catch (error) {
            setResult({
                success: false,
                error: error instanceof Error ? error.message : 'An unknown error occurred'
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Create new user accounts for team members</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="team@shunyaek.se"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {result && (
                        <Alert variant={result.success ? "default" : "destructive"}>
                            {result.success ? (
                                <CheckCircle className="h-4 w-4" />
                            ) : (
                                <AlertCircle className="h-4 w-4" />
                            )}
                            <AlertDescription>
                                {result.success
                                    ? "User created successfully"
                                    : result.error || "An error occurred"}
                            </AlertDescription>
                        </Alert>
                    )}

                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Creating..." : "Create User"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
} 