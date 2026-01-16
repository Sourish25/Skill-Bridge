import Link from "next/link";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full opacity-50 blur-3xl -z-10" />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight">SkillBridge</span>
        </div>
        <Button variant="ghost" className="font-medium" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">The Skill-Based Job Market</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Stop Watching. <br />
            <span className="text-muted-foreground">Start Building.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The first career platform where jobs are locked by default.
            Prove your skills with micro-projects to unlock high-paying opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Button asChild size="lg" className="h-12 px-8 text-lg rounded-full">
            <Link href="/login">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full border-border">
            <Link href="/jobs">
              View Locked Jobs
            </Link>
          </Button>
        </div>

        <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          <div className="p-6 bg-card rounded-2xl border border-border">
            <Lock className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-bold text-lg mb-2">Skill-Gated Access</h3>
            <p className="text-sm text-muted-foreground">Jobs are visible but locked. You can't spam apply. Quality over quantity.</p>
          </div>
          <div className="p-6 bg-card rounded-2xl border border-border">
            <CheckCircle2 className="w-8 h-8 mb-4 text-foreground" />
            <h3 className="font-bold text-lg mb-2">Project Verification</h3>
            <p className="text-sm text-muted-foreground">Complete a 30-min coding challenge to prove you have the required skill.</p>
          </div>
          <div className="p-6 bg-card rounded-2xl border border-border">
            <ArrowRight className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-bold text-lg mb-2">Direct Interviews</h3>
            <p className="text-sm text-muted-foreground">Unlocking a job guarantees your profile is seen by the hiring manager.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
