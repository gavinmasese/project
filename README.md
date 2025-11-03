# Bullione - Your Gateway to Africa's Golden Future

Bullione is a premier investment platform specializing in Africa's dynamic economic landscape. We empower investors, businesses, and individuals to unlock the continent's vast potential through innovative, AI-driven solutions and comprehensive investment services.

## 🚀 Features

- **AI-Powered Investment Insights**: Leverage cutting-edge artificial intelligence for data-driven investment decisions
- **Comprehensive Service Portfolio**: From direct investments to precious metals, infrastructure, and more
- **Pan-African Reach**: Extensive networks across West, East, Southern, Central, and North Africa
- **Secure Dashboard**: Manage your investments with our user-friendly client dashboard
- **Expert Consultation**: Book calls with our investment specialists
- **Career Opportunities**: Join our talented team driving Africa's investment potential

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide React
- **Animations**: Framer Motion
- **Authentication**: Clerk
- **Email Services**: EmailJS, Nodemailer
- **Deployment**: Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bullione.git
   cd bullione
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # EmailJS Configuration
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_PUBLIC_KEY=your_emailjs_public_key

   # Other configurations as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Build & Deployment

### Build for Production
```bash
npm run build
```

### Export Static Files (if needed)
```bash
npm run export
```

### Start Production Server
```bash
npm start
```

## 📁 Project Structure

```
bullione/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Home page
│   ├── dashboard/               # Client dashboard
│   ├── careers/                 # Careers page
│   ├── book-a-call/             # Consultation booking
│   ├── card-details/            # Service details
│   └── sign-in/                 # Authentication
├── components/                  # Reusable UI components
│   ├── ui/                      # Base UI components
│   ├── HeroSection.tsx          # Landing hero section
│   ├── ServicesSection.tsx      # Services overview
│   ├── Testimonials.tsx         # Client testimonials
│   └── ...
├── data/                        # Static data and configurations
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets
│   └── images/                  # Image assets
└── ...
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.ts`.

### ESLint
Code linting is configured in `.eslintrc.json`.

### TypeScript
TypeScript configuration is in `tsconfig.json`.

## 🌐 SEO Optimization

Bullione implements comprehensive SEO strategies including:

- **Metadata API**: Dynamic meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Rich snippets for search engines
- **Semantic HTML**: Proper heading hierarchy and accessibility
- **Performance**: Optimized images and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Bullione.

## 📞 Contact

For inquiries, partnerships, or investment opportunities:

- **Website**: [https://bullione.africa](https://bullione.africa)
- **Email**: info@bullione.africa
- **Location**: Pan-African presence

---

**Bullione** - Pioneering Growth, Crafting Investment Excellence in Africa