'use client';

import { MOCK_JOBS } from '@/lib/data';
import { JobCard } from '@/components/JobCard';
import { BentoGrid } from '@/components/ui/bento-grid';

export default function JobsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Job Board</h1>
                <p className="text-muted-foreground">
                    Unlock high-paying roles by proving your skills.
                </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                {MOCK_JOBS.map((job, i) => (
                    <JobCard key={job.id} job={job} className={i === 0 || i === 3 ? "md:col-span-2" : ""} />
                ))}
            </BentoGrid>
        </div>
    );
}
