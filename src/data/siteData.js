export const profile = {
  name: "Belal Fawzy",
  title: "Full-Stack Developer | Competitive Programmer | Problem Solver",
  tagline: "Building scalable web apps & solving real-world problems with clean, efficient code.",
  profileImage: "/src/assets/images/Me.jpeg",
  resumeUrl: "https://drive.google.com/file/d/10hdeg_deHvJycImHSoajhti2MGaeo0Lt/view",
  email: "",
  location: "Cairo, Egypt",
  socials: {
    linkedin: "https://www.linkedin.com/in/belalfawzy123/",
    github: "https://github.com/belalfawzy",
    codeforces: "https://codeforces.com/profile/BELAL_FAWZY_"
  }
};

export const about = {
  short: "I'm Belal Fawzy, a passionate Full-Stack Developer and Competitive Programmer. I enjoy designing and building web applications that are performant, maintainable, and user-friendly. With strong problem-solving skills honed through platforms like Codeforces, I bring both speed and accuracy to tackling challenges.",
  details: [
    "Digital Egypt Pioneers Initiative (DEPI) graduate — hands-on training in full-stack .NET development using C#, ASP.NET MVC/Core, EF Core and SQL.",
    "El Shorouk Academy — Bachelor's in Computer Science (2022 – 2026); solid understanding of algorithms, data structures and OOP.",
    "Strong collaboration experience and practical project work building web apps, CRM systems, and e-commerce platforms."
  ]
};

export const skills = {
  frontend: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  backend: ["ASP.NET Core", "ASP.NET MVC", "C#", "Entity Framework Core", "Node.js", "Express.js"],
  databases: ["SQL Server", "MySQL", "Entity Framework Core", "MongoDB"],
  programming: ["C++", "C#", "Java", "Python"],
  tools: ["Git", "GitHub", "Docker", "VS Code", "Visual Studio", "Postman"],
  competitive: ["Codeforces (BELAL_FAWZY_)", "HackerRank"]
};

export const projects = [
  {
    id: "swift-cart-app",
    title: "Swift-Cart App",
    description: "Swift-Cart is a fast and modern e-commerce frontend built with Next.js and TypeScript. Provides a smooth shopping experience with responsive design, clean UI, and ready for backend API integration.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/belalfawzy/swift-cart-app",
    demoUrl: "https://swiftcartapp.vercel.app/",
    image: "/src/assets/images/SwiftCartApp.png",
    notes: "E-commerce ready structure (products, cart, checkout). Component-based architecture for reusability."
  },
  {
    id: "fgi_crm",
    title: "FGI CRM",
    description: "Customer Relationship Management System built with ASP.NET Core MVC, Entity Framework Core and SQL Server. Features lead management, role-based authentication, and reporting dashboards.",
    tech: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
    githubUrl: "https://github.com/belalfawzy/FGI_CRM",
    demoUrl: "",
    image: "/src/assets/images/FGI_CRM.png",
    notes: "Enterprise-style CRM features: leads, users with roles, simple reporting. To test the site use these logins:\n- Email: admin@admin.fgi | Password: 123456\n- Email: marketing@marketing.fgi | Password: 123456\n- Email: sales@sales.fgi | Password: 123456"
  },
  {
    id: "techxpress",
    title: "TechXpress E-Commerce",
    description: "E-commerce web app built with ASP.NET MVC. Includes product catalog, cart & checkout flow, authentication, and admin inventory panel.",
    tech: ["ASP.NET MVC", "Entity Framework Core", "SQL Server"],
    githubUrl: "https://github.com/belalfawzy/TachXpress-E-Commerce-",
    demoUrl: "http://techxcommerce.runasp.net/",
    image: "/src/assets/images/TechXpress.png",
    notes: "Classic ASP.NET MVC project showcasing e-commerce workflows."
  },
  {
    id: "marketteto",
    title: "Marketteto MVC Project",
    description: "Marketplace web application built with ASP.NET MVC and Entity Framework. Implements product management, orders, authentication and order tracking.",
    tech: ["ASP.NET MVC", "Entity Framework", "SQL Server"],
    githubUrl: "https://github.com/belalfawzy/Marketteto-MvcProject",
    demoUrl: "",
    image: "/src/assets/images/Marketteto.png",
    notes: "Classic MVC architecture; good demonstration of server-rendered ASP.NET workflows."
  },
  {
    id: "quantum_bookstore",
    title: "Quantum Bookstore",
    description: "Java-based online bookstore system. Designs an extensible Java system supporting multiple book types, inventory management, purchase processing, and exception handling.",
    tech: ["Java", "OOP", "Inventory Management"],
    githubUrl: "https://github.com/belalfawzy/QuantumBookstore",
    demoUrl: "",
    image: "/src/assets/images/QuantumBookstore.png",
    notes: "Java OOP design showcasing extensibility and exception handling. Educational project.",
    isEducational: true
  },
  {
    id: "data_structures",
    title: "Data Structures",
    description: "Educational repository implemented using C# and object-oriented principles. Implementations include LinkedList, DoubleLinkedList, Stack, StackLinkedList, Queue, and other common data structures.",
    tech: ["C#", "OOP", "Algorithms"],
    githubUrl: "https://github.com/belalfawzy/DataStructures",
    demoUrl: "",
    image: "/src/assets/images/DataStructures.png",
    notes: "Problem-solving focused; intended as learning & reference. Educational project.",
    isEducational: true
  }
];

