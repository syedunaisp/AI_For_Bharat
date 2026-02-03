import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen flex-col overflow-hidden bg-background">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-slate-50/50 dark:bg-slate-950/50">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
