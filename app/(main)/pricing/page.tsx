'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Zap, BrainCircuit, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function PricingPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-16 py-8">

            {/* Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">Invest in Your Career</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Prove your skills for free. Upgrade to accelerate your growth with AI-powered insights and advanced learning modules.
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                {/* Free Tier */}
                <Card className="border-border shadow-none h-full flex flex-col">
                    <CardHeader className="p-8 pb-0">
                        <CardTitle className="text-2xl font-bold">Standard</CardTitle>
                        <CardDescription className="text-base mt-2">For developers proving their skills.</CardDescription>
                        <div className="my-6">
                            <span className="text-4xl font-bold">₹0</span>
                            <span className="text-muted-foreground">/month</span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 flex-grow">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
                                <span>Unlimited Skill Challenges</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
                                <span>Apply to all "Unlocked" Jobs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
                                <span>Basic Public Profile</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="p-8 pt-0 mt-auto">
                        <Button variant="outline" className="w-full h-12 text-lg font-semibold" asChild>
                            <Link href="/challenges">Start for Free</Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Pro Tier */}
                <Card className="border-foreground/20 shadow-xl bg-foreground text-background h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-background text-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                        POPULAR
                    </div>
                    <CardHeader className="p-8 pb-0">
                        <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span className="text-yellow-400 font-bold tracking-wide text-sm">PRO ACCELERATOR</span>
                        </div>
                        <CardTitle className="text-2xl font-bold">Professional</CardTitle>
                        <CardDescription className="text-base mt-2 text-background/80">For serious career climbers.</CardDescription>
                        <div className="my-6">
                            <span className="text-4xl font-bold">₹998</span>
                            <span className="text-background/80">/month</span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 flex-grow">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <BrainCircuit className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span className="font-semibold">AI Skill Gap Analysis</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Rocket className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span className="font-semibold">Featured Candidate Status</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-background shrink-0 opacity-80" />
                                <span className="opacity-90">Deep-Dive Course Modules</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-background shrink-0 opacity-80" />
                                <span className="opacity-90">Priority Application Review</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="p-8 pt-0 mt-auto">
                        <Button variant="secondary" className="w-full h-12 text-lg font-bold bg-background text-foreground hover:bg-background/90">
                            Upgrade to Pro
                        </Button>
                    </CardFooter>
                </Card>

            </div>
        </div>
    );
}
