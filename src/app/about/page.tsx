import Navigation from '../navication/page';
import { Sparkles, Zap, Heart, Handshake, Lightbulb, Target } from "lucide-react"; // Add at the top

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

          {/* Creative Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium text-sm">We're Hiring</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                We Craft
                <br />
                Digital
                <br />
                Experiences
              </span>
            </h1>
          </div>

          {/* Mission in Creative Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Our Philosophy
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  We believe great digital experiences should feel effortless, intuitive, and human. Our approach blends technical excellence with creative storytelling to build connections that matter.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="text-primary w-7 h-7" /> {/* Lucide icon */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Creative Vision</h3>
                  <p className="text-zinc-400">Bold ideas that break conventions</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="text-purple-500 w-7 h-7" /> {/* Lucide icon */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Technical Edge</h3>
                  <p className="text-zinc-400">Cutting-edge solutions that scale</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="text-blue-500 w-7 h-7" /> {/* Lucide icon */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Human Centered</h3>
                  <p className="text-zinc-400">Design with people at the core</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Values Showcase */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {([
                { title: "Collaboration", icon: <Handshake className="text-blue-500 w-10 h-10 mb-2" />, desc: "Partnership over transaction", color: "from-blue-500/10 to-cyan-500/5" },
                { title: "Innovation", icon: <Lightbulb className="text-purple-500 w-10 h-10 mb-2" />, desc: "Always learning, always growing", color: "from-purple-500/10 to-pink-500/5" },
                { title: "Impact", icon: <Target className="text-emerald-500 w-10 h-10 mb-2" />, desc: "Results that drive change", color: "from-emerald-500/10 to-teal-500/5" }
              ]).map((value, index) => (
                <div key={index} className={`bg-gradient-to-br ${value.color} backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300`}>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-zinc-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-primary/10 via-blue-500/5 to-purple-500/10 rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-3xl font-bold text-center mb-10 text-white">By The Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "50+", label: "Projects Delivered" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "5+", label: "Years Experience" },
                  { number: "24/7", label: "Dedicated Support" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-zinc-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact with Illustration */}
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/5 to-purple-500/10 rounded-3xl p-12 text-center border border-primary/20">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Let's create together
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it and explore how we can help bring your vision to life.
            </p>
            <a 
              href="mailto:hello@agency.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
            >
              Start a Conversation
              <span className="text-2xl">→</span>
            </a>
          </div>

          {/* Team Section */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Alex Chen", role: "Lead Developer", focus: "Full-Stack & Architecture" },
                { name: "Maya Rodriguez", role: "Creative Director", focus: "UI/UX & Brand Strategy" },
                { name: "David Kim", role: "Product Manager", focus: "Strategy & Client Relations" }
              ].map((member, index) => (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-primary/30 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-zinc-400 text-sm">{member.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="fixed -z-10 top-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="fixed -z-10 bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}