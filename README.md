# Aneesh Pal — Developer Portfolio

A responsive, dark navy portfolio inspired by the two UI references you shared:
- Large centered/left-aligned typography and an atmospheric 3D hero.
- Minimal navigation, bright green accent, floating geometric forms and a code-editor detail.
- Responsive project cards, skills, milestones and contact links.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ recommended.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Personal links already configured

- Email: aneeshpal2308@gmail.com
- Phone: +91-7880477112
- GitHub: https://github.com/AneeshPal
- LinkedIn: https://linkedin.com/in/aneesh-pal-b84014312
- LeetCode: currently links to https://leetcode.com/ because your exact profile URL was not available.

## Important: add your exact links

Open `src/data.js`.

1. Replace `leetcode` with your LeetCode profile URL.
2. Add each project's exact GitHub repository URL in its `github` field.
3. Add a deployed project URL in its `demo` field if available.
4. Your attached resume is already included at `public/resume.pdf` and linked from the hero. Replace it whenever you update your resume.

Project GitHub/demo URLs were left configurable rather than inventing repository addresses. Until you add project-specific URLs, each project links to your GitHub repositories page.

## Content notes

Portfolio content was prepared from the resume you attached and details previously shared in this conversation. The resume states 81.4% through 6th semester; this percentage is intentionally not shown on the website so it won't become stale. Confirm project descriptions and update anything that has changed before publishing.

## Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. Import the repository at https://vercel.com/new
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.
