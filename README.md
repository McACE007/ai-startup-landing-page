# 🌌 AI Startup Landing Page

A **visually stunning**, **dark-themed SaaS landing page** for AI startups — built with **Next.js**, **TailwindCSS**, **Framer Motion**, and **Lottie Animations**. Designed to impress clients, recruiters, and investors alike, this landing page combines clean UI/UX, smooth transitions, and responsive design best practices.

---

## 🔗 Live Demo

[ai-startup-landing-page-eight.vercel.app](ai-startup-landing-page-eight.vercel.app)

---

## 🚀 Tech Stack

- **Next.js** – React Framework for performance and SEO
- **TailwindCSS** – Utility-first CSS for fast and modern UI
- **Framer Motion** – Library for React animations
- **Lottie** – High-quality animated icons using JSON
- **TypeScript** – Static type-checking for scalable code
- **Figma** – Design inspiration from Framer UI Kit

---

## 🎯 Features

- 🌒 **Dark Mode** UI focused on elegance and readability
- 📱 Fully responsive – looks great on all devices
- 🎥 Beautiful **Lottie animations** for engaging icons
- 🎞️ Smooth transitions with **Framer Motion**
- 🔍 SEO-optimized via Next.js
- ⚡ Fast load times and modern performance practices

---

## 📸 Preview

![Dark SaaS Landing Page Preview](./public/preview.png)

---

## 🧱 Sections Overview

- ✅ Navbar
- 🎯 Hero Section
- 🚀 Logo Ticker (Brand Trust)
- ✨ Features Section (with Lottie icons)
- 📦 Product Showcase
- ❓ FAQs Section
- 📣 Call-To-Action
- 🦶 Footer

---

## 🗂️ Project Structure

```
ai-startup-landing-page/
├── components/          # UI Components (Navbar, Hero, Features, etc.)
├── public/              # Static assets (Lottie JSON, images)
├── pages/               # Next.js routes (index.tsx)
├── styles/              # Global styles
├── utils/               # Utility functions (if needed)
├── .eslintrc.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mcace007/ai-startup-landing-page.git
cd ai-startup-landing-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development

```bash
npm run dev
```

Go to `http://localhost:3000` to see it in action.

---

## ⚙️ Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Lottie Animations

This project uses **LottieFiles** animations for feature icons. You can find and customize them at:

- [https://lottiefiles.com](https://lottiefiles.com)

Lottie icons are stored in `public/lotties/` and rendered using the `lottie-react` package:

```bash
npm install lottie-react
```

Usage example:

```tsx
import Lottie from 'lottie-react';
import animationData from '../public/lotties/ai-brain.json';

<Lottie animationData={animationData} loop={true} />
```

---

## 🧠 Learnings & Skills Gained

- Structuring modern web apps with Next.js
- Creating responsive layouts with TailwindCSS
- Animating components using Framer Motion
- Integrating Lottie animations in a real-world project
- Building accessible, visually appealing dark themes

---
