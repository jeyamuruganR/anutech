import Navigation from "../navication/page";
import {
  Sparkles, Zap, Heart, Target,
  Github, Linkedin, Mail, Bot, Brain, Cpu, Rocket,
  Code2, Users, ChevronRight
} from "lucide-react";

import Footer from "../footer/page";
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-foreground font-sans overflow-hidden">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern (FIXED) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="relative mb-32 text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border-2 border-white/10 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  RJ
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Jeyamurugan (RJ)
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              I build AI-powered applications, intelligent chatbots, and scalable web platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Let's Work Together <Rocket className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10">
              <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-zinc-400 mb-4">
                I'm a <span className="text-primary font-semibold">Full Stack & AI Developer</span> building intelligent systems and scalable apps.
              </p>
              <p className="text-zinc-400">
                I create chatbots, automation tools, and modern web platforms using clean, efficient code.
              </p>
            </div>

            <div className="space-y-6">
              <Feature icon={<Sparkles className="text-primary w-6 h-6" />} title="Creative Solver" desc="Turning ideas into working products" />
              <Feature icon={<Zap className="text-purple-500 w-6 h-6" />} title="Fast & Scalable" desc="Optimized for performance" />
              <Feature icon={<Heart className="text-blue-500 w-6 h-6" />} title="User Focused" desc="Great UX with strong backend" />
              <Feature icon={<Target className="text-emerald-500 w-6 h-6" />} title="Results Driven" desc="Focused on real value" />
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="text-center bg-zinc-900 border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Let's Build Something <span className="text-primary">Awesome</span>
            </h2>
            <p className="text-zinc-400 mb-8">
              Need a chatbot or web app? Just message me.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="mailto:muruganjeyao59@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                <Mail className="w-5 h-5" /> Contact Me
              </a>
              <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition">
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}
