'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, LayoutDashboard, User, WalletCards, Zap, LogOut, Settings, Rocket, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUserStore } from '@/lib/store';

const NAV_ITEMS = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Job Board', href: '/jobs', icon: Briefcase },
    { label: 'Inbox', href: '/inbox', icon: MessageSquare },
    { label: 'Challenges', href: '/challenges', icon: Zap },
    { label: 'Projects', href: '/projects', icon: Rocket },
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Pricing', href: '/pricing', icon: WalletCards },
];

export function Sidebar() {
    const pathname = usePathname();
    const unlockedSkills = useUserStore((state) => state.unlockedSkillIds);

    return (
        <div className="w-64 h-screen sticky top-0 border-r border-border bg-sidebar flex flex-col p-6">
            <div className="mb-10 flex items-center space-x-2">
                <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                    <span className="text-background font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold tracking-tight">SkillBridge</span>
            </div>

            <nav className="flex-1 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                                isActive
                                    ? "bg-foreground text-background shadow-sm"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 mr-3", isActive ? "text-background" : "text-muted-foreground")} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="pt-6 border-t border-border mt-auto">
                <div className="flex items-center space-x-3 mb-6 p-2 rounded-xl bg-secondary/50">
                    <Avatar className="w-10 h-10 border border-border">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold">Alex Chen</p>
                        <p className="text-xs text-muted-foreground">{unlockedSkills.length} Validations</p>
                    </div>
                </div>

                <Link
                    href="/login"
                    className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:bg-red-500/10 hover:text-red-500"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    Sign Out
                </Link>
            </div>
        </div>
    );
}
