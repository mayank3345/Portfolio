"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import navLinks from "@/data/navbar/navLinks";
import { toggleTheme } from "@/redux/features/themeSlice";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const themeChangeBtn = () => {
    dispatch(toggleTheme());
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme
            ? "bg-slate-900/90 backdrop-blur-lg shadow-lg"
            : "bg-white/90 backdrop-blur-lg shadow-md"
          : theme
            ? "bg-slate-950"
            : "bg-white"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Primary Navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Aditya Singh Portfolio Logo"
            width={65}
            height={65}
            priority
          />

          <div className="flex flex-col">
            <span
              className={`h-5 font-bold ${
                theme ? "text-white" : "text-slate-900"
              }`}
            >
              Aditya Singh
            </span>

            <span
              className={`text-sm ${
                theme ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Web Developer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : theme
                      ? "text-slate-300"
                      : "text-slate-700"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={themeChangeBtn}
            aria-label="Toggle Theme"
            className="rounded-full border-0 md:border-2 border-primary p-3 text-primary transition hover:bg-primary hover:text-white"
          >
            {theme ? <FiSun size={18} /> : <RiMoonClearLine size={18} />}
          </button>

          <Link
            href="/contact"
            className="button hidden items-center gap-2 rounded-lg px-6 py-2 text-white transition hover:opacity-90 lg:flex"
          >
            Hire Me
            <GoArrowRight />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-primary lg:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div
          className={`border-t px-6 py-5 ${
            theme
              ? "border-slate-800 bg-slate-950"
              : "border-slate-200 bg-white"
          }`}
        >
          <ul className="space-y-5">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block text-lg font-medium transition ${
                    pathname === item.href
                      ? "text-primary"
                      : theme
                        ? "text-slate-300"
                        : "text-slate-700"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="button mt-6 block rounded-xl py-3 text-center font-medium text-white"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
