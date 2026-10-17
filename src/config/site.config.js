const siteConfig = {
  site: {
    name: "SourceandcodE",
    title: "SourceandcodE | Automate Your Future — Automation Testing Training",
    description:
      "Join SourceandcodE — career-focused automation testing training. Master JavaScript, Playwright, Cypress, API testing & CI/CD with industry mentors, real projects, and interview prep. Enroll now!",
    keywords: [
      "automation testing course",
      "playwright training",
      "cypress training",
      "QA automation training",
      "javascript for testing",
      "SDET course",
      "sourceandcode",
    ],
    tagline: "Automate Your Future.",
    motto: "Consistency and hard work can change your life.",
    descriptionLine:
      "Career-focused automation testing training — mentorship, real projects, interview prep.",
    logo: "/brand/logo.jpg",
    logoMark: "/brand/logo-mark.png",
    ogImage: "/brand/banner.jpg",
    founder: {
      name: "Siddhant Gadakh",
      role: "Founder & Mentor",
      title: "Software Test Engineer & Automation Expert",
      url: "https://siddhantgadakh.in",
      urlLabel: "siddhantgadakh.in",
    },
    repo: {
      name: "Source_and_code_batch_5",
      url: "https://github.com/SourceCode-code/Source_and_code_batch_5",
      description: "This is the official repo to store Batch 5 code.",
    },
  },

  theme: "default",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Why Us", href: "#why-us" },
    { label: "Resources", href: "#resources" },
    { label: "Rules", href: "#rules" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  enroll: {
    label: "Enroll Now",
    href: "#enroll",
  },

  content: {
    hero: {
      id: "home",
      eyebrow: "Welcome to Source & Code",
      title: "Launch Your Career in Automation Testing with SourceandcodE",
      description:
        "Unlock your potential in the rapidly expanding field of automation testing. SourceandcodE offers cutting-edge training to transform you into an in-demand professional.",
      primaryCta: { label: "Enroll Now", href: "#enroll" },
      secondaryCta: { label: "View Roadmap", href: "#roadmap" },
      highlights: ["Demo lectures", "Live mentorship", "Real projects", "Interview prep"],
      tools: ["JavaScript", "Playwright", "Cypress", "Git"],
    },

    about: {
      id: "about",
      eyebrow: "The institute",
      title: "About SourceandcodE",
      paragraphs: [
        "SourceandcodE is a career-focused training institute for aspiring automation testers and software engineers. Our mission is simple: bridge the gap between learning and employability.",
        "Many aspiring testers face the same hurdles — information overload, too many tools and no clear path, and theory that never becomes practical skill. SourceandcodE is meticulously crafted to solve exactly that. With a structured curriculum, expert mentorship from working industry professionals, hands-on projects, and comprehensive interview preparation, we don't just teach tools — we build confident, job-ready automation engineers.",
      ],
    },

    whyTesting: {
      id: "why-testing",
      eyebrow: "The career",
      title: "Why Automation Testing is a Hot Career",
      lead: "Automation Testers earn up to 2x more than manual testers! The software industry is booming — and as companies adopt agile and DevOps, the need for efficient automated testing becomes paramount.",
      cards: [
        {
          icon: "growth",
          title: "Explosive Growth",
          body: "Software development is growing rapidly, and with it the demand for skilled automation testers.",
        },
        {
          icon: "ai",
          title: "AI & DevOps Integration",
          body: "Modern teams combine automation testing with AI and DevOps methodologies — the skills of the future.",
        },
        {
          icon: "rocket",
          title: "Critical Role",
          body: "Testers play a critical role in product quality and release cycles — you are the gatekeeper of quality.",
        },
        {
          icon: "shield",
          title: "High Job Security",
          body: "A dynamic industry with lucrative opportunities, remote roles, and unparalleled job security.",
        },
      ],
      callout:
        "Position yourself at the forefront of innovation — AI in Testing, Cloud Automation, and Test Leadership roles await.",
      calloutPoints: [
        "AI for predictive analytics, test generation, and defect detection",
        "Cloud-based test environments built for scale",
        "A path toward Test Lead, Architect, and Manager roles",
      ],
    },

    roadmap: {
      id: "roadmap",
      eyebrow: "Batch syllabus",
      title: "Your Roadmap to Becoming an Automation Tester",
      lead: "A clear, guided learning path — from fundamentals to advanced topics. Here's exactly what you'll master, module by module.",
      modules: [
        { title: "Demo Lectures", duration: "5 days" },
        { title: "Manual Testing (YouTube / Self-paced)", duration: "Self-paced" },
        { title: "Git", duration: "5 days" },
        { title: "GitHub", duration: "3 days" },
        { title: "JavaScript (Advanced)", duration: "30 days" },
        { title: "API Testing — Manual", duration: "10 days" },
        { title: "Frameworks — Page Object Model (POM)", duration: "15 days" },
        { title: "API Automation", duration: "10 days" },
        { title: "BDD (Behavior Driven Development)", duration: "15 days" },
        { title: "Cypress", duration: "40 days" },
        { title: "AJAX", duration: "20 days" },
        { title: "Testing with AI", duration: "15 days", optional: true },
        { title: "TypeScript", duration: "25 days" },
        { title: "CI/CD — Basics", duration: "10 days" },
        { title: "Jira", duration: "5 days" },
        { title: "CI/CD — Flow", duration: "15 days" },
        { title: "Resume Building & Naukri Profile", duration: "3 days" },
        { title: "Project", duration: "Self-paced" },
      ],
      beyondTitle: "Beyond the syllabus",
      ongoing: [
        { icon: "chat", title: "Q&A Sessions", detail: "Biweekly" },
        { icon: "compass", title: "Guidance Sessions", detail: "Triweekly" },
        { icon: "trophy", title: "Hackathons", detail: "Once a Month" },
      ],
    },

    whyUs: {
      id: "why-us",
      eyebrow: "The method",
      title: "Your Path to Success",
      lead: "SourceandcodE is meticulously crafted to bridge the gap between learning and employability. We provide a holistic approach that guarantees practical experience and career readiness.",
      pillars: [
        {
          icon: "mentor",
          title: "Mentorship",
          body: "Expert guidance from industry professionals who work on real automation suites every day.",
        },
        {
          icon: "project",
          title: "Real Projects",
          body: "Hands-on experience with industry-relevant automation projects, not toy examples.",
        },
        {
          icon: "interview",
          title: "Interview Prep",
          body: "Comprehensive support to ace your job interviews, including interview questions, mock sessions, and resume building.",
        },
        {
          icon: "path",
          title: "Structured Curriculum",
          body: "A clear, guided learning path from fundamentals to advanced topics — no more information overload.",
        },
      ],
      stack: [
        "JavaScript",
        "TypeScript",
        "Playwright",
        "Cypress",
        "Git & GitHub",
        "Jira",
        "CI/CD",
        "BDD",
        "REST APIs",
        "AI-assisted Testing",
      ],
      closing:
        "Our unique methodology ensures you gain not just knowledge, but the confidence and practical skills essential for a successful career.",
    },

    resources: {
      id: "resources",
      eyebrow: "Learn in public",
      title: "Code, Notes & Resources — Free GitHub Access",
      lead: "Every batch gets an official GitHub repository with all lecture code, theory notes, interview material, and student work. Learn by reading, cloning, and building.",
      cta: "Open GitHub Repo",
      folders: [
        { name: "PLAYWRIGHT_MAIN", contents: "Playwright automation code" },
        { name: "STUDENT_PLAYWRIGHT", contents: "Student Playwright projects" },
        { name: "PLAYWRIGHT_THEORY_NOTES", contents: "Playwright theory notes" },
        { name: "JAVASCRIPT", contents: "JavaScript course code" },
        { name: "DOM", contents: "DOM manipulation material" },
        { name: "GIT_GITHUB", contents: "Git & GitHub material" },
        { name: "AGILE_&_SCRUM", contents: "Agile & Scrum material" },
        { name: "Framework_1", contents: "Framework (POM) implementation" },
        { name: "INTERVIEW_QUESTIONS", contents: "Interview question bank" },
        { name: "INTERVIEW_FEEDBACK", contents: "Interview feedback & learnings" },
        { name: "RESOURCES", contents: "Extra learning resources" },
        { name: "BATCH_5_STUDENTS", contents: "Batch 5 student work" },
        { name: "Support_structure", contents: "Support & guidance material" },
      ],
    },

    rules: {
      id: "rules",
      eyebrow: "Follow them",
      title: "Rules for the Batch",
      lead: "Discipline is the difference between completing a course and launching a career. These rules apply to every SourceandcodE batch.",
      items: [
        "Attend every live session on time — punctuality is mandatory.",
        "Practice daily. Consistency beats intensity.",
        "Complete assignments and push your code to the batch GitHub repo.",
        "Ask questions in every session — no doubt is too small.",
        "Respect fellow batch members and mentors.",
        "Recordings (if any) are for enrolled students only — do not share.",
        "Focus in class — keep phones and distractions away during sessions.",
        "Participate in hackathons and mock interviews.",
      ],
    },

    solutions: {
      id: "solutions",
      eyebrow: "How we help",
      title: "We Understand the Struggle",
      items: [
        {
          challenge: "Information Overload",
          challengeBody: "Feeling overwhelmed by the vast amount of tools and concepts.",
          solution: "Structured Curriculum",
          solutionBody: "One clear path, one module at a time.",
        },
        {
          challenge: "Lack of Practical Skills",
          challengeBody: "Difficulty applying theory to real-world projects.",
          solution: "Real Projects & Hackathons",
          solutionBody: "Build what companies actually use.",
        },
        {
          challenge: "No Clear Path",
          challengeBody: "Uncertainty about the best roadmap for career growth.",
          solution: "Mentorship & Guidance Sessions",
          solutionBody: "Triweekly direction from industry pros.",
        },
      ],
    },

    faq: {
      id: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Who can join this course?",
          a: "Freshers, manual testers moving to automation, and working professionals who want to switch to SDET/automation roles. No coding background required — we start from fundamentals.",
        },
        {
          q: "Do I need prior programming experience?",
          a: "No. The batch begins with JavaScript fundamentals and builds up to advanced automation frameworks.",
        },
        {
          q: "How long is the batch?",
          a: "The full syllabus spans roughly 4–5 months, followed by self-paced project work. Exact class timings are confirmed with each intake.",
        },
        {
          q: "Are sessions live or recorded?",
          a: "Sessions are live and interactive with mentors. Any recording policy is confirmed with your batch.",
        },
        {
          q: "Which tools will I learn?",
          a: "Git, GitHub, JavaScript, TypeScript, Playwright, Cypress, REST API testing, BDD, Jira, CI/CD pipelines, and Testing with AI.",
        },
        {
          q: "Is there placement/interview support?",
          a: "Yes — resume building, Naukri profile setup, interview question banks, mock interviews, and regular guidance sessions.",
        },
        {
          q: "What is the fee?",
          a: "Fee and installment options are shared during enrollment so you receive the current batch details. Send an enquiry and the mentor will walk you through them.",
        },
        {
          q: "When does the next batch start?",
          a: "The next start date is announced with each intake. Reach out through the enquiry form and the mentor will share the upcoming batch.",
        },
      ],
    },

    enroll: {
      id: "enroll",
      title: "Unlock Your High-Paying Tech Career!",
      lead: "Join SourceandcodE today and transform your future. Limited seats available — secure your spot and future-proof your skills!",
      primaryCta: { label: "Enroll Now", href: "#contact" },
    },

    contact: {
      id: "contact",
      eyebrow: "Enrolment",
      title: "Get in Touch",
      lead: "Have questions about the batch, syllabus, or enrollment? We're here to help.",
      note: "Official email, phone, and social profiles will be published here once they are confirmed. Until then, reach the founder directly.",
      form: {
        id: "enquiry-form",
        submitLabel: "Send enquiry",
        labels: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
        },
        placeholders: {
          name: "Your name",
          email: "you@email.com",
          phone: "Your phone number",
          message: "Tell us about your background and what you want to learn.",
        },
      },
    },
  },

  footer: {
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Why Us", href: "#why-us" },
      { label: "Resources", href: "#resources" },
      { label: "FAQ", href: "#faq" },
    ],
    resourceLinks: [
      { label: "GitHub repository", href: "https://github.com/SourceCode-code/Source_and_code_batch_5", external: true },
      { label: "Playwright notes", href: "#resources" },
      { label: "Interview questions", href: "#resources" },
    ],
    note: "Crafted with care for future automation engineers.",
  },

  pages: [
    {
      slug: "home",
      sections: [
        { type: "hero" },
        { type: "about" },
        { type: "whyTesting" },
        { type: "roadmap" },
        { type: "whyUs" },
        { type: "resources" },
        { type: "rules" },
        { type: "solutions" },
        { type: "faq" },
        { type: "enroll" },
        { type: "contact" },
      ],
    },
  ],
};

export default siteConfig;
