# EduFi - Your AI Mentor to Learn, Earn & Succeed

A modern, responsive, multilingual educational platform powered by Generative AI, designed specifically for students in India from school to higher education, including Tier 2/3 cities.

## 🎯 Overview

EduFi is an AI-powered educational mentor platform that offers personalized mentorship experience combining academic guidance, budget-based recommendations, financial aid discovery, internship matching, and team collaboration.

## ✨ Features

### Core Features
- **AI-Powered Recommendations**: Personalized college and course suggestions based on user profile
- **Budget-Aware Planning**: Financial planning with cost-effective recommendations
- **Scholarship Discovery**: Real-time scholarship and financial aid opportunities
- **Internship Matching**: Connect with relevant internship opportunities
- **EduSwipe**: Tinder-style team formation and study partner matching
- **Multilingual Support**: English, Hindi, Bengali, and Tamil
- **Progress Tracking**: AI-generated roadmaps with EduCoins gamification
- **Real-time Database**: Live data with Firebase integration

### Technical Features
- **Modern UI/UX**: Responsive design with warm color palette (green, sky blue, white)
- **Real-time Authentication**: Secure user registration and login
- **Progressive Web App**: Mobile-first responsive design
- **Animations**: Smooth transitions and micro-interactions
- **TypeScript**: Full type safety and better development experience

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edufi-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Get your Firebase config

4. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
edufi-platform/
├── app/                    # Next.js 13+ app directory
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/              # UI components (Button, Card, Input, etc.)
│   ├── Navigation.tsx   # Main navigation
│   ├── Footer.tsx       # Footer component
│   └── LanguageSwitcher.tsx # Language switcher
├── lib/                 # Utility libraries
│   ├── auth.ts          # Authentication utilities
│   ├── database.ts      # Database operations
│   ├── firebase.ts      # Firebase configuration
│   ├── types.ts         # TypeScript type definitions
│   ├── utils.ts         # Utility functions
│   └── seed-data.ts     # Sample data
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🛠 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling
- **Lucide React**: Icon library

### Backend
- **Firebase**: Authentication and database
- **Firestore**: NoSQL database
- **Firebase Auth**: User authentication

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🎨 Design System

### Color Palette
- **Primary**: Sky Blue (#0ea5e9)
- **Secondary**: Green (#22c55e)
- **Accent**: Gray (#64748b)
- **Background**: Gradient from blue-50 to green-50

### Typography
- **Primary Font**: Inter (English)
- **Hindi**: Noto Sans Devanagari
- **Bengali**: Noto Sans Bengali
- **Tamil**: Noto Sans Tamil

### Components
- **Cards**: Rounded corners with hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Forms**: Clean inputs with validation states
- **Navigation**: Sticky header with mobile responsiveness

## 📱 Pages & Features

### Public Pages
1. **Home Page**: Hero section, features overview, testimonials
2. **Features Page**: Detailed feature breakdown
3. **Login Page**: User authentication
4. **Signup Page**: Multi-step user registration

### Protected Pages
1. **Dashboard**: Personalized recommendations and progress tracking
2. **EduSwipe**: Team matching interface
3. **Scholarships**: Scholarship listings and applications
4. **Internships**: Internship opportunities
5. **Roadmap**: AI-generated learning path

## 🔐 Authentication

The platform uses Firebase Authentication with the following features:
- Email/password registration and login
- Secure password validation
- User profile management
- Session persistence
- Protected routes

## 🗄 Database Schema

### Collections
- **users**: User profiles and preferences
- **eduswipe_profiles**: Team matching profiles
- **scholarships**: Scholarship opportunities
- **internships**: Internship listings
- **colleges**: College information
- **coaching_centers**: Coaching center data
- **matches**: EduSwipe matches
- **educoins**: User progress tracking
- **roadmaps**: Learning roadmaps

## 🌐 Multilingual Support

The platform supports four languages:
- **English**: Primary language
- **Hindi**: हिंदी
- **Bengali**: বাংলা
- **Tamil**: தமிழ்

Language switching is available throughout the application with proper font rendering for each language.

## 🎮 Gamification

### EduCoins System
- Earn coins for completing tasks
- Track progress and achievements
- Unlock badges and rewards
- Leaderboard functionality

### Progress Tracking
- AI-generated learning roadmaps
- Milestone achievements
- Visual progress indicators
- Goal setting and completion

## 📊 AI Integration

### Recommendation Engine
- Personalized college suggestions
- Budget-aware recommendations
- Skill-based internship matching
- Compatibility scoring for team formation

### Future AI Features
- AI Chatbot for emotional support
- Voice assistant integration
- Real-time scholarship scraping
- Advanced compatibility algorithms

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Static site hosting
- **Firebase Hosting**: Google's hosting solution
- **AWS Amplify**: Full-stack deployment

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write meaningful component names
- Add proper TypeScript types

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Built with ❤️ by the EduFi Team

## 📞 Support

For support and questions:
- Email: contact@edufi.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)
- Documentation: [Wiki](https://github.com/your-repo/wiki)

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Core platform development
- ✅ User authentication
- ✅ Basic recommendations
- ✅ Multilingual support

### Phase 2 (Next)
- 🔄 AI Chatbot integration
- 🔄 Voice assistant
- 🔄 Advanced analytics
- 🔄 Mobile app

### Phase 3 (Future)
- 📋 Real-time scholarship scraping
- 📋 Advanced AI recommendations
- 📋 Offline mode
- 📋 Social features

---

**EduFi** - Empowering students to achieve their dreams through AI-powered education guidance.
