"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Navigation from '../navication/page';

const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "Web Development",
    description: "A modern, responsive e-commerce platform that increased conversions by 45% for a premium retail brand.",
    image: "/project1.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    client: "Luxe Retail Co.",
    results: ["+45% Conversion", "+60% Mobile Sales"],
    gradient: "from-blue-500/20 to-purple-500/20",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    category: "Product Design",
    description: "A comprehensive analytics platform with real-time data visualization for a growing SaaS company.",
    image: "/project2.jpg",
    tags: ["TypeScript", "Next.js", "Chart.js", "D3.js"],
    client: "DataInsights Inc.",
    results: ["+30% User Engagement", "-40% Load Time"],
    gradient: "from-emerald-500/20 to-cyan-500/20",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Creative Agency Portfolio",
    category: "Brand Identity",
    description: "A visually stunning portfolio that showcases award-winning work for a leading creative agency.",
    image: "/project3.jpg",
    tags: ["Next.js", "Framer Motion", "GSAP", "Three.js"],
    client: "PixelCraft Studio",
    results: ["+200% Lead Generation", "Awwwards Site of Day"],
    gradient: "from-orange-500/20 to-pink-500/20",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Health & Wellness App",
    category: "Mobile App",
    description: "A holistic wellness application with personalized tracking and AI-powered recommendations.",
    image: "/project4.jpg",
    tags: ["React Native", "Node.js", "Firebase", "TensorFlow"],
    client: "WellnessPlus",
    results: ["4.9 App Store Rating", "500K+ Downloads"],
    gradient: "from-green-500/20 to-teal-500/20",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "FinTech Platform",
    category: "Web Development",
    description: "Secure financial dashboard with real-time market data and portfolio management tools.",
    image: "/project5.jpg",
    tags: ["Vue.js", "Python", "PostgreSQL", "AWS"],
    client: "WealthFront",
    results: ["99.9% Uptime", "SOC2 Compliant"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Travel Experience Platform",
    category: "Product Design",
    description: "End-to-end travel booking platform with AR-powered destination previews.",
    image: "/project6.jpg",
    tags: ["React", "Three.js", "Stripe", "MongoDB"],
    client: "Wanderlust Adventures",
    results: ["+70% Bookings", "Travel Excellence Award"],
    gradient: "from-amber-500/20 to-red-500/20",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const categories = ["All", "Web Development", "Product Design", "Brand Identity", "Mobile App"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-zinc-950 to-background text-foreground font-sans">
      {/* Navigation positioned at the top */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Portfolio Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Masterpieces
              </span>
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Discover how we transform complex challenges into elegant digital experiences that drive real results for industry leaders and innovators.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" },
                { value: "1M+", label: "Users Impacted" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative group rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 hover:border-primary/30 transition-all duration-500 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                  <div className="relative h-full w-full bg-zinc-800 flex items-center justify-center">
                    <div className="text-4xl font-bold text-zinc-700">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 text-zinc-600 group-hover:text-primary transition-all duration-300 ${
                      hoveredProject === project.id ? 'rotate-45' : ''
                    }`} />
                  </div>

                  <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.results.map((result, idx) => (
                      <span key={idx} className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full">
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Client & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div>
                      <div className="text-xs text-zinc-500">Client</div>
                      <div className="text-sm font-medium text-zinc-300">{project.client}</div>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                      View Case Study
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-purple-500/10" />
            <div className="relative backdrop-blur-sm bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to create something extraordinary?
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can transform your vision into a remarkable digital experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center justify-center gap-3">
                  Start a Project
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-zinc-700 text-white rounded-full font-bold text-lg hover:border-primary hover:bg-primary/5 transition-all">
                  View All Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - moved to bottom to not interfere with navigation */}
      <div className="fixed -z-10 top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="fixed -z-10 bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}