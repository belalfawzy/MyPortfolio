# Belal Fawzy - Portfolio Website

A modern, responsive portfolio website built with React 18, TailwindCSS, and Framer Motion. This portfolio showcases my skills, projects, and professional experience as a Full-Stack Developer and Competitive Programmer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Accessible**: ARIA labels, keyboard navigation, and proper contrast
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **SEO Ready**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React Router v6** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
belal-portfolio/
├── public/
│   └── assets/
│       └── images/
│           ├── profile.jpg          # Profile picture (replace with your photo)
│           └── projects/            # Project screenshots
├── src/
│   ├── components/                  # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── sections/                    # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certificates.jsx
│   │   ├── CompetitiveProgramming.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── pages/                       # Main pages
│   │   └── Home.jsx
│   ├── data/                        # Content data
│   │   ├── siteData.js             # Main data file (single source of truth)
│   │   └── README.md               # Data documentation
│   ├── utils/                       # Helper functions
│   │   ├── ThemeContext.jsx
│   │   ├── scrollToSection.js
│   │   └── constants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Key Changes Made

### Data Centralization
- **Created `/src/data/siteData.js`** - Single source of truth for all portfolio content
- **Replaced all demo content** with real data from Belal's profile
- **Added comprehensive data documentation** in `/src/data/README.md`

### Content Updates
- **Profile Information**: Updated with Belal's real name, title, and social links
- **Projects**: Added 6 real projects including Swift-Cart, FGI CRM, and educational projects
- **Skills**: Categorized skills based on actual expertise (Frontend, Backend, Databases, etc.)
- **Education**: Added El Shorouk Academy details and professional experience
- **Certificates**: Added 7 real certificates including DEPI and HackerRank certifications
- **Competitive Programming**: Integrated Codeforces profile with live data fetching

### UI/UX Improvements
- **Project Cards**: Added educational badges and proper demo/GitHub button logic
- **Responsive Design**: Enhanced mobile and tablet layouts
- **Accessibility**: Added proper ARIA labels and keyboard navigation
- **Performance**: Implemented lazy loading for images and code splitting

### Technical Enhancements
- **Error Handling**: Added fallback images and error states
- **Form Validation**: Contact form with proper validation and submission states
- **API Integration**: Codeforces API integration with fallback data
- **Theme Persistence**: Dark/light mode with localStorage

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd belal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

## 📝 Customization

### Updating Content

All content is centralized in `/src/data/siteData.js`. To update:

1. **Profile Information**: Edit the `profile` object
2. **Projects**: Add/remove projects in the `projects` array
3. **Skills**: Update skill categories in the `skills` object
4. **Certificates**: Modify the `certificates` array
5. **Experience**: Update the `experience` array

### Adding Images

1. **Profile Photo**: Replace `/public/assets/images/profile.jpg`
2. **Project Images**: Add screenshots to `/public/assets/images/projects/`
3. **Update Image Paths**: Modify image references in `siteData.js`

### Styling

- **Colors**: Update TailwindCSS classes or modify `tailwind.config.js`
- **Animations**: Adjust Framer Motion animations in components
- **Layout**: Modify component structure and TailwindCSS classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- **ARIA Labels**: All interactive elements have proper labels
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Indicators**: Clear focus states for keyboard users
- **Alt Text**: Descriptive alt text for all images

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Contact

- **Email**: belalfawzy123@gmail.com
- **LinkedIn**: [belalfawzy123](https://www.linkedin.com/in/belalfawzy123/)
- **GitHub**: [belalfawzy](https://github.com/belalfawzy)
- **Codeforces**: [BELAL_FAWZY_](https://codeforces.com/profile/BELAL_FAWZY_)

---

**Note**: Remember to replace placeholder images with your actual photos and update any placeholder content with your real information.