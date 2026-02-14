export default function Footer() {
  return (
    <footer className="mt-16 py-12 bg-gradient-to-t from-card to-background border-t border-zinc-800/50">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Logo */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Tech<span className="text-primary">Murugan</span>
            </div>
            <p className="text-zinc-400">
              Empowering businesses with cutting-edge digital solutions since 2020.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "AI & Automation", "WordPress", "Chatbot Integration"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-primary transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-primary transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
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

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} jeyamurganRajendiran. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-400 hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-400 hover:text-primary transition">
              Terms of Service
            </a>
            <a href="#" className="text-zinc-400 hover:text-primary transition">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
