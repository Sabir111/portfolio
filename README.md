# Sabir's Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS. Features smooth animations, dark/light mode toggle, and a clean, professional design.

## ✨ Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Toggle between themes with persistent storage
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI/UX** - Built with TailwindCSS for beautiful, consistent design
- **Performance Optimized** - Fast loading with Vite build optimization
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx     # Navigation component
│   └── Footer.jsx     # Footer component
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management
├── pages/              # Page components
│   ├── Home.jsx       # Home page with hero section
│   ├── About.jsx      # About page with bio and journey
│   ├── Skills.jsx     # Skills page with progress bars
│   ├── Projects.jsx   # Projects showcase
│   └── Contact.jsx    # Contact form and information
├── App.jsx             # Main app component
└── index.css           # Global styles and TailwindCSS
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Personal Details**: Update contact information in `src/pages/Contact.jsx`
- **About Section**: Modify bio and journey in `src/pages/About.jsx`
- **Skills**: Adjust skill levels and categories in `src/pages/Skills.jsx`
- **Projects**: Update project details in `src/pages/Projects.jsx`
- **Social Links**: Update social media URLs throughout the components

### Styling

- **Colors**: Modify the primary color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `src/index.css` and `tailwind.config.js`
- **Components**: Update component styles in individual component files

### Theme

The dark/light mode toggle is handled by `src/context/ThemeContext.jsx`. You can customize the theme colors and behavior here.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your portfolio
   - Your site will be available at `https://yourusername.vercel.app`

### Auto-Deploy

Vercel automatically deploys on every push to your main branch. You can also:
- Set up preview deployments for pull requests
- Configure custom domains
- Set up environment variables if needed

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, great for static sites
- **GitHub Pages**: Free hosting for GitHub repositories
- **AWS S3 + CloudFront**: For more control over hosting

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Reusable UI components with props
- **Pages**: Full page components with routing
- **Context**: Global state management
- **Styles**: TailwindCSS utility classes with custom CSS

## 🎯 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Optimized Build**: Minified and compressed production build
- **Fast Refresh**: Hot module replacement in development

## 🔒 Security

- **Form Validation**: Client-side form validation
- **XSS Protection**: React's built-in XSS protection
- **Secure Links**: Proper `rel="noopener noreferrer"` for external links

## 📈 Analytics & SEO

To add analytics and improve SEO:

1. **Google Analytics**: Add tracking code to `index.html`
2. **Meta Tags**: Update meta tags in `index.html`
3. **Sitemap**: Generate sitemap for better indexing
4. **Open Graph**: Add social media meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool

## 📞 Support

If you have any questions or need help:

- Create an issue on GitHub
- Contact me at [sabir@example.com](mailto:sabir@example.com)
- Check the documentation in the code comments

---

**Happy Coding! 🚀**
