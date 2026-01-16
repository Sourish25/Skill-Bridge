'use client';

import Link from 'next/link';
import { Briefcase, MapPin, Lock, Unlock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Job } from '@/lib/types';
import { useUserStore } from '@/lib/store';
import { cn } from '@/lib/utils';

interface JobCardProps {
    job: Job;
    className?: string;
}

export function JobCard({ job, className }: JobCardProps) {
    const hasSkill = useUserStore((state) => state.hasSkill(job.skillId));

    return (
        <Card className={cn("flex flex-col h-full transition-all duration-200 border-border hover:border-foreground/20 bg-card group shadow-none hover:shadow-sm", className)}>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl font-bold tracking-tight">
                            <Link href={`/jobs/${job.id}`} className="hover:underline decoration-2 underline-offset-4">
                                {job.title}
                            </Link>
                        </CardTitle>
                        <p className="text-muted-foreground text-sm font-medium mt-1">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs uppercase tracking-wider">
                        {job.type}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="flex-grow space-y-4">
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        {job.location}
                    </div>
                    <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1.5" />
                        {job.salary}
                    </div>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
                    {job.description}
                </p>
            </CardContent>

            <CardFooter className="pt-4 border-t border-border/50">
                {hasSkill ? (
                    <Button asChild className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold group-hover:shadow-md transition-all">
                        <Link href={`/jobs/${job.id}`}>
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                ) : (
                    <Button asChild variant="outline" className="w-full border-dashed border-foreground/30 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors cursor-pointer">
                        <Link href={`/challenge/${job.skillId}?jobId=${job.id}`}>
                            <Lock className="w-4 h-4 mr-2" />
                            Locked • Verify {job.skillId.split('-').join(' ')} to Apply
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
