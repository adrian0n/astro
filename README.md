# 🔮 Astro Mystical

A beautiful and modern mystical and spiritual insights web application built with Astro, featuring horoscopes, angel numbers, destiny calculations, and a spiritual community.

## ✨ Features

- **Daily Horoscopes** - Personalized daily insights based on birth charts and planetary positions
- **Angel Numbers** - Discover spiritual messages hidden in numbers that appear in your life
- **Destiny Numbers** - Uncover your life path, personality traits, and spiritual purpose through numerology
- **AI-Powered Insights** - Advanced AI generates personalized content for your spiritual journey
- **Spiritual Community** - Connect with like-minded souls and share mystical experiences
- **Gamified Journey** - Earn points, unlock badges, and level up on your spiritual path
- **Multi-language Support** - Available in Romanian and English
- **Responsive Design** - Beautiful UI that works on all devices
- **PWA Ready** - Progressive Web App capabilities

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.0.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG icon component
- **Language**: TypeScript
- **Build Tool**: Vite

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/astro-mystical.git
cd astro-mystical
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Icon.astro      # Custom icon component
│   └── LanguageSwitcher.tsx
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Application pages
│   ├── index.astro
│   ├── horoscope.astro
│   ├── angel-numbers.astro
│   ├── destiny.astro
│   └── community.astro
├── lib/                # Utility functions
│   ├── ai.ts
│   ├── database.ts
│   └── gamification.ts
├── i18n/               # Internationalization
│   ├── config.ts
│   ├── en.json
│   ├── ro.json
│   └── store.ts
└── types/              # TypeScript type definitions
    └── index.ts
```

## 🎨 Design System

The application uses a mystical color palette:

- **Mystical**: Dark blues and grays for backgrounds
- **Cosmic**: Bright blues for cosmic elements
- **Spiritual**: Purples and pinks for spiritual elements

## 🌟 Key Features

### Custom Icon System
Instead of using external icon libraries that can cause compilation issues, the project uses a custom `Icon.astro` component with embedded SVG icons for better performance and compatibility.

### Responsive Design
The application is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile phones

### Internationalization
Built-in support for multiple languages with easy language switching.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icon designs (converted to custom SVG components)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ and cosmic energy ✨