'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, FileText, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils'; // Assuming you have utility for classnames

export default function ResumePage() {
    const router = useRouter();
    const [isDragging, setIsDragging] = useState(false);
    const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'parsing' | 'done'>('idle');

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        startUploadSimulation();
    };

    const startUploadSimulation = () => {
        setUploadState('uploading');
        // Simulate upload
        setTimeout(() => {
            setUploadState('parsing');
            // Simulate AI parsing
            setTimeout(() => {
                setUploadState('done');
            }, 2000);
        }, 1500);
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">First, let's get to know you.</h1>
                <p className="text-muted-foreground">Upload your resume to auto-fill your skill profile.</p>
            </div>

            <Card className="border-border shadow-sm">
                <CardContent className="pt-6">
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => uploadState === 'idle' && startUploadSimulation()}
                        className={cn(
                            "border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors cursor-pointer min-h-[300px]",
                            isDragging ? "border-primary bg-primary/5" : "border-border hover:bg-secondary/50",
                            uploadState !== 'idle' ? "pointer-events-none opacity-50" : ""
                        )}
                    >
                        {uploadState === 'idle' && (
                            <>
                                <div className="p-4 bg-secondary rounded-full mb-4">
                                    <UploadCloud className="w-8 h-8 text-foreground" />
                                </div>
                                <h3 className="font-semibold text-lg mb-1">Click or drag resume here</h3>
                                <p className="text-sm text-muted-foreground">Supports PDF, DOCX (Max 10MB)</p>
                            </>
                        )}

                        {uploadState === 'uploading' && (
                            <>
                                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                                <h3 className="font-semibold text-lg">Uploading...</h3>
                            </>
                        )}

                        {uploadState === 'parsing' && (
                            <>
                                <div className="relative">
                                    <FileText className="w-10 h-10 text-primary mb-4 animate-pulse" />
                                    <div className="absolute -right-2 -top-2">
                                        <span className="flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-lg">AI is analyzing your skills...</h3>
                                <p className="text-sm text-muted-foreground mt-1">Extracting experience from "Resume.pdf"</p>
                            </>
                        )}

                        {uploadState === 'done' && (
                            <>
                                <div className="p-4 bg-green-500/10 rounded-full mb-4">
                                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="font-semibold text-lg">Resume Analyzed!</h3>
                                <p className="text-sm text-muted-foreground mt-1">We found verified React and Node.js experience.</p>
                            </>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-border p-6 bg-secondary/5">
                    <Button variant="ghost" onClick={() => router.push('/onboarding/goals')}>Skip for now</Button>
                    <Button
                        onClick={() => router.push('/onboarding/goals')}
                        disabled={uploadState !== 'done'}
                    >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
