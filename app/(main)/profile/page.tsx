'use client';

import { useUserStore } from '@/lib/store';
import { MOCK_SKILLS, MOCK_JOBS } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Award, Briefcase, Code2, Github, Globe, MapPin, Share2 } from 'lucide-react';

export default function ProfilePage() {
    const { unlockedSkillIds, activeApplications } = useUserStore();
    const earnedBadges = MOCK_SKILLS.filter(skill => unlockedSkillIds.includes(skill.id));

    return (
        <div className="space-y-8 max-w-5xl mx-auto">

            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-8 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24 border-4 border-background shadow-sm">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="text-2xl">AD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">Alex Developer</h1>
                        <p className="text-muted-foreground flex items-center">
                            <MapPin className="w-4 h-4 mr-1" /> San Francisco, CA
                        </p>
                        <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="font-mono">Full Stack</Badge>
                            <Badge variant="outline" className="font-mono">Open Source</Badge>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                        <Globe className="w-4 h-4 mr-2" /> Portfolio
                    </Button>
                    <Button size="sm">
                        <Share2 className="w-4 h-4 mr-2" /> Share Profile
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">

                    {/* Stats Overview */}
                    <div className="grid grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="p-4 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Badges</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <div className="text-2xl font-bold">{earnedBadges.length}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="p-4 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Applications</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <div className="text-2xl font-bold">{activeApplications.length}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="p-4 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Global Rank</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <div className="text-2xl font-bold">#428</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Earned Skills Grid */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <Award className="mr-2 w-5 h-5" /> Verified Skills
                        </h2>
                        {earnedBadges.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {earnedBadges.map(skill => (
                                    <Card key={skill.id} className="bg-secondary/10 border-border/60 hover:border-foreground/20 transition-colors">
                                        <CardHeader className="flex flex-row items-center gap-4 p-4">
                                            <div className="w-10 h-10 bg-foreground text-background rounded-lg flex items-center justify-center font-bold">
                                                {skill.name[0]}
                                            </div>
                                            <div>
                                                <CardTitle className="text-base">{skill.name}</CardTitle>
                                                <CardDescription className="text-xs uppercase font-mono mt-1">{skill.category}</CardDescription>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 border border-dashed rounded-xl text-center text-muted-foreground bg-secondary/20">
                                No verified skills yet. Go to Challenges to earn badges.
                            </div>
                        )}
                    </section>
                </div>

                {/* Sidebar / Resume info */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">About</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground leading-relaxed">
                            Passionate developer building high-quality accessible interfaces.
                            Specializing in React, Next.js, and Design Systems.
                            Always looking for the next challenge to prove my skills.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Recent Logic</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-secondary rounded-md mt-0.5">
                                    <Code2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Submitted "Node.js Perf"</p>
                                    <p className="text-xs text-muted-foreground">2 days ago</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-secondary rounded-md mt-0.5">
                                    <Briefcase className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Applied to Vercel</p>
                                    <p className="text-xs text-muted-foreground">5 days ago</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
