export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
                <p className="text-muted-foreground">Manage your account settings and personal information.</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <p className="text-lg font-medium">Profile Management</p>
                    <p className="text-sm text-muted-foreground max-w-md mt-2">
                        Update your personal details, gig platforms, and notification preferences here.
                    </p>
                </div>
            </div>
        </div>
    )
}
