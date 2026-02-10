"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Navigation from "../navication/page";

const projects = [
  {
    id: 1,
    title: "Static Business Website",
    category: "Static Website",
    description:
      "Clean and responsive static website designed for a local business with SEO optimization and fast loading performance.",
    tags: ["HTML", "CSS", "Tailwind", "SEO"],
    client: "Local Business",
    price: "₹5,000",
  },
  {
    id: 2,
    title: "SEO & Hosting Setup",
    category: "SEO & Hosting",
    description:
      "Complete domain, hosting and on-page SEO setup to improve Google visibility and performance.",
    tags: ["SEO", "cPanel", "Google Search Console"],
    client: "Startup Brand",
    price: "₹8,000",
  },
  {
    id: 3,
    title: "Website Chatbot",
    category: "Chatbot",
    description:
      "AI-powered website chatbot to handle customer queries and improve engagement automatically.",
    tags: ["React", "AI", "Chatbot"],
    client: "Service Company",
    price: "₹25,000",
  },
  {
    id: 4,
    title: "Basic ML Project",
    category: "Machine Learning",
    description:
      "Academic-level machine learning project with dataset analysis and prediction model.",
    tags: ["Python", "ML", "Pandas"],
    client: "Student Project",
    price: "₹6,000",
  },
  {
    id: 5,
    title: "Full Stack Web Project",
    category: "Full Stack",
    description:
      "Minimum full-stack web application with frontend, backend and database integration.",
    tags: ["React", "Node.js", "MongoDB"],
    client: "Mini Project",
    price: "₹15,000",
  },
  {
    id: 6,
    title: "WordPress Website",
    category: "WordPress",
    description:
      "Custom WordPress website with theme customization and basic SEO configuration.",
    tags: ["WordPress", "Elementor", "SEO"],
    client: "Small Business",
    price: "₹10,000",
  },
  {
    id: 7,
    title: "AI Based Project",
    category: "AI Project",
    description:
      "AI-based application developed for learning and demonstration purposes.",
    tags: ["AI", "Python", "Automation"],
    client: "Academic / Demo",
    price: "₹60,000+",
  },
];

const categories = [
  "All",
  "Static Website",
  "SEO & Hosting",
  "Chatbot",
  "Machine Learning",
  "Full Stack",
  "WordPress",
  "AI Project",
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      <div className="py-20 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm">
              Our Services & Pricing
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-4">What We Build</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Websites, AI solutions, ML projects and full-stack applications
            tailored for businesses and students.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900 hover:border-primary transition"
            >
              {/* Title + Price */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {project.price}
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-zinc-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">{project.client}</span>
                <ArrowUpRight className="text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
