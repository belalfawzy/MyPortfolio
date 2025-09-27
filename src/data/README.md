# Site Data Configuration

This directory contains the main data file for the portfolio website. All content is centralized in `siteData.js` for easy maintenance and updates.

## File Structure

- `siteData.js` - Main data file containing all portfolio content
- `README.md` - This documentation file

## How to Update Content

### Adding New Projects

1. Open `siteData.js`
2. Find the `projects` array
3. Add a new project object with the following structure:

```javascript
{
  id: "unique-project-id",
  title: "Project Title",
  description: "Short description for project cards",
  tech: ["Technology1", "Technology2", "Technology3"],
  githubUrl: "https://github.com/username/repo",
  demoUrl: "https://your-demo-url.com", // Leave empty string if no demo
  image: "/assets/images/projects/project-image.png",
  notes: "Detailed description and additional notes",
  isEducational: false // Set to true for educational projects
}
```

### Adding New Certificates

1. Open `siteData.js`
2. Find the `certificates` array
3. Add a new certificate object:

```javascript
{
  id: "unique-certificate-id",
  title: "Certificate Title",
  issuer: "Issuing Organization",
  issued: "Month YYYY",
  expired: "Month YYYY", // Optional
  credentialId: "ID123456", // Optional
  link: "https://verify-link.com" // Optional
}
```

### Updating Profile Information

1. Open `siteData.js`
2. Find the `profile` object
3. Update the relevant fields:
   - `name` - Your full name
   - `title` - Professional title/tagline
   - `tagline` - Short description
   - `profileImage` - Path to your profile photo
   - `resumeUrl` - Link to your resume/CV
   - `email` - Your email address
   - `location` - Your location
   - `socials` - Social media links

### Adding Images

1. Place project images in `/public/assets/images/projects/`
2. Place your profile photo at `/public/assets/images/profile.jpg`
3. Update the image paths in the data file accordingly

## Notes

- All image paths should start with `/assets/images/` (they will be served from the public directory)
- Demo URLs should be complete URLs including `https://`
- GitHub URLs should be complete repository URLs
- Keep descriptions concise for cards, detailed information goes in `notes`
- Educational projects will automatically show an "Educational" badge

## File Locations

- Profile image: `/public/assets/images/profile.jpg`
- Project images: `/public/assets/images/projects/[project-name].png`
- Resume: Update the `resumeUrl` in the profile object
