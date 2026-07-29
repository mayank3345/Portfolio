import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jabedali.vercel.app";
export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Aditya Singh | MERN Stack Developer",
    template: "%s | Aditya Singh",
  },

  description:
    "Aditya Singh is a MERN Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, and modern web technologies. Explore projects, skills, resume, and contact information.",

  keywords: [
    "Aditya Singh",
    "Jabed",
    "Jabed Ali",
    "Aditya Singh Portfolio",
    "Jabed Ali Portfolio",
    "Jabed Portfolio",
    "Portfolio Website",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React JS",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Redux",
    "TypeScript",
    "HTML",
    "CSS",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
    "Bengaluru, India",
    "India",
  ],

  authors: [
    {
      name: "Aditya Singh",
      url: baseUrl,
    },
  ],

  creator: "Aditya Singh",
  publisher: "Aditya Singh",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "Aditya Singh | MERN Stack Developer",
    description:
      "Portfolio of Aditya Singh showcasing modern web development projects built with React.js, Next.js, Node.js, Express.js, MongoDB, and JavaScript.",
    url: baseUrl,
    siteName: "Aditya Singh Portfolio",
    images: [
      {
        url: "/images/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aditya Singh | MERN Stack Developer",
    description:
      "Explore my portfolio featuring MERN Stack, React.js, Next.js, Node.js, MongoDB, and full-stack development projects.",
    images: ["/images/seo/twitter-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  applicationName: "Aditya Singh Portfolio",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  verification: {
    // Add after verifying your site
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "",
    // yahoo: "",
    // other: {},
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
