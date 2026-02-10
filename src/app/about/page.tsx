import Navigation from '../navication/page';
import { 
  Sparkles, Zap, Heart, Handshake, Lightbulb, Target, 
  Github, Linkedin, Mail, Bot, Brain, Cpu 
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-zinc-950 to-background text-foreground font-sans">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Floating Elements */}
          <div className="fixed top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10"></div>
          <div className="fixed bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl -z-10"></div>

          {/* Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium text-sm">AI & Full Stack Developer</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Hi, I'm Jeyamurugan (Rj)
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              I build AI-powered applications, chatbots, and scalable web platforms using modern technologies.
            </p>
          </div>

          {/* About */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  I'm a Full Stack & AI Developer focused on building intelligent systems like AI chatbots,
                  automation tools, and smart web applications. I enjoy mixing backend, frontend, and AI to
                  create real-world products.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Feature icon={<Sparkles className="text-primary w-7 h-7" />} title="Creative Builder" desc="From idea to production-ready app" />
              <Feature icon={<Zap className="text-purple-500 w-7 h-7" />} title="Performance Focused" desc="Fast, scalable, optimized systems" />
              <Feature icon={<Heart className="text-blue-500 w-7 h-7" />} title="User First" desc="Clean UX with powerful logic" />
            </div>
          </div>

          {/* AI Chatbot Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              🤖 AI <span className="text-primary">Chatbots</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card
                icon={<Bot className="text-primary w-10 h-10" />}
                title="Custom AI Chatbots"
                desc="I build intelligent chatbots using LLMs, APIs, and custom logic for support, automation, and business workflows."
              />
              <Card
                icon={<Brain className="text-purple-500 w-10 h-10" />}
                title="RAG & Knowledge Bots"
                desc="Chatbots that can read your documents, databases, and websites to give accurate, context-aware answers."
              />
            </div>
          </div>

          {/* AI Projects Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              🧠 AI <span className="text-primary">Projects</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                icon={<Cpu className="text-emerald-500 w-10 h-10" />}
                title="AI Agent System"
                desc="Multi-agent system for orchestration, automation, and task execution using Dapr + AI services."
              />
              <ProjectCard
                icon={<Bot className="text-blue-500 w-10 h-10" />}
                title="Business Chatbot"
                desc="AI chatbot for customer support, FAQ, and lead generation with admin dashboard."
              />
              <ProjectCard
                icon={<Brain className="text-purple-500 w-10 h-10" />}
                title="AI Web Tools"
                desc="Web apps using AI for content generation, analysis, and automation workflows."
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-primary/10 via-blue-500/5 to-purple-500/10 rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-3xl font-bold text-center mb-10 text-white">My Journey</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "20+", label: "Projects Built" },
                  { number: "10+", label: "AI Experiments" },
                  { number: "3+", label: "Years Experience" },
                  { number: "100%", label: "Learning Mindset" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-zinc-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/5 to-purple-500/10 rounded-3xl p-12 text-center border border-primary/20">
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Build Something Smart 🚀</h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Want an AI chatbot or AI-powered app for your business? Let’s talk.
            </p>
            <a 
              href="mailto:yourmail@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
            >
              Contact Me
              <span className="text-2xl">→</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 hover:border-primary/30 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-zinc-400">{desc}</p>
    </div>
  );
}

function ProjectCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/0 border border-zinc-800 rounded-2xl p-8 hover:border-primary/30 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 text-sm">{desc}</p>
    </div>
  );
}
