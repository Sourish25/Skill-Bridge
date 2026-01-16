# SkillBridge 🌉
>
> **The Skill-Gated Job Market.**
> *Stop Watching. Start Building.*

![Project Status](https://img.shields.io/badge/Status-Prototype-orange)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js_14_|_TypeScript_|_Tailwind-black)
![License](https://img.shields.io/badge/License-MIT-blue)

## 💡 The Big Idea

**Degrees get you the interview. Skills get you the job.**

SkillBridge is a **"Reverse-Engineered Career Platform"** that solves the Student Skill-to-Job Mismatch. Unlike traditional job boards where anyone can spam "Apply," SkillBridge introduces a **Skill-Gating Mechanism**.

**The Core Logic:** Job applications are **LOCKED** by default. To unlock the "Apply" button, candidates must prove they possess the required skills by passing real-world **Micro-Project Challenges** verified by automated test cases.

---

## 🚀 Key Features

### 🔒 1. The "Skill-Gated" Job Board

* **The Lock:** You cannot apply to a job if you don't have the badge.
* **The Unlock:** Complete a specific coding challenge (e.g., "Build a REST API") to unlock the application.
* **The Result:** Recruiters receive fewer applications, but 100% of them are qualified.

### ⚡ 2. The "Fast Track" Protocol (For Pros)

* **No Mandatory Courses:** Experienced developers don't need to watch hours of video.
* **Skip to Challenge:** Pros can bypass the learning modules and jump straight to the code editor to prove their skills instantly.

### 🧪 3. Automated Verification & GitHub Sync

* **In-Browser IDE:** Write code directly in the browser and run automated test cases.
* **Repo Sync:** Link an existing GitHub repository. Our AI scans it to verify if it meets the job's architectural requirements.

### 🎨 4. "Swiss Style" Minimalist UI

* **Apple-Inspired Design:** A strictly monochrome (Black & White) interface using Bento Grid layouts.
* **Zero Clutter:** No distractions. Just code, skills, and jobs.

### 🕵️ 5. Blind Hiring Mode

* **Bias Removal:** Recruiters initially see "Skills Verified" and "Code Quality Scores" instead of names or college degrees.

---

## 🛠️ The Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Strict Monochrome Theme)
* **Icons:** Lucide React
* **UI Components:** Shadcn/UI (Radix Primitives)
* **State Management:** Zustand
* **Code Editor:** Monaco Editor (VS Code for browser)

---

## ⚙️ How It Works (User Journey)

1. **Browse Jobs:** User sees a job listing (e.g., "Frontend Dev @ Swiggy"). The status is **LOCKED**.
2. **Gap Analysis:** User clicks the job. System detects missing skill: *React Query*.
3. **The Challenge:**
    * *Path A (Learner):* Watch a crash course, then take the test.
    * *Path B (Pro):* Skip video, open Editor, build a caching component.
4. **Verification:** Code runs against test cases. **Pass** = **Badge Earned**.
5. **Unlock:** User is redirected to the Job Board. The "Apply" button is now **Active**.

---

## 📸 Screenshots / Concept

| The Dashboard | The "Locked" Job Board | The Code Editor |
| :---: | :---: | :---: |
| *(Add Screenshot)* | *(Add Screenshot)* | *(Add Screenshot)* |

---

## 🏃 Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/skillbridge.git
cd skillbridge
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
