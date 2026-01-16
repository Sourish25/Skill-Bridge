'use client';

import { useUserStore } from '@/lib/store';
import { MOCK_JOBS, MOCK_SKILLS } from '@/lib/data';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { CheckCircle2, Timer, Award, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
    const { unlockedSkillIds, activeApplications } = useUserStore();

    const earnedBadges = MOCK_SKILLS.filter(skill => unlockedSkillIds.includes(skill.id));
    const appliedJobs = MOCK_JOBS.filter(job => activeApplications.includes(job.id));

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Alex</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Earned Badges</CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{earnedBadges.length}</div>
                        <p className="text-xs text-muted-foreground">
                            {earnedBadges.length === MOCK_SKILLS.length ? "All skills unlocked!" : `${MOCK_SKILLS.length - earnedBadges.length} more to unlock`}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{appliedJobs.length}</div>
                        <p className="text-xs text-muted-foreground">
                            Across {new Set(appliedJobs.map(j => j.company)).size} companies
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Verified ID</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Level {Math.floor(earnedBadges.length / 2) + 1}</div>
                        <p className="text-xs text-muted-foreground">
                            Based on your technical assessments
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Award className="mr-2 h-5 w-5" /> Your Skill Badges
                    </h2>
                    {earnedBadges.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {earnedBadges.map(skill => (
                                <div key={skill.id} className="flex items-center p-4 bg-card border border-border rounded-xl">
                                    <div className="h-10 w-10 text-xl flex items-center justify-center bg-foreground text-background rounded-full mr-4 font-bold">
                                        {skill.name[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{skill.name}</h3>
                                        <Badge variant="outline" className="mt-1 capitalize">{skill.category}</Badge>
                                    </div>
                                    <CheckCircle2 className="ml-auto w-5 h-5 text-foreground" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 border border-dashed rounded-xl text-center text-muted-foreground">
                            No badges yet. Start a challenge to unlock skills!
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Timer className="mr-2 h-5 w-5" /> Recent Applications
                    </h2>
                    {appliedJobs.length > 0 ? (
                        <div className="space-y-4">
                            {appliedJobs.map(job => (
                                <div key={job.id} className="p-4 bg-secondary/50 rounded-xl flex justify-between items-center group">
                                    <div>
                                        <h3 className="font-semibold">{job.title}</h3>
                                        <p className="text-sm text-muted-foreground">{job.company}</p>
                                    </div>
                                    <Badge className="bg-foreground/5 text-foreground hover:bg-foreground/10">Under Review</Badge>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 border border-dashed rounded-xl text-center text-muted-foreground">
                            No active applications. Unlock jobs to apply.
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
