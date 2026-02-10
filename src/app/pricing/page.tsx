"use client";

import Navigation from "../navication/page";

const whatsappNumber = "91XXXXXXXXXX"; // 👈 replace with your number

export default function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      tagline: "Perfect for individuals & portfolios",
      price: "₹5,000",
      description: "Clean one-page static website",
      features: [
        { text: "1 Landing Page", included: true },
        { text: "Mobile Responsive Design", included: true },
        { text: "Contact Form / WhatsApp Link", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Custom Domain", included: false },
        { text: "Hosting Included", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Business Website",
      tagline: "Best for growing businesses",
      price: "₹12,000",
      description: "Professional multi-page website",
      features: [
        { text: "Up to 5 Pages", included: true },
        { text: "Custom UI / UX Design", included: true },
        { text: "Advanced Forms", included: true },
        { text: "Basic SEO Optimization", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "1 Month Support", included: true },
      ],
      cta: "Choose Plan",
      popular: true,
    },
    {
      name: "E-commerce Website",
      tagline: "Sell products online",
      price: "₹35,000",
      description: "Complete online store solution",
      features: [
        { text: "Product Listing & Categories", included: true },
        { text: "Cart & Checkout", included: true },
        { text: "Payment Gateway Integration", included: true },
        { text: "Admin Dashboard", included: true },
        { text: "Order Management", included: true },
        { text: "Basic Security Setup", included: true },
      ],
      cta: "Start Selling",
      popular: false,
    },
    {
      name: "AI Chatbot",
      tagline: "Smart automation for your business",
      price: "₹25,000",
      description: "AI-powered chatbot solution",
      features: [
        { text: "Website Chatbot Integration", included: true },
        { text: "AI / NLP Based", included: true },
        { text: "FAQ + Smart Responses", included: true },
        { text: "Admin Training Support", included: true },
        { text: "WhatsApp Integration", included: false },
        { text: "Monthly API Cost", included: false },
      ],
      cta: "Build Chatbot",
      popular: false,
    },
    {
      name: "GenAI / ML Project",
      tagline: "Advanced AI solutions",
      price: "₹60,000+",
      description: "Custom GenAI or ML-based system",
      features: [
        { text: "Custom AI / ML Model", included: true },
        { text: "Real-world Use Case", included: true },
        { text: "API Integration", included: true },
        { text: "Dashboard + UI", included: true },
        { text: "Deployment Support", included: true },
        { text: "Documentation & Training", included: true },
      ],
      cta: "Request Quote",
      popular: false,
    },
    {
      name: "Enterprise",
      tagline: "Large-scale custom solutions",
      price: "Custom",
      description: "Tailored solution for complex needs",
      features: [
        { text: "Unlimited Pages / Features", included: true },
        { text: "Custom Web App / AI System", included: true },
        { text: "Advanced API Integrations", included: true },
        { text: "Dedicated Support", included: true },
        { text: "Performance Optimization", included: true },
        { text: "Long-term Maintenance", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const openWhatsApp = (plan: string) => {
    const message = `Hello, I am interested in the "${plan}" plan. Please share more details.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      <div className="py-20 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Pricing Plans (India)
          </h1>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Transparent pricing for websites, e-commerce, chatbots, GenAI and ML projects.
            No hidden charges.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border bg-zinc-900 transition ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/20 scale-[1.03]"
                  : "border-zinc-800"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-zinc-400 mb-4">{plan.tagline}</p>

              <div className="text-4xl font-bold mb-6">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-sm text-zinc-400"> / project</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 flex items-center justify-center rounded-full text-sm ${
                        f.included
                          ? "bg-primary/20 text-primary"
                          : "bg-zinc-700 text-zinc-400"
                      }`}
                    >
                      {f.included ? "✓" : "×"}
                    </span>
                    <span className="text-zinc-300">{f.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsApp(plan.name)}
                className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:opacity-90 transition"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
