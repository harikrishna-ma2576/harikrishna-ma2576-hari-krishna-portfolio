// =====================================================================
//  EDIT THIS FILE to customize the whole portfolio.
//  Anything left as "" is shown as a clearly marked placeholder or a
//  disabled button, so nothing links to a fake page.
// =====================================================================

export const profile = {
  name: 'Hari Krishna M A',
  title: 'AI & Data Science Student | Aspiring AI/ML Engineer',
  shortTitle: 'AI & Data Science Student',
  intro:
    'I build intelligent, practical software using Python, machine learning, data analytics and web development. Currently looking for internship opportunities where I can learn fast and contribute.',
  // Put your photo in /public (e.g. public/profile.jpg) and set '/profile.jpg'. Leave '' to show initials.
  photo: '',
  resume: '/resume.pdf', // replace public/resume.pdf with your own file (keep the name or change this path)
  resumeFileName: 'Hari_Krishna_M_A_Resume.pdf',
  email: 'your.email@example.com', // TODO: add your professional email
  github: '', // TODO e.g. 'https://github.com/your-username'
  linkedin: '', // TODO e.g. 'https://www.linkedin.com/in/your-id'
  // Optional: paste a Formspree/Getform endpoint to receive form messages. Empty = opens the visitor's email app.
  formEndpoint: '',
}

export const about = {
  paragraphs: [
    'I am a B.Tech student in Artificial Intelligence and Data Science (graduating 2028), passionate about building innovative technology solutions with programming, machine learning, data analytics and web development.',
    'I enjoy turning data into useful products, from training and evaluating models to wrapping them in clean, usable applications. I am eager to learn from real-world engineering teams.',
  ],
  interests: [
    { label: 'Artificial Intelligence', icon: 'Brain' },
    { label: 'Machine Learning', icon: 'Cpu' },
    { label: 'Data Science', icon: 'BarChart3' },
    { label: 'Software Development', icon: 'Code2' },
  ],
  goals:
    'Secure an AI/ML or data-focused internship, strengthen my skills on real projects, and grow into an AI/ML engineer.',
}

export const skills = [
  { category: 'Programming', icon: 'Terminal', items: ['Python', 'Java'] },
  { category: 'Web Development', icon: 'Globe', items: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
  { category: 'Database', icon: 'Database', items: ['MySQL', 'SQLite'] },
  { category: 'Data Science', icon: 'LineChart', items: ['Pandas', 'NumPy', 'Scikit-learn'] },
  { category: 'Big Data', icon: 'Layers', items: ['Hadoop', 'Hive', 'Spark'] },
  { category: 'Tools', icon: 'Wrench', items: ['Git', 'GitHub', 'VS Code', 'Eclipse'] },
]

// image: '' shows a gradient placeholder. Add images to /public/projects/ and use '/projects/name.png'.
// github / demo: '' renders a disabled button until you add a real link.
export const projects = [
  {
    title: 'CrediGuard',
    subtitle: 'Credit Risk Monitoring & Prediction System',
    description:
      'A system designed to predict credit risk using machine learning and manage customer credit applications.',
    tech: ['Python', 'Flask', 'Machine Learning', 'Random Forest', 'SQLite'],
    image: '',
    github: '',
    demo: '',
  },
  {
    title: 'Personal Finance & Investment Tracker',
    subtitle: 'Money management app',
    description:
      'An application designed to track income, expenses, savings and investments.',
    tech: ['Python', 'Database', 'Data Visualization'],
    image: '',
    github: '',
    demo: '',
  },
  {
    title: 'Explore India',
    subtitle: 'Interactive travel information web app',
    description:
      'An interactive web application providing information about Indian states and tourist destinations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    github: '',
    demo: '',
  },
]

export const education = {
  degree: 'B.Tech, Artificial Intelligence and Data Science',
  graduation: '2028',
  college: '[Your College / University Name]', // TODO
  cgpa: '[Your CGPA]', // TODO
  achievements: [], // e.g. ['Dean\'s list, Semester 2'] (leave empty to show a placeholder)
}

// Add as many as you like. image: '' shows a placeholder badge.
export const certifications = [
  { name: '[Certificate Name]', issuer: '[Issuing Organization]', date: '[Month Year]', image: '', link: '' },
  { name: '[Certificate Name]', issuer: '[Issuing Organization]', date: '[Month Year]', image: '', link: '' },
  { name: '[Certificate Name]', issuer: '[Issuing Organization]', date: '[Month Year]', image: '', link: '' },
]

// type: 'Hackathon' | 'Workshop' | 'Coding' | 'Extracurricular'
export const achievements = [
  { type: 'Hackathon', title: '[Hackathon Name]', detail: '[Your role / result]', date: '[Year]' },
  { type: 'Workshop', title: '[Workshop Name]', detail: '[What you learned / organizer]', date: '[Year]' },
  { type: 'Coding', title: '[Coding Achievement]', detail: '[e.g. platform, rank or problems solved]', date: '[Year]' },
  { type: 'Extracurricular', title: '[Club / Activity]', detail: '[Your contribution]', date: '[Year]' },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
