export default function HelpPage() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
                <p className="text-muted-foreground">Get assistance with using the platform.</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <p className="text-lg font-medium">How can we help you?</p>
                    <p className="text-sm text-muted-foreground max-w-md mt-2">
                        Find answers to common questions or contact our support team.
                    </p>
                </div>
            </div>
        </div>
    )
}
