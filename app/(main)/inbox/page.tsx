'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Send, Phone, Video, MoreVertical, Search, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock Data
const THREADS = [
    {
        id: 't1',
        recruiter: 'Sarah Jenkins',
        company: 'Uber',
        role: 'Backend Systems Architect',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        status: 'Application Accepted',
        lastMessage: 'We reviewed your profile and were impressed by your Node.js verification.',
        timestamp: '2m ago',
        unread: true,
    },
    {
        id: 't2',
        recruiter: 'Mike Chen',
        company: 'Vercel',
        role: 'Senior Frontend Engineer',
        avatar: 'https://i.pravatar.cc/150?u=mike',
        status: 'Interview Request',
        lastMessage: 'Are you available for a technical screen next Tuesday?',
        timestamp: '1d ago',
        unread: false,
    },
    {
        id: 't3',
        recruiter: 'Emily Davis',
        company: 'Linear',
        role: 'Platform Engineer',
        avatar: 'https://i.pravatar.cc/150?u=emily',
        status: 'Reviewing',
        lastMessage: 'Thanks for applying! I will get back to you shortly.',
        timestamp: '3d ago',
        unread: false,
    },
];

const MOCK_MESSAGES: Record<string, { id: string; sender: string; text: string; time: string; isMe: boolean }[]> = {
    't1': [
        {
            id: 'm1',
            sender: 'Sarah Jenkins',
            text: "Hi Alex! Thanks for applying to the Backend Systems Architect role.",
            time: '10:30 AM',
            isMe: false,
        },
        {
            id: 'm2',
            sender: 'Me',
            text: "Hi Sarah, thanks for reaching out! I'm really excited about the opportunity.",
            time: '10:32 AM',
            isMe: true,
        },
        {
            id: 'm3',
            sender: 'Sarah Jenkins',
            text: "We reviewed your profile and were impressed by your Node.js verification. Your 'Node.js Performance' badge shows exactly the skills we need.",
            time: '10:33 AM',
            isMe: false,
        },
        {
            id: 'm4',
            sender: 'Sarah Jenkins',
            text: "Would you be open to a quick 15-minute intro call this week?",
            time: '10:34 AM',
            isMe: false,
        },
    ],
    't2': [
        {
            id: 'm2-1',
            sender: 'Mike Chen',
            text: "Hello Alex, I'm Mike from Vercel.",
            time: 'Yesterday',
            isMe: false,
        },
        {
            id: 'm2-2',
            sender: 'Mike Chen',
            text: "We have an opening for a Senior Frontend Engineer and saw your work on the Design System project.",
            time: 'Yesterday',
            isMe: false,
        },
        {
            id: 'm2-3',
            sender: 'Me',
            text: "Hi Mike! Big fan of Vercel. I'd love to hear more.",
            time: 'Yesterday',
            isMe: true,
        },
        {
            id: 'm2-4',
            sender: 'Mike Chen',
            text: "Great! Are you available for a technical screen next Tuesday?",
            time: 'Yesterday',
            isMe: false,
        },
    ],
    't3': [
        {
            id: 'm3-1',
            sender: 'Emily Davis',
            text: "Hi Alex, thanks for your application to Linear.",
            time: 'Mon',
            isMe: false,
        },
        {
            id: 'm3-2',
            sender: 'Emily Davis',
            text: "We are currently reviewing all candidates and will get back to you shortly.",
            time: 'Mon',
            isMe: false,
        },
    ]
};

export default function InboxPage() {
    const [activeThreadId, setActiveThreadId] = useState('t1');
    const [messageInput, setMessageInput] = useState('');

    const activeThread = THREADS.find(t => t.id === activeThreadId) || THREADS[0];
    const activeMessages = MOCK_MESSAGES[activeThreadId] || [];

    return (
        <div className="flex h-[calc(100vh-8rem)] rounded-2xl border border-border bg-card overflow-hidden shadow-sm">

            {/* Left Sidebar: Threads */}
            <div className="w-80 border-r border-border flex flex-col bg-secondary/5">
                <div className="p-4 border-b border-border">
                    <h2 className="font-bold text-lg mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search messages..." className="pl-9 bg-background" />
                    </div>
                </div>
                <ScrollArea className="flex-1">
                    <div className="flex flex-col p-2 gap-1">
                        {THREADS.map((thread) => (
                            <button
                                key={thread.id}
                                onClick={() => setActiveThreadId(thread.id)}
                                className={cn(
                                    "flex items-start gap-3 p-3 text-left rounded-lg transition-colors hover:bg-secondary",
                                    activeThreadId === thread.id ? "bg-secondary" : ""
                                )}
                            >
                                <Avatar className="w-10 h-10 border border-border/50">
                                    <AvatarImage src={thread.avatar} />
                                    <AvatarFallback>{thread.recruiter[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-sm truncate">{thread.recruiter}</span>
                                        <span className="text-xs text-muted-foreground whitespace-nowrap">{thread.timestamp}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate font-medium mb-1">
                                        {thread.company} • {thread.role}
                                    </p>
                                    <p className="text-xs text-muted-foreground truncate">
                                        {thread.lastMessage}
                                    </p>
                                </div>
                                {thread.unread && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0 animate-pulse" />
                                )}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Right Content: Chat */}
            <div className="flex-1 flex flex-col bg-background">

                {/* Chat Header */}
                <div className="p-4 border-b border-border flex justify-between items-center bg-card/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border border-border">
                            <AvatarImage src={activeThread.avatar} />
                            <AvatarFallback>{activeThread.recruiter[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-bold text-sm flex items-center gap-2">
                                {activeThread.recruiter}
                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-normal bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                                    {activeThread.status}
                                </Badge>
                            </h3>
                            <p className="text-xs text-muted-foreground">Recruiter at {activeThread.company}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <Video className="h-4 w-4" />
                        </Button>
                        <Separator orientation="vertical" className="h-6 mx-1" />
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Chat Area */}
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {/* Date Divider */}
                        <div className="flex items-center justify-center my-6">
                            <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">Today</span>
                        </div>

                        {activeMessages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex gap-3 max-w-[80%]",
                                    msg.isMe ? "ml-auto flex-row-reverse" : ""
                                )}
                            >
                                {!msg.isMe && (
                                    <Avatar className="w-8 h-8 mt-1 border border-border/50">
                                        <AvatarImage src={activeThread.avatar} />
                                        <AvatarFallback>R</AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={cn(
                                        "p-3 rounded-2xl text-sm shadow-sm",
                                        msg.isMe
                                            ? "bg-foreground text-background rounded-tr-none"
                                            : "bg-secondary text-foreground rounded-tl-none"
                                    )}
                                >
                                    <p>{msg.text}</p>
                                    <div className={cn(
                                        "flex items-center gap-1 mt-1 text-[10px]",
                                        msg.isMe ? "text-background/70 justify-end" : "text-muted-foreground"
                                    )}>
                                        <span>{msg.time}</span>
                                        {msg.isMe && <CheckCheck className="w-3 h-3" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t border-border bg-card/50">
                    <div className="flex gap-2 max-w-3xl mx-auto">
                        <Input
                            placeholder="Type a message..."
                            className="flex-1 bg-background border-border"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        />
                        <Button size="icon" disabled={!messageInput.trim()}>
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
