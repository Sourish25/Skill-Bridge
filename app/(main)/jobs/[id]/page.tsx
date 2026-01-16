'use client';

import { useParams, useRouter } from 'next/navigation';
import { MOCK_JOBS, MOCK_SKILLS } from '@/lib/data';
import { useUserStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SkillGapAnalyzer } from '@/components/SkillGapAnalyzer';
import { ArrowLeft, MapPin, Briefcase, Building2, Lock, CheckCircle2, ExternalLink, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function JobDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { hasSkill, activeApplications, applyToJob } = useUserStore();

    const jobId = params.id as string;
    const job = MOCK_JOBS.find(j => j.id === jobId);

    if (!job) {
        return <div className="p-8">Job not found</div>;
    }

    const isUnlocked = hasSkill(job.skillId);
    const isApplied = activeApplications.includes(jobId);
    const skillName = MOCK_SKILLS.find(s => s.id === job.skillId)?.name;

    const handleApply = () => {
        applyToJob(jobId);
        toast.success("Application Sent Successully", {
            description: `Your verified profile has been sent to ${job.company}.`,
            duration: 5000,
        });
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            {/* Back Nav */}
            <Button variant="ghost" className="-ml-4 hover:bg-transparent" asChild>
                <Link href="/jobs" className="text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Jobs
                </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left Col: Job Details */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Header */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-foreground text-background rounded-xl flex items-center justify-center font-bold text-xl">
                                {job.company[0]}
                            </div>
                            {job.id === 'job-2' && ( // Mock "Sponsored" for specific job
                                <Badge variant="secondary" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-3 py-1">
                                    SPONSORED
                                </Badge>
                            )}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight mb-2">{job.title}</h1>
                        <div className="flex items-center text-lg text-muted-foreground gap-2">
                            <Building2 className="w-5 h-5" />
                            <span className="font-medium text-foreground">{job.company}</span>
                        </div>
                    </div>

                    {/* Meta Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl border border-border bg-card">
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Type</p>
                            <div className="flex items-center gap-2 font-medium">
                                <Briefcase className="w-4 h-4" /> {job.type}
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-border bg-card">
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Location</p>
                            <div className="flex items-center gap-2 font-medium">
                                <MapPin className="w-4 h-4" /> {job.location}
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-border bg-card">
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Salary</p>
                            <div className="flex items-center gap-2 font-medium">
                                <IndianRupee className="w-4 h-4" /> {job.salary}
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Description */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">About the Role</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {job.description}
                        </p>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                We are looking for a passionate individual who loves building scalable systems.
                                You will be working with a team of world-class engineers to deliver high-quality software.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Design and implement new features</li>
                                <li>Optimize application for maximum speed and scalability</li>
                                <li>Collaborate with other team members and stakeholders</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Col: Action & Analysis */}
                <div className="space-y-6">

                    {/* CTA Card */}
                    <div className="p-6 rounded-2xl border border-border bg-card shadow-sm sticky top-8">
                        {isApplied ? (
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Application Sent!</h3>
                                    <p className="text-muted-foreground text-sm">You applied on {new Date().toLocaleDateString()}</p>
                                </div>
                                <Button variant="outline" className="w-full" disabled>
                                    Application Under Review
                                </Button>
                            </div>
                        ) : isUnlocked ? (
                            <div className="space-y-4">
                                <h3 className="font-bold text-lg">Ready to Apply?</h3>
                                <p className="text-sm text-muted-foreground">
                                    Your verified <strong>{skillName}</strong> badge makes you a top 10% candidate.
                                </p>
                                <Button onClick={handleApply} className="w-full h-12 text-lg font-bold shadow-sm">
                                    Apply Now <ExternalLink className="ml-2 w-4 h-4" />
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    Profile will be shared instantly.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-200 dark:border-amber-900/30">
                                    <Lock className="w-5 h-5" />
                                    <span className="font-semibold text-sm">Application Locked</span>
                                </div>
                                <Button variant="outline" className="w-full h-12 text-lg" disabled>
                                    Apply Now
                                </Button>
                                <p className="text-xs text-muted-foreground text-center">
                                    Prove your skills to unlock this role.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* AI Analysis */}
                    <SkillGapAnalyzer requiredSkillId={job.skillId} />

                </div>
            </div>
        </div>
    );
}
