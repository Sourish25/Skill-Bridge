export interface Skill {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'design' | 'devops';
}

export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: 'Full-time' | 'Contract' | 'Remote';
    salary: string;
    skillId: string; // The badge required to unlock this job
    description: string;
    isUnlocked?: boolean; // Derived state for UI convenience
}

export interface UserState {
    unlockedSkillIds: string[];
    activeApplications: string[]; // Job Ids
    addSkill: (skillId: string) => void;
    applyToJob: (jobId: string) => void;
    hasSkill: (skillId: string) => boolean;
}
