export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-800 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>

        {/* Creative Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-medium">We're Hiring</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            We Craft
            <br />
            <span className="relative inline-block">
              Digital
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20">
                <path d="M0,10 Q50,20 100,10 T200,10" stroke="#3b82f6" strokeWidth="3" fill="none" />
              </svg>
            </span>
            <br />
            Experiences
          </h1>
        </div>

        {/* Mission in Creative Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-zinc-900">
                Our Philosophy
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We believe great digital experiences should feel effortless, intuitive, and human. Our approach blends technical excellence with creative storytelling to build connections that matter.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Creative Vision</h3>
                <p className="text-zinc-600">Bold ideas that break conventions</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Edge</h3>
                <p className="text-zinc-600">Cutting-edge solutions that scale</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Values Showcase */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Collaboration", emoji: "🤝", desc: "Partnership over transaction" },
              { title: "Innovation", emoji: "💡", desc: "Always learning, always growing" },
              { title: "Impact", emoji: "🎯", desc: "Results that drive change" }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-zinc-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-zinc-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact with Illustration */}
        <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's create together
          </h2>
          <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it and explore how we can help bring your vision to life.
          </p>
          <a 
            href="mailto:hello@agency.com"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Start a Conversation
            <span className="text-2xl">→</span>
          </a>
        </div>

      </div>
    </div>
  );
}