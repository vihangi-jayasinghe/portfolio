# Portfolio Website

A beautiful, responsive portfolio website built with React, HTML, CSS, and JavaScript.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast and lightweight
- 🎭 Smooth animations
- 🎯 Easy to customize

## Sections

- **Hero** - Eye-catching introduction with animated elements
- **About** - Personal information and statistics
- **Skills** - Technical skills with progress bars
- **Projects** - Showcase of your work
- **Contact** - Contact form and social links

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The portfolio will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Customization

### Update Your Information

1. **Hero Section** - Edit `src/components/Hero.js`:
   - Change "Your Name" to your actual name
   - Update the title/role

2. **About Section** - Edit `src/components/About.js`:
   - Update the description text
   - Modify the statistics

3. **Skills Section** - Edit `src/components/Skills.js`:
   - Add/remove skills
   - Update skill levels

4. **Projects Section** - Edit `src/components/Projects.js`:
   - Add your actual projects
   - Update project descriptions and technologies

5. **Contact Section** - Edit `src/components/Contact.js`:
   - Add your email, phone, and location
   - Update social media links

### Color Scheme

To change the color scheme, edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... more colors */
}
```

## Technologies Used

- React 18
- Webpack 5
- Babel
- Modern CSS (Flexbox & Grid)

## License

MIT License - feel free to use this portfolio for your own projects!
