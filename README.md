# Stefan Seunarine - Personal Portfolio

> ![Portfolio home page showing subtle UI details like dotted textures and parallax layers](/portfolio.webp)

## Introduction
This project is an intuitive, geometric, nature-inspired portfolio that utilizes parallax and organic motion to communicate my skill and experience as a developer.
It is a space in which I'll showcase my professional experience, interesting projects I'm either working on or have completed, and where I'll publish technical articles about topics I'm interested in.

## Live Demo
**Portfolio:** [https://stefanseunarine.dev](https://stefanseunarine.dev)
**GitHub Repository:** [https://github.com/JalenLT/portfolio](https://github.com/JalenLT/portfolio)

## Features
- Fully responsive modern UI with TailwindCSS  
- Animated parallax layers and environmental motion effects  
- Custom React components (LinkDrawer navigation, parallax leaves, dotted backgrounds, motion elements)  
- SEO-optimized with canonical URLs, metadata, and Next.js optimizations  
- Blog system powered by Markdown/MDX  
- Project showcase section with detailed writeups  
- Smooth transitions and micro-interactions  
- Deployed on Cloudflare Pages with fast global CDN  

## Tech Stack

### Frontend
- **Next.js 15**
- **React**
- **TypeScript**
- **TailwindCSS**
- **Shadcn**

### Design
- Custom illustrations (leaves, tree, and creature)  
- Tailored color palette reflecting organic, earthy tones  

### Deployment
- Cloudflare Pages

## Project Structure
```bash
/
├─ app/
│  ├─ blog/
│  ├─ blogs/
│  ├─ projects/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ loading.tsx
│  └─ page.tsx
│
├─ components/
│  ├─ groups/
│  ├─ ui/
│  └─ content/
│
├─ data/
│
├─ lib/
│  └─ utils/
│
├─ node_modules/
│
├─ public/
│  ├─ images/
│  │  ├─ blogs/
│  │  ├─ logo/
│  │  └─ src/
│
├─ types/
│
├─ .env.local
├─ .gitignore
├─ components.json
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next-sitemap.config.js
├─ next.config.ts
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
├─ README.md
└─ tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation
```bash
git clone https://github.com/JalenLT/portfolio
cd stefan-portfolio
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Customization
This portfolio is designed to be fully editable through JSON configuration and Markdown/MDX content files. You can update your personal information, projects, and blog posts without touching the core UI code.

### Update User Information
Your personal profile data (name, title, bio, links, etc.) is stored in:
```bash
data/user_data.json
```
Modify this file to update the information displayed on the homepage.

### Manage Projects
All portfolio project cards are generated from:
```bash
data/project_card_data.json
```
Each entry represents a project card.

### Manage Blog Cards
The list of blogs displayed is driven by:
```bash
data/blog_card_data.json
```
Each entry corresponds to a blog preview card.
You can freely add new blog metadata here.

### Add New Blog Content
Blog posts themselves are stored as Markdown/MDX files under:
```bash
content/blog/
```
To add a new blog post:
1. Create a new file in **content/blog/**, eg:
```bash
content/blog/how-i-built-my-portfolio.mdx
```

2. Include at the top:
```md
---
title: "Your Blog Title"
description: "Short description"
date: "2025-01-01"
tags: ["UI Design", "React", "Next.js"]
---
```

3. Write your blog content below this.


## Credits
- Lucide Icons for UI icons
- ShadCN UI for component foundations
- Next.js and React community for core tooling
- Custom art created specifically for this portfolio

## License
All rights reserved.

## Contact

### Email

stefanseunarine@gmail.com

### LinkedIn

https://linkedin.com/in/stefanseunarine

### GitHub

https://github.com/JalenLT
