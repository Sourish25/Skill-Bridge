'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle } from 'lucide-react';

export default function OnboardingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const steps = [
        { id: 1, name: 'Upload Resume', path: '/onboarding/resume' },
        { id: 2, name: 'Set Goals', path: '/onboarding/goals' },
    ];

    const currentStepIdx = steps.findIndex(s => pathname.includes(s.path));

    return (
        <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4">

            {/* Stepper */}
            <div className="w-full max-w-3xl mb-12">
                <nav aria-label="Progress">
                    <ol role="list" className="flex items-center">
                        {steps.map((step, stepIdx) => (
                            <li key={step.name} className={cn(
                                "relative",
                                stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20 w-full" : ""
                            )}>
                                {stepIdx < currentStepIdx ? (
                                    <>
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="h-0.5 w-full bg-primary" />
                                        </div>
                                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-primary/90">
                                            <CheckCircle2 className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                                            <span className="sr-only">{step.name}</span>
                                        </div>
                                    </>
                                ) : stepIdx === currentStepIdx ? (
                                    <>
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="h-0.5 w-full bg-border" />
                                        </div>
                                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background" aria-current="step">
                                            <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                                            <span className="sr-only">{step.name}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="h-0.5 w-full bg-border" />
                                        </div>
                                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background hover:border-gray-400">
                                            <Circle className="h-5 w-5 text-transparent" aria-hidden="true" />
                                            <span className="sr-only">{step.name}</span>
                                        </div>
                                    </>
                                )}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max text-sm font-medium text-foreground/80">
                                    {step.name}
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>

            {/* Content */}
            <main className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                {children}
            </main>
        </div>
    );
}
