'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/progress'; // We might need to check if Slider exists or use Input range
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

// Mock Slider component since shadcn slider might not be installed by default in user's env yet or I missed checking.
// Using native input range for simplicity and robustness.

const ROLES = [
    "Frontend Developer", "Backend Developer", "Full Stack Engineer",
    "Product Designer", "Mobile Developer", "DevOps Engineer",
    "Data Scientist", "Product Manager"
];

export default function GoalsPage() {
    const router = useRouter();
    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
    const [salaryRange, setSalaryRange] = useState(12); // in LPA

    const toggleRole = (role: string) => {
        setSelectedRoles(prev =>
            prev.includes(role)
                ? prev.filter(r => r !== role)
                : [...prev, role]
        );
    };

    const handleFinish = () => {
        // Here we would save to store/backend
        router.push('/dashboard');
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">What are your career goals?</h1>
                <p className="text-muted-foreground">We'll recommend jobs and challenges based on your preferences.</p>
            </div>

            <Card className="border-border shadow-sm">
                <CardContent className="space-y-8 pt-8">

                    {/* Role Selection */}
                    <div className="space-y-4">
                        <Label className="text-base">Target Roles</Label>
                        <div className="flex flex-wrap gap-2">
                            {ROLES.map(role => {
                                const isSelected = selectedRoles.includes(role);
                                return (
                                    <button
                                        key={role}
                                        onClick={() => toggleRole(role)}
                                        className={cn(
                                            "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                            isSelected
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "bg-background text-foreground border-border hover:border-gray-400"
                                        )}
                                    >
                                        {role} {isSelected && <Check className="inline-block ml-1 w-3 h-3" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Salary Expectation */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base">Minimum Salary Expectation</Label>
                            <span className="text-lg font-bold text-primary">₹{salaryRange} LPA</span>
                        </div>
                        <div className="pt-2">
                            <input
                                type="range"
                                min="3"
                                max="100"
                                step="1"
                                value={salaryRange}
                                onChange={(e) => setSalaryRange(Number(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                <span>₹3 LPA</span>
                                <span>₹50 LPA</span>
                                <span>₹100+ LPA</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            We'll hide jobs that pay less than this.
                        </p>
                    </div>

                </CardContent>
                <CardFooter className="flex justify-end border-t border-border p-6 bg-secondary/5">
                    <Button
                        onClick={handleFinish}
                        disabled={selectedRoles.length === 0}
                        className="w-full md:w-auto"
                    >
                        Finish Setup <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
