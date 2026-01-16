'use client';

import { BentoGrid } from '@/components/ui/bento-grid';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarClock, Users, ArrowRight, Building2, Rocket } from 'lucide-react';

const MOCK_PROJECTS = [
    {
        id: 'proj-1',
        title: 'Build a Design System for FinTech App',
        company: 'Stripe',
        duration: '4 Weeks',
        teamSize: 3,
        type: 'Micro-Internship',
        stack: ['React', 'Figma', 'Storybook'],
        locked: false,
    },
    {
        id: 'proj-2',
        title: 'Migrate Legacy API to GraphQL',
        company: 'Shopify',
        duration: '6 Weeks',
        teamSize: 5,
        type: 'Paid Project',
        stack: ['GraphQL', 'Node.js', 'Typescript'],
        locked: true,
    },
    {
        id: 'proj-3',
        title: 'Optimize Database Queries',
        company: 'PlanetScale',
        duration: '2 Weeks',
        teamSize: 2,
        type: 'Bounty',
        stack: ['MySQL', 'Go', 'Performance'],
        locked: true,
    },
    {
        id: 'proj-4',
        title: 'Implement Dark Mode & Accessibility',
        company: 'Vercel',
        duration: '3 Weeks',
        teamSize: 4,
        type: 'Micro-Internship',
        stack: ['Next.js', 'Tailwind', 'A11y'],
        locked: false,
    },
];

export default function ProjectsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Real-World Projects</h1>
                <p className="text-muted-foreground">
                    Gain experience. Work on actual production issues. Get hired by top teams.
                </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                {MOCK_PROJECTS.map((project, i) => (
                    <Card key={project.id} className={`flex flex-col h-full group hover:border-foreground/20 transition-all ${i === 0 || i === 3 ? "md:col-span-2" : ""}`}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                        <Building2 className="w-4 h-4" />
                                        {project.company}
                                    </div>
                                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                                </div>
                                <Badge variant={project.locked ? "outline" : "default"} className={project.locked ? "opacity-50" : ""}>
                                    {project.type}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <div className="flex gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                    <CalendarClock className="w-4 h-4" />
                                    {project.duration}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Users className="w-4 h-4" />
                                    {project.teamSize} Developers
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => (
                                    <Badge key={tech} variant="secondary" className="font-mono text-xs">{tech}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 border-t border-border/50">
                            <Button className="w-full group-hover:shadow-md transition-all" variant={project.locked ? "outline" : "default"} disabled={project.locked}>
                                {project.locked ? (
                                    <span className="flex items-center">Locked • Verify Skills First</span>
                                ) : (
                                    <span className="flex items-center">
                                        Apply to Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                )}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </BentoGrid>

            <div className="p-8 bg-secondary/10 rounded-2xl border border-dashed border-border/60 text-center space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                    <Rocket className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Want to post a project?</h3>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                    Companies can sponsor micro-internships to assess candidates in real-time.
                </p>
                <Button variant="outline">Partner with SkillBridge</Button>
            </div>

        </div>
    );
}
