# TravelGo - Affordable Luxury Travel Website

![TravelGo Logo](./src/assets/images/TravelGo.png)

A modern, responsive travel booking website built with React and Tailwind CSS. TravelGo makes luxury travel accessible to everyone by offering personalized journeys that blend adventure, comfort, and affordability.

## 🌍 Live Demo

🔗 [Visit TravelGo Website](https://travelgo-website.vercel.app)

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Seamless scrolling between sections with smooth animations
- **Dynamic Hero Slider** - Auto-rotating hero section with manual slide controls
- **Image Gallery** - Beautiful showcase of travel destinations
- **Contact Form** - Email integration using EmailJS for direct communication
- **Modern UI** - Clean and professional design with Tailwind CSS
- **Performance Optimized** - Fast loading times and smooth interactions

## 🏗️ Project Structure

```
travelgo-website/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── hero/
│   │   └── about/
│   ├── components/
│   │   ├── buttons/
│   │   │   └── PrimaryBtn.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── GalleryCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── InputField.jsx
│   │   └── PaginationDots.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Service.jsx
│   │   ├── Gallery.jsx
│   │   └── ContactUs.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Tech Stack

- **Frontend Framework** - React 18
- **Styling** - Tailwind CSS
- **Build Tool** - Vite
- **Email Service** - EmailJS
- **Icons** - Lucide React
- **Deployment** - Vercel

## 📋 Prerequisites

Before getting started, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Git

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tharushi-Umesha/travelgo-website.git
   cd travelgo-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

To use the contact form functionality:

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service
4. Create an email template
5. Copy your Service ID, Template ID, and Public Key
6. Add them to your `.env.local` file (as shown above)

## 🌐 Sections Overview

### 1. **Hero Section** (`id="home`)
- Eye-catching banner with auto-rotating images
- Call-to-action button linking to About section
- Manual slide navigation with dot indicators

### 2. **About Section** (`id="about`)
- Company story and values
- Statistics (10K+ trips, 200K+ happy clients)
- Beautiful image gallery showcase
- Navigation button to Services section

### 3. **Services Section** (`id="services`)
- Comprehensive list of travel packages
- Service cards with descriptions
- Responsive grid layout

### 4. **Gallery Section** (`id="gallery`)
- Visual showcase of destinations
- Paginated gallery for better UX
- High-quality travel imagery

### 5. **Contact Section** (`id="contact`)
- Contact form with EmailJS integration
- Location, phone, and email information
- Direct communication channel

### 6. **Navigation**
- **Navbar** - Fixed navigation with mobile hamburger menu
- **Footer** - Quick links, social media, and contact info

## 🎯 Navigation System

The website uses smooth scroll navigation:

- Click navbar links → Smooth scroll to section
- Click "Explore Now" buttons → Navigate to next section
- Footer links → Direct section navigation
- Logo → Returns to home

## 🚀 Deployment with Vercel

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Add environment variables (EmailJS credentials)
   - Click "Deploy"

3. **Your site is now live!** 🎉

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

### Colors
Edit Tailwind CSS colors in `tailwind.config.js`:
- Primary color: `#2E73D3`
- Background: `#F8F8F8`

### Images
Replace images in `/src/assets/` with your own travel photos

### Content
Edit text and descriptions in respective section components

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Tharushi Umesha**
- GitHub: [@Tharushi-Umesha](https://github.com/Tharushi-Umesha)
- Repository: [travelgo-website](https://github.com/Tharushi-Umesha/travelgo-website)

## 🙏 Acknowledgments

- Lucide React for beautiful icons
- Tailwind CSS for amazing styling utilities
- EmailJS for email service integration
- Vite for blazing fast development

## 📞 Contact & Support

For questions or support, please reach out through:
- Email: umemahee@gmail.com
- Phone: +94 740681459

## 🎯 Future Enhancements

- [ ] User authentication and booking system
- [ ] Payment gateway integration (Stripe)
- [ ] Blog section with travel tips
- [ ] User reviews and ratings
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced search and filtering

---

**Made with ❤️ for travel enthusiasts worldwide**
