# Ericka Tresenio Brudo - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS featuring a beautiful purple color scheme.

## 🎨 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Purple Color Scheme** - Beautiful gradient combinations using various shades of purple
- **Smooth Animations** - Engaging hover effects and scroll animations
- **Modern UI** - Clean, professional design with TailwindCSS
- **Interactive Components** - Navigation, contact form, project cards
- **Fast Performance** - Built with Vite for optimal loading speeds

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.jsx       - About section
│   │   ├── Contact.jsx     - Contact form and info
│   │   ├── Hero.jsx        - Hero section with name and intro
│   │   ├── Navbar.jsx     - Navigation bar
│   │   ├── Projects.jsx    - Featured projects
│   │   └── Skills.jsx      - Skills and technologies
│   ├── App.jsx             - Main app component
│   ├── main.jsx            - Entry point
│   └── index.css           - Global styles with Tailwind
├── index.html              - HTML template
├── package.json            - Dependencies
├── tailwind.config.js      - Tailwind configuration
├── vite.config.js          - Vite configuration
└── postcss.config.js       - PostCSS configuration
```

## 🎯 Customization

### Personal Information

Update the following files with your actual information:

- **Hero.jsx** - Update social media links
- **About.jsx** - Update personal details and description
- **Contact.jsx** - Update email, phone, and location
- **Projects.jsx** - Add your real projects with links

### Color Scheme

The purple color scheme is defined in `tailwind.config.js`. You can customize the colors by modifying the `primary` color palette:

```javascript
colors: {
  primary: {
    50: '#f5f3ff',
    // ... more shades
    950: '#2e1065',
  },
}
```

### Adding Projects

Edit `src/components/Projects.jsx` and add your projects to the `projects` array:

```javascript
{
  title: 'Your Project Name',
  description: 'Project description...',
  technologies: ['React', 'Node.js', 'MongoDB'],
  image: 'bg-gradient-to-br from-primary-400 to-purple-500',
  github: 'https://github.com/yourusername/project',
  demo: 'https://your-project-demo.com'
}
```

## 📱 Sections

1. **Hero** - Introduction with name and social links
2. **About** - Personal information and what you do
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with descriptions
5. **Contact** - Contact form and information

## 🌐 Deployment

### Vercel

```bash
npm run build
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod
```

### GitHub Pages

```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Ericka Tresenio Brudo**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)

---

Made with ❤️ using React and TailwindCSS