export const education = [
  {
    institution: "El Shorouk Academy",
    degree: "Bachelor's Degree, Computer Science",
    start: 2022,
    end: 2026,
    description: "Undergraduate Computer Science program covering algorithms, data structures, OOP and databases."
  }
];

export const certificates = [
  {
    id: "depi_fullstack_net",
    title: "Software Development - FullStack .NET Development",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    issued: "Oct 2024",
    expired: "May 2025",
    image: "/src/assets/images/FullStackCertificate.png",
    link: "https://drive.google.com/file/d/1BCzmBnZDpxHBaJNwAzfQngbILoMf3GgF/view?usp=drive_link"
  },
  {
    id: "depi_business_english",
    title: "Business English Track",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    issued: "Jan 2025",
    expired: "Mar 2025",
    image: "/src/assets/images/BusinessEnglishTrackCertificate.png",
    link: "https://drive.google.com/file/d/1S7TGWm1WlBVuMViE_vvcRUeKwISm-fiJ/view?usp=drive_link"
  },
  {
    id: "hackerrank_java",
    title: "Certificate of Accomplishment — Java (Basic)",
    issuer: "HackerRank",
    credentialId: "DF8D777D7814",
    issued: "Dec 2024",
    image: "/src/assets/images/Java.png",
    link: "https://www.hackerrank.com/certificates/iframe/df8d777d7814"
  },
  {
    id: "hackerrank_sql",
    title: "Certificate of Accomplishment — SQL (Basic)",
    issuer: "HackerRank",
    credentialId: "95360629E5C7",
    issued: "Dec 2024",
    image: "/src/assets/images/sql.png",
    link: "https://www.hackerrank.com/certificates/iframe/95360629e5c7"
  },
  {
    id: "hackerrank_csharp",
    title: "Certificate of Accomplishment — C# (Basic)",
    issuer: "HackerRank",
    credentialId: "22F08225A639",
    issued: "Dec 2024",
    image: "/src/assets/images/CSharp.png",
    link: "https://www.hackerrank.com/certificates/iframe/22f08225a639"
  },
  {
    id: "nvidia_deep_learning",
    title: "Introduction to Deep Learning",
    issuer: "NVIDIA",
    issued: "Sep 2025",
    image: "/src/assets/images/NvidiaCertificate.png",
    link: "https://learn.nvidia.com/certificates?id=ZZFUbKPNRcWvLGX1B_RQuQ"
  },
  {
    id: "huawei_ai_overview",
    title: "Overview of AI",
    issuer: "Huawei",
    issued: "Sep 2025",
    image: "/src/assets/images/HuaweiCertificate.png",
    link: "https://drive.google.com/file/d/1QVRXrBi6KtzuxnxCH7naMJ7ug5YA7AF-/view?usp=drive_link"
  }
];

export const experience = [
  {
    company: "National Telecommunication Institute (NTI)",
    role: "Machine Learning Trainee (Internship)",
    start: "Sep 2025",
    end: "Present",
    location: "Cairo, Egypt",
    highlights: ["Python", "Statistics", "Supervised & Unsupervised learning concepts"]
  },
  {
    company: "Route",
    role: "Frontend Development Trainee (React.js) (Internship)",
    start: "Jul 2025",
    end: "Sep 2025",
    location: "Cairo, Egypt",
    highlights: ["React.js", "Tailwind CSS"]
  },
  {
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "FullStack Web Development Trainee (.NET)",
    start: "Oct 2024",
    end: "May 2025",
    location: "Cairo, Egypt",
    highlights: ["C#", "ASP.NET MVC/Core", "EF Core", "Database Design"]
  },
  {
    company: "Coach Academy",
    role: "Problem Solving Trainee",
    start: "Aug 2022",
    end: "Jan 2023",
    location: "Cairo, Egypt",
    highlights: ["C++", "Data Structures"]
  }
];

export const competitive = {
  platform: "Codeforces",
  handle: "BELAL_FAWZY_",
  url: "https://codeforces.com/profile/BELAL_FAWZY_"
};
