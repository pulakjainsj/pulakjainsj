# Pulak Jain - Portfolio Website

A modern, responsive portfolio website showcasing graphic design work and photography.

## 🚀 Tech Stack

- **React** 18.3.1
- **Vite** 6.3.5 - Build tool
- **Tailwind CSS** 4.1.12 - Styling
- **React Router** 7.13.0 - Routing
- **Web3Forms** - Contact form API
- **Motion** (Framer Motion) - Animations
- **Radix UI** - UI components

## 📦 Frontend-Only Application

**Important:** This is a **pure frontend application** with no backend required.

- ✅ Contact form uses **Web3Forms API** (external service)
- ❌ **No Supabase** backend or edge functions
- ❌ **No server** or database needed
- ✅ Deploy as **static site** to Vercel, Netlify, or any static host

## 🛠️ Installation

```bash
npm install
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

Get your free access key from [Web3Forms](https://web3forms.com/)

## 💻 Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

```bash
npm run build
```

Output will be in the `/dist` directory.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
4. Deploy! ✨

Vercel will automatically detect Vite configuration.

### Other Platforms

Works on any static hosting platform:
- Netlify
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting

Just build and upload the `/dist` folder.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Root component
│   ├── styles/             # CSS files
│   └── main.tsx            # Entry point
├── supabase/               # ⚠️ IGNORED - Not used in deployment
├── utils/                  # Utility functions
├── .vercelignore           # Ignore Supabase files
├── vercel.json             # Vercel configuration
└── package.json

```

## 📧 Contact Form

The contact form uses [Web3Forms](https://web3forms.com/) API:
- No backend setup required
- Email notifications sent directly
- Free tier available
- GDPR compliant

## ⚠️ Note on Supabase Files

The `/supabase` folder contains template files from Figma Make but is **NOT used** in this project. These files are:
- Automatically ignored via `.vercelignore`
- Not deployed to production
- Can be safely ignored

## 👨‍💻 Author

**Pulak Jain**
- Email: jainpulakcomp@gmail.com
- Portfolio: [Your Live Site]

## 📄 License

This project is private and proprietary.
