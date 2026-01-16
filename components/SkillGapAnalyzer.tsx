'use client';

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, ArrowRight, BrainCircuit, UploadCloud, FileText, Loader2 } from "lucide-react";
import Link from "next/link";
import { useUserStore } from "@/lib/store";
import { MOCK_SKILLS } from "@/lib/data";
import { useState } from "react";

interface SkillGapAnalyzerProps {
    requiredSkillId: string;
}

export function SkillGapAnalyzer({ requiredSkillId }: SkillGapAnalyzerProps) {
    const hasSkill = useUserStore((state) => state.hasSkill(requiredSkillId));
    const skillName = MOCK_SKILLS.find(s => s.id === requiredSkillId)?.name || requiredSkillId;
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [resumeUploaded, setResumeUploaded] = useState(false);

    const keySkills = ["Communication & Teamwork", "Basic Development Tools"];

    const handleUpload = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setResumeUploaded(true);
        }, 2000);
    };

    // Mock data for the "AI Analysis"
    const matchScore = hasSkill ? 98 : (resumeUploaded ? 72 : 45);

    if (!resumeUploaded && !hasSkill) {
        return (
            <Card className="bg-secondary/10 border-foreground/10 overflow-hidden">
                <div className="p-4 border-b border-border/50 bg-background/50 backdrop-blur-sm flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-foreground" />
                    <span className="font-semibold text-sm tracking-wide">AI Resume Match Analysis</span>
                </div>
                <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">Analyze Your Fit</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                            Upload your resume to see how you match against this role's requirements.
                        </p>
                    </div>
                    <Button onClick={handleUpload} disabled={isAnalyzing} className="w-full">
                        {isAnalyzing ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                            </>
                        ) : (
                            <>
                                <UploadCloud className="mr-2 h-4 w-4" /> Upload Resume
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="bg-secondary/10 border-foreground/10 overflow-hidden">
            <div className="p-4 border-b border-border/50 bg-background/50 backdrop-blur-sm flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-foreground" />
                <span className="font-semibold text-sm tracking-wide">AI Resume Match Analysis</span>
            </div>

            <CardContent className="p-6 space-y-6">

                {/* Match Score */}
                <div className="space-y-2">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-muted-foreground">Match Probability</span>
                        <span className="text-3xl font-bold tracking-tight">{matchScore}%</span>
                    </div>
                    <Progress value={matchScore} className="h-2" />
                </div>

                {/* Gap Analysis List */}
                <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skill Requirements</h4>

                    {/* Base "Universal" Skills (Mocked as passed) */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border/50">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
                            <span>Communication & Teamwork</span>
                        </div>
                        <Badge variant="secondary" className="text-[10px]">VERIFIED</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border/50">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
                            <span>Basic Development Tools</span>
                        </div>
                        <Badge variant="secondary" className="text-[10px]">VERIFIED</Badge>
                    </div>

                    {/* The Dynamic Required Skill */}
                    <div className={`flex items-center justify-between p-3 rounded-lg border ${hasSkill ? 'bg-background border-border/50' : 'bg-red-500/5 border-red-500/20'}`}>
                        <div className="flex items-center gap-3">
                            {hasSkill ? (
                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
                            ) : (
                                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-500" />
                            )}
                            <span className={hasSkill ? "" : "font-medium text-red-700 dark:text-red-400"}>
                                {skillName} Proficiency
                            </span>
                        </div>
                        {hasSkill ? (
                            <Badge variant="secondary" className="text-[10px]">VERIFIED</Badge>
                        ) : (
                            <Badge variant="destructive" className="text-[10px]">MISSING</Badge>
                        )}
                    </div>
                </div>

                {/* Actionable Insight */}
                {!hasSkill && (
                    <div className="bg-background rounded-lg p-4 border border-border/50 shadow-sm">
                        <p className="text-sm text-foreground/80 mb-3">
                            <span className="font-semibold block mb-1">Critical Gap Detected:</span>
                            Your profile is missing verification for <strong>{skillName}</strong>. Completing this challenge increases your hiring probability by ~35%.
                        </p>
                        <Button asChild size="sm" className="w-full font-semibold">
                            <Link href={`/challenge/${requiredSkillId}`}>
                                Verify {skillName} Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                )}

            </CardContent>
        </Card>
    );
}
