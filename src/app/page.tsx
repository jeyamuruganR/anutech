import Image from "next/image";
import Link from "next/link";
import Navigation from "./navication/page"; // Adjust the path if needed
import { TrendingUp, Palette, Zap } from "lucide-react"; // <-- Add this import


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card/20 to-background text-foreground font-sans">
      {/* Header - Improved with glass effect */}
      <Navigation />

      {/* Hero Section - Enhanced with gradient and animations */}
      <section className="relative overflow-hidden">
        {/* Responsive background image with increased opacity */}
        <div className="absolute inset-0 z-0">
          {/* Desktop background */}
          <Image
            src="/back.png"
            alt="Background PC"
            fill
            className="hidden md:block object-cover w-full h-full opacity-80"
            priority
            quality={80}
            sizes="100vw"
          />
          {/* Mobile background */}
          <Image
            src="/back2.png"
            alt="Background Phone"
            fill
            className="block md:hidden object-cover w-full h-full opacity-80"
            priority
            quality={70}
            sizes="100vw"
          />
          {/* Overlay for darkening */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/100 via-background/50 to-background/0" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 gap-8 sm:gap-12">
          <div className="flex-1 space-y-6 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Flat 40% for all customers
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Let's grow your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">business</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -rotate-1"></span>
              </span>
              <br />
              with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">tools</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/20 rotate-1"></span>
              </span>{" "}
              you need
            </h1>
            
            <p className="text-lg text-zinc-300 max-w-xl leading-relaxed">
              We build modern websites, SEO strategies, and full-stack solutions that help your business grow faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="group relative bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-primary/30 text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Connect with us
                </span>
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-card"></div>
                ))}
              </div>
              <div className="text-sm text-zinc-400">
                <span className="text-white font-semibold">500+</span> businesses trust us
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center animate-float">
            <div className="relative flex items-center justify-center">
              {/* Soft colored glow behind the image */}
              <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-white/0 blur-2xl opacity-60"></div>
              </div>
              <div className="relative z-10 transition-transform duration-300 hover:scale-105 rounded-2xl shadow-2xl shadow-primary/20">
                {/* <Image 
                  src="/murugantech.jpeg" 
                  alt="Dashboard Preview" 
                  width={400} 
                  height={400} 
                  className="rounded-2xl border-4 border-zinc-900/60"
                  style={{ background: "linear-gradient(135deg, #ff6b35 0%, #3a86ff 100%)", objectFit: "cover" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with gradient cards */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <TrendingUp className="text-orange-500 w-10 h-10 mb-2" />,
                title: "🌐 Web Development & Online Presence",
                description: "Static websites • SEO optimization • Domain & hosting setup • WordPress development • Full-stack projects",
                color: "from-orange-500/20 to-orange-600/10"
              },
              {
                icon: <Zap className="text-blue-500 w-10 h-10 mb-2" />,
                title: "🤖 AI & Automation",
                description: "Website chatbot integration • AI-based projects • Machine learning solutions • Smart automation",
                color: "from-blue-500/20 to-blue-600/10"
              },
              {
                icon: <Palette className="text-green-500 w-10 h-10 mb-2" />,
                title: "💻 Academic & Project Support",
                description: "Mini ML projects • AI project development • Web-based academic projects • Technical guidance",
                color: "from-green-500/20 to-green-600/10"
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group relative bg-gradient-to-br from-card to-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                  <div className="mt-6 pt-6 border-t border-zinc-800/50 group-hover:border-primary/30 transition-colors">
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group/link">
                      Learn more
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Enhanced with testimonials */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                quote: "MarketMe transformed our online presence. Our traffic increased by 300% in just 3 months!",
                name: "Sarah Chen",
                role: "CEO, TechFlow",
                avatar: "SC"
              },
              {
                quote: "The team's expertise in digital marketing is exceptional. They truly understand business growth.",
                name: "Marcus Aurelius",
                role: "Business Owner",
                avatar: "MA"
              }
            ].map((review, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-card to-zinc-900/50 rounded-2xl p-8 border border-zinc-800/50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                        {review.avatar}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl text-zinc-300 mb-4 leading-relaxed">"{review.quote}"</div>
                      <div>
                        <div className="text-white font-semibold">{review.name}</div>
                        <div className="text-zinc-400 text-sm">{review.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-6">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with gradient */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-r from-primary to-accent py-12 sm:py-16 px-6 sm:px-12 rounded-3xl shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-lg text-white/90 mb-6 max-w-xl">
                  Join thousands of successful companies that trust MarketMe with their growth.
                </p>
                <button className="group bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-zinc-100 hover:scale-105 transition-all duration-300 shadow-lg">
                  <span className="flex items-center gap-2">
                    Start Your Journey
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <div className="text-center text-white">
                      <div className="text-5xl font-bold mb-2">6/7</div>
                      <div className="text-lg">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced with more information */}
      <footer className="mt-16 py-12 bg-gradient-to-t from-card to-background border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                Tech<span className="text-primary">Murugan</span>
              </div>
              <p className="text-zinc-400">
                Empowering businesses with cutting-edge digital solutions since 2020.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Web Development", "AI & Automation", "WordPress", "Chatbot Integration"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-400 hover:text-primary transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-400 hover:text-primary transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {["twitter", "linkedin", "github"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                  >
                    {social.charAt(0).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} jeyamurganRajendiran. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="text-zinc-400 hover:text-primary transition">Terms of Service</a>
              <a href="#" className="text-zinc-400 hover:text-primary transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}