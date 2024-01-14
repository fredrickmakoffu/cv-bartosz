export const RESUME_DATA = {
  name: "Fredrick Makoffu Mbugua",
  initials: "FMM",
  location: "Nairobi, Kenya",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  about:
    "Experienced fullstack web dev. Forever learning. I love to build things.",
  summary:
    "Skilled in designing and implementing RESTful APIs, integrating with databases like MySQL, and deploying applications in cloud environments like AWS and Azure. Also experienced in utilizing SOLID principles and following object-oriented programming (OOP) paradigms to create maintainable, scalable, and efficient code. Strong ability to work collaboratively in fast-paced, agile development teams and a proven track record of leading projects to successful completion.",
  avatarUrl: "https://avatars.githubusercontent.com/u/42011427?v=4", // Replace with your avatar URL
  personalWebsiteUrl: "https://findfred.online", // Replace with your website URL
  contact: {
    email: "fredrickmakoffu@gmail.com",
    tel: "+254 711 787 441",
    github: "https://github.com/fredrickmakoffu",
    linkedin: "https://www.linkedin.com/in/fredrick-makoffu/",
    social: []
  },
  education: [
    {
      school: "Strathmore University",
      degree: "Bachelor's degree, Business and Information Technology",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Solutech Limited",
      link: "https://solutech.co.ke",
      badges: [],
      title: "Backend Developer",
      start: "Apr 2022",
      end: "Present",
      description:
        [
          "Collaborated with cross-functional teams to maintain, improve and build new features, both on backend and frontend, on our SalesAutomation Product (SAT).",
          "Worked with Support and other teams to document and address bugs and issues reported by clients.",
          "Worked on product integration with third party services like SAP and end-to-end integration with external custom client systems."
        ]
    },
    {
      company: "Taz Technologies",
      link: "https://mpost.co.ke",
      badges: [],
      title: "Lead Software Engineer",
      start: "Feb 2021",
      end: "Aug 2021",
      description:
        [
          "Built, deployed and managed a feature-rich PWA package delivery app with VueJS", 
          "Developed and maintained corporate websites for the MPost Product and Taz Technologies.",
          "Engineered a seamless transfer of all features of the MPost Product onto Safaricom's Mini-App platform."
        ]
    },
    {
      company: "Inshaka",
      link: "",
      badges: [],
      title: "Founder, Developer",
      start: "Feb 2019",
      end: "Feb 2021",
      description: [
        "Designed, built, deployed and maintained a no-code platform called 'Inshaka' for small businesses to build apps rapidly .",
        "Built an engine that allowed users to search for data across all apps built on the platform and build meaningful insights from thair data.",
        "Worked on contract projects eg. API development of a Project Management app, backend and frontend development of a Learning Platform for schools during COVID."
      ]
    },
    {
      company: "Copycat Group",
      link: "https://copycatgroup.com",
      badges: [],
      title: "Software Developer",
      start: "Jul 2016",
      end: "Jan 2019",
      description: [
        "Developed a custom Sales CRM for the company's IT and Printing department.",
        "Developed an Approval System positioned as a possible product by the company through Oracle"
      ]
    }
  ],
  skills: [
    "Laravel",
    "Vue.js",
    "PHP",
    "MySQL",
    "API Development",
    "SASS",
    "HTML5",
    "Amazon Web Services (AWS)",
    "Linux",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "Gsort (a healthcare app)",
      techStack: ["vuejs", "pwa", "laravel", "mysql"],
      description: "online store to buy medicine, request for lab tests, get prescriptions from verified doctors and more.",
      logo: "https://app.gearhealthsystem.com/img/ghs-logo.4c77efa5.png", // Replace with your logo URL or remove the logo property
    },
    {
      title: "a room",
      techStack: ["svelte"],
      description: "made a room with svelte that you can interact with as a resume", 
      logo: "https://app.gearhealthsystem.com/img/ghs-logo.4c77efa5.png", 
      link: {
        href: "https://github.com/fredrickmakoffu/svelte-room",
        text: "View project",
      }
    },
    // Add other projects as needed
  ],
  honors: [
    {
      title: "Best Team of the Year (Solutech Limited)",
      date: "Jan 2024",
      description: "Received 'Best Team of the Year' award, awarded to the Backend Team for outstanding work in 2023.",
    },
    {
      title: "Best New Employee 2022 (Solutech Limited)",
      date: "Dec 2022",
      description: "Received 'Best New Employee' in 2022 for outstanding work performed.",
    },
  ],
} as const;

