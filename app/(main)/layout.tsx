import { Sidebar } from "@/components/Sidebar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto h-screen">
                <div className="max-w-6xl mx-auto space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
