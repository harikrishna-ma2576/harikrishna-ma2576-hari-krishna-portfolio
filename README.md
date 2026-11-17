# Hari Krishna M A | Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```
Requires Node.js 18+.

## Customize (everything lives in `src/data/siteData.js`)
- Email, GitHub, LinkedIn, intro text, college, CGPA
- Project images and GitHub/Live Demo links (empty = disabled button)
- Certificates, achievements
- Profile photo: put it in `public/` and set `photo: '/profile.jpg'`
- Resume: replace `public/resume.pdf` with your own PDF
- Contact form: paste a Formspree endpoint into `formEndpoint`; otherwise it opens the visitor's email app

## Deploy
**Vercel:** push to GitHub, then vercel.com > Add New > Project > import the repo. Framework: Vite (auto-detected), build `npm run build`, output `dist`. Deploy.
**Netlify:** push to GitHub, then app.netlify.com > Add new site > Import from Git. Build `npm run build`, publish directory `dist`. Deploy.
(Or drag the `dist` folder onto app.netlify.com/drop after `npm run build`.)
