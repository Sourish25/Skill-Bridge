import { Job, Skill } from './types';

export const MOCK_SKILLS: Skill[] = [
    { id: 'react-advanced', name: 'React Advanced', category: 'frontend' },
    { id: 'node-perf', name: 'Node.js Performance', category: 'backend' },
    { id: 'ui-systems', name: 'Design Systems', category: 'design' },
    { id: 'k8s-basics', name: 'Kubernetes Basics', category: 'devops' },
    { id: 'rust-intro', name: 'Rust Introduction', category: 'backend' },
];

export const MOCK_JOBS: Job[] = [
    {
        id: 'job-1',
        title: 'Senior Frontend Engineer',
        company: 'Vercel',
        location: 'Remote',
        type: 'Full-time',
        salary: '160k - 210k',
        skillId: 'react-advanced',
        description: 'We are looking for a frontend expert to help build the next generation of web deployment tools.',
    },
    {
        id: 'job-2',
        title: 'Backend Systems Architect',
        company: 'Uber',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '200k - 280k',
        skillId: 'node-perf',
        description: 'Architect scalable backend systems that power millions of rides per day.',
    },
    {
        id: 'job-3',
        title: 'Product Designer',
        company: 'Airbnb',
        location: 'Remote',
        type: 'Full-time',
        salary: '150k - 190k',
        skillId: 'ui-systems',
        description: 'Define and evolve our design system to support rapid product development.',
    },
    {
        id: 'job-4',
        title: 'Platform Engineer',
        company: 'Linear',
        location: 'Remote',
        type: 'Contract',
        salary: '100/hr',
        skillId: 'k8s-basics',
        description: 'Help us build a robust infrastructure for our issue tracking platform.',
    },
    {
        id: 'job-5',
        title: 'Systems Programmer',
        company: 'Discord',
        location: 'Remote',
        type: 'Full-time',
        salary: '180k - 240k',
        skillId: 'rust-intro',
        description: 'Optimize our real-time voice and video services using Rust.',
    },
];
