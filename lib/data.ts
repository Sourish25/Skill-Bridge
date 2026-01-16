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
        company: 'Razorpay',
        location: 'Bangalore, KA',
        type: 'Full-time',
        salary: '₹24 - ₹35 LPA',
        skillId: 'react-advanced',
        description: 'We are looking for a frontend expert to help build the next generation of payments infrastructure.',
    },
    {
        id: 'job-2',
        title: 'Backend Systems Architect',
        company: 'Swiggy',
        location: 'Bangalore, KA',
        type: 'Full-time',
        salary: '₹45 - ₹60 LPA',
        skillId: 'node-perf',
        description: 'Architect scalable backend systems that power millions of orders per day.',
    },
    {
        id: 'job-3',
        title: 'Product Designer',
        company: 'Cred',
        location: 'Bangalore, KA',
        type: 'Full-time',
        salary: '₹20 - ₹30 LPA',
        skillId: 'ui-systems',
        description: 'Define and evolve our design system to support rapid product development.',
    },
    {
        id: 'job-4',
        title: 'Platform Engineer',
        company: 'Zomato',
        location: 'Gurgaon, HR',
        type: 'Contract',
        salary: '₹2,500/hr',
        skillId: 'k8s-basics',
        description: 'Help us build a robust infrastructure for our food delivery platform.',
    },
    {
        id: 'job-5',
        title: 'Systems Programmer',
        company: 'BrowserStack',
        location: 'Mumbai, MH',
        type: 'Full-time',
        salary: '₹30 - ₹45 LPA',
        skillId: 'rust-intro',
        description: 'Optimize our real-time testing infrastructure services using Rust.',
    },
];
