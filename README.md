# Healing Hearts - Mental Health Support Platform

A comprehensive mental health support web application providing interactive emotional support tools, peer connections, and crisis resources.

## Features

- **Interactive FAQ Cards**: Expandable cards with mental health questions and comprehensive answers
- **Coping Strategy Wheel**: Animated spinning wheel for random coping mechanism selection
- **Inspirational Quotes**: User-submitted quotes with approval system
- **Live Peer Chat**: Real-time peer support chat rooms
- **Crisis Resources**: Emergency contact information and helpline numbers
- **Heart-themed Design**: Therapeutic branding with floating heart animations

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, WebSocket for real-time chat
- **Database**: Drizzle ORM with PostgreSQL support
- **Build Tools**: Vite, esbuild
- **Deployment**: GitHub Pages

## Contact

For support or inquiries: Reachanya@09.gmail.com

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. Follow these steps:

### 1. Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit - Healing Hearts mental health platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/healing-hearts.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will run automatically

### 3. Access Your Site
Your site will be available at: `https://YOUR_USERNAME.github.io/healing-hearts/`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

This project is open source and available under the MIT License.