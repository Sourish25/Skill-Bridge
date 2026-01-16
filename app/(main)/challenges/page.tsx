'use client';

import Link from 'next/link';
import { MOCK_SKILLS } from '@/lib/data';
import { useUserStore } from '@/lib/store';
import { BentoGrid } from '@/components/ui/bento-grid';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lock, ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ChallengesPage() {
    const unlockedSkillIds = useUserStore((state) => state.unlockedSkillIds);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Skill Challenges</h1>
                <p className="text-muted-foreground">
                    Prove your expertise. Earn badges. Unlock exclusive job opportunities.
                </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                {MOCK_SKILLS.map((skill, i) => {
                    const isUnlocked = unlockedSkillIds.includes(skill.id);

                    return (
                        <Card
                            key={skill.id}
                            className={cn(
                                "flex flex-col h-full transition-all duration-200 border-border group overflow-hidden",
                                i === 0 || i === 3 ? "md:col-span-2" : "",
                                isUnlocked ? "bg-secondary/20" : "bg-card hover:border-foreground/20"
                            )}
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl font-bold tracking-tight flex items-center">
                                            {skill.name}
                                            {isUnlocked && <CheckCircle2 className="ml-2 w-5 h-5 text-foreground" />}
                                        </CardTitle>
                                        <Badge variant="secondary" className="mt-2 font-mono text-xs uppercase tracking-wider">
                                            {skill.category}
                                        </Badge>
                                    </div>
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg",
                                        isUnlocked ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"
                                    )}>
                                        {skill.name[0]}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Complete the micro-project to prove your mastery of {skill.name}.
                                    Unlocks {skill.category} roles at top companies.
                                </p>
                            </CardContent>
                            <CardFooter className="pt-4 border-t border-border/50">
                                {isUnlocked ? (
                                    <Button variant="ghost" className="w-full cursor-default hover:bg-transparent">
                                        <span className="text-foreground font-semibold flex items-center">
                                            Verified <CheckCircle2 className="ml-2 w-4 h-4" />
                                        </span>
                                    </Button>
                                ) : (
                                    <Button asChild className="w-full group-hover:shadow-md transition-all">
                                        <Link href={`/challenge/${skill.id}`}>
                                            Start Challenge <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    );
                })}
            </BentoGrid>
        </div>
    );
}
