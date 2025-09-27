export const projects = [
  {
    id: 1,
    title: "SwiftCart App",
    description: "A modern e-commerce application built with React and Node.js, featuring user authentication, product management, shopping cart, and payment integration.",
    longDescription: "SwiftCart is a full-stack e-commerce platform that provides a seamless shopping experience. The application includes features like user registration and authentication, product catalog with search and filtering, shopping cart functionality, order management, and secure payment processing. Built with modern technologies and best practices for scalability and performance.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "TailwindCSS"],
    githubUrl: "https://github.com/belalfawzy/swift-cart-app",
    liveUrl: "https://swiftcart-demo.vercel.app",
    featured: true,
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "QuantumBookstore",
    description: "An online bookstore management system with advanced search, recommendation engine, and inventory management capabilities.",
    longDescription: "QuantumBookstore is a comprehensive bookstore management system that handles everything from inventory management to customer recommendations. The system includes advanced search functionality, AI-powered book recommendations, inventory tracking, order processing, and customer management. Built with a focus on performance and user experience.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/belalfawzy/QuantumBookstore",
    liveUrl: "https://quantumbookstore-demo.herokuapp.com",
    featured: true,
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "TaskFlow Manager",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    longDescription: "TaskFlow Manager is a modern project management tool designed for teams. It features real-time collaboration, drag-and-drop task organization, team member management, project tracking, and deadline management. The application uses WebSocket for real-time updates and provides an intuitive interface for managing complex projects.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Dnd-kit", "Material-UI"],
    githubUrl: "https://github.com/belalfawzy/taskflow-manager",
    liveUrl: "https://taskflow-demo.netlify.app",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with interactive maps, detailed forecasts, and location-based weather alerts.",
    longDescription: "Weather Dashboard provides comprehensive weather information with beautiful visualizations. Features include current weather conditions, 7-day forecasts, hourly weather updates, interactive maps, weather alerts, and location-based services. The app is fully responsive and includes dark/light mode support.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Leaflet", "TailwindCSS"],
    githubUrl: "https://github.com/belalfawzy/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false,
    category: "Frontend"
  },
  {
    id: 5,
    title: "Algorithm Visualizer",
    description: "An interactive tool for visualizing sorting and searching algorithms with step-by-step animations and educational content.",
    longDescription: "Algorithm Visualizer is an educational application designed to help students understand how various algorithms work through interactive visualizations. The tool supports multiple sorting algorithms (bubble sort, merge sort, quick sort, etc.) and searching algorithms (binary search, linear search). Users can control animation speed and see detailed explanations of each step.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Canvas API", "JavaScript", "CSS3", "Framer Motion"],
    githubUrl: "https://github.com/belalfawzy/algorithm-visualizer",
    liveUrl: "https://algo-visualizer-demo.vercel.app",
    featured: false,
    category: "Educational"
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media platforms with data visualization and insights generation.",
    longDescription: "Social Media Analytics platform aggregates data from multiple social media platforms and provides actionable insights. The dashboard includes engagement metrics, follower growth analysis, content performance tracking, competitor analysis, and automated reporting. Built with a focus on data processing and visualization.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Redis", "Chart.js"],
    githubUrl: "https://github.com/belalfawzy/social-analytics",
    liveUrl: "https://social-analytics-demo.herokuapp.com",
    featured: true,
    category: "Data Analytics"
  }
];

export const projectCategories = [
  "All",
  "Full-Stack",
  "Frontend", 
  "Backend",
  "Data Analytics",
  "Educational"
];
