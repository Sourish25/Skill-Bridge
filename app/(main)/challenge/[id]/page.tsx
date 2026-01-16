'use client';

import { useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUserStore } from '@/lib/store';
import { MOCK_SKILLS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, Play, Code, BookOpen, Loader2, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';

export default function ChallengePage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { addSkill } = useUserStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [repoUrl, setRepoUrl] = useState('');
    const [activeTab, setActiveTab] = useState('learn');

    const skillId = params.id as string;
    const jobId = searchParams.get('jobId');

    const skill = MOCK_SKILLS.find(s => s.id === skillId);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API verification delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        addSkill(skillId);
        setIsSubmitting(false);

        // Redirect back to jobs or the specific job
        if (jobId) {
            router.push(`/jobs`); //Ideally to the anchor or just jobs page to see it unlocked
        } else {
            router.push('/dashboard');
        }
    }

    if (!skill) {
        return <div className="p-8">Skill not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/jobs">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Verify Skill: {skill.name}</h1>
                        <p className="text-muted-foreground">Complete the challenge below to unlock related jobs.</p>
                    </div>
                </div>
                {activeTab === 'learn' && (
                    <Button variant="outline" onClick={() => setActiveTab('submit')}>
                        Skip Learning (Fast Track)
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Challenge Instructions</CardTitle>
                            <CardDescription>
                                Build a small proof-of-concept to demonstrate your proficiency in {skill.name}.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm leading-relaxed">
                            <p>
                                <strong>Scenario:</strong> You are tasked with implementing a core feature using {skill.name}.
                                Focus on code quality, performance, and best practices.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Create a new repository.</li>
                                <li>Implement the required feature (see distinct requirements in Learning Material).</li>
                                <li>Ensure your code runs without errors.</li>
                                <li>Push your code to GitHub/GitLab.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="learn" className="text-base h-11">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Interactive Course
                            </TabsTrigger>
                            <TabsTrigger value="submit" className="text-base h-11">
                                <Code className="w-4 h-4 mr-2" />
                                Submit Project
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="learn" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl">Module 1: Core Concepts</CardTitle>
                                            <CardDescription className="mt-1">Foundation knowledge required for the challenge.</CardDescription>
                                        </div>
                                        <Badge variant="outline">45 min</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button variant="ghost" className="w-full justify-start h-12 font-normal hover:bg-secondary/50">
                                        <Play className="w-4 h-4 mr-3 text-muted-foreground" />
                                        1.1 System Architecture Deep Dive
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start h-12 font-normal hover:bg-secondary/50">
                                        <Play className="w-4 h-4 mr-3 text-muted-foreground" />
                                        1.2 Patterns & Best Practices
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start h-12 font-normal hover:bg-secondary/50">
                                        <BookOpen className="w-4 h-4 mr-3 text-muted-foreground" />
                                        1.3 Reading: Official Documentation Guide
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl">Module 2: Advanced Implementation</CardTitle>
                                            <CardDescription className="mt-1">Practical techniques for production environments.</CardDescription>
                                        </div>
                                        <Badge variant="outline">1h 20m</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button variant="ghost" className="w-full justify-start h-12 font-normal hover:bg-secondary/50">
                                        <Play className="w-4 h-4 mr-3 text-muted-foreground" />
                                        2.1 Performance Optimization Strategies
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start h-12 font-normal hover:bg-secondary/50">
                                        <Play className="w-4 h-4 mr-3 text-muted-foreground" />
                                        2.2 Handling Edge Cases at Scale
                                    </Button>
                                    <div className="p-4 bg-secondary/20 rounded-lg flex items-center gap-3 border border-border/50">
                                        <Lock className="w-4 h-4 ml-1 text-muted-foreground" />
                                        <span className="text-sm font-medium text-muted-foreground">Module 3: Expert Workshops (Pro Only)</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="submit" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Submission</CardTitle>
                                    <CardDescription>
                                        Paste your repository URL below. Our automated system will run a quick analysis.
                                    </CardDescription>
                                </CardHeader>
                                <form onSubmit={handleSubmit}>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="repo-url">Repository URL</Label>
                                            <Input
                                                id="repo-url"
                                                placeholder="https://github.com/username/project"
                                                required
                                                value={repoUrl}
                                                onChange={(e) => setRepoUrl(e.target.value)}
                                            />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Verifying...
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle2 className="mr-2 h-4 w-4" />
                                                    Submit & Unlock Badge
                                                </>
                                            )}
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                <div>
                    <Card className="bg-secondary/20 border-secondary">
                        <CardHeader>
                            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Reward</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center text-center space-y-4">
                            <div className="w-24 h-24 bg-foreground text-background rounded-full flex items-center justify-center text-3xl font-bold">
                                {skill.name[0]}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{skill.name} Badge</h3>
                                <p className="text-sm text-muted-foreground">Unlocks {skill.category} roles</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
