"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import { heroData } from "@/data/home/hero";
import { siteConfig } from "@/config/siteConfig";
import { useSelector } from "react-redux";

export default function Hero() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`relative overflow-hidden transition-colors duration-300 ${
        theme ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-10 lg:flex-row lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 0.999, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center lg:text-left"
        >
          {/* Badge + Social */}
          <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
            <span className="inline-flex w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              {heroData.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl ${
              theme ? "text-white" : "text-slate-700"
            }`}
          >
            {heroData.title}
            <br />

            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>

          {/* Role */}
          <h2
            className={`mt-5 text-xl font-semibold sm:text-2xl ${
              theme ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {heroData.role}
          </h2>

          {/* Description */}
          <p
            className={`mt-6 text-base leading-8 sm:text-lg ${
              theme ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {heroData.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href={heroData.primaryButton.href}
              className="button inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:bg-primary"
            >
              {heroData.primaryButton.text}
              <ArrowRight size={18} />
            </Link>

            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition ${
                theme
                  ? "border-slate-600 text-white hover:border-primary hover:text-primary"
                  : "border-slate-700 text-slate-700 hover:border-primary hover:text-primary"
              }`}
            >
              <Download size={18} />
              {heroData.secondaryButton.text}
            </a>
          </div>

          {/* Bottom Links */}
          <div className="mt-10 flex justify-center gap-4 lg:justify-start">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border p-3 transition ${
                theme
                  ? "border-slate-600 text-white hover:border-blue-500 hover:text-blue-500"
                  : "border-slate-700 text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              GitHub
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border p-3 transition ${
                theme
                  ? "border-slate-600 text-white hover:border-blue-500 hover:text-blue-500"
                  : "border-slate-700 text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className={`rounded-full border p-3 transition ${
                theme
                  ? "border-slate-600 text-white hover:border-blue-500 hover:text-blue-500"
                  : "border-slate-700 text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl lg:h-[420px] lg:w-[420px]">
            <div
              className={`relative h-full w-full overflow-hidden rounded-lg ${
                theme ? "bg-slate-900" : "bg-white"
              }`}
            >
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width:768px) 288px, 420px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Experience Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`absolute -left-8 top-8 rounded-xl border px-4 py-3 shadow-xl backdrop-blur ${
              theme
                ? "border-slate-700 bg-slate-900/80 text-white"
                : "border-slate-200 bg-white/80 text-slate-900"
            }`}
          >
            <p
              className={`text-xs ${
                theme ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Specialization
            </p>

            <p className="font-bold">{heroData.experience}</p>
          </motion.div>

          {/* Projects Card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className={`absolute -right-8 bottom-10 rounded-xl border px-4 py-3 shadow-xl backdrop-blur ${
              theme
                ? "border-slate-700 bg-slate-900/80 text-white"
                : "border-slate-200 bg-white/80 text-slate-900"
            }`}
          >
            <p
              className={`text-xs ${
                theme ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Projects
            </p>

            <p className="font-bold">{heroData.projects}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
