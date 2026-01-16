import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState } from './types';

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            unlockedSkillIds: [], // Start with no skills unlocked
            activeApplications: [],

            addSkill: (skillId: string) => {
                const currentSkills = get().unlockedSkillIds;
                if (!currentSkills.includes(skillId)) {
                    set({ unlockedSkillIds: [...currentSkills, skillId] });
                }
            },

            applyToJob: (jobId: string) => {
                const currentApps = get().activeApplications;
                if (!currentApps.includes(jobId)) {
                    set({ activeApplications: [...currentApps, jobId] });
                }
            },

            hasSkill: (skillId: string) => {
                return get().unlockedSkillIds.includes(skillId);
            },
        }),
        {
            name: 'skill-bridge-user-storage',
        }
    )
);
