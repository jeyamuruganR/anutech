export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for personal projects",
      price: "$499",
      description: "Essential features to launch your idea",
      features: [
        { text: "1 Landing Page", included: true },
        { text: "Mobile Responsive Design", included: true },
        { text: "Basic Contact Form", included: true },
        { text: "Email Support", included: true },
        { text: "Custom Domain", included: false },
        { text: "Advanced Analytics", included: false },
        { text: "SEO Optimization", included: false }
      ],
      cta: "Get Started",
      popular: false,
      accent: "from-blue-500 to-cyan-400"
    },
    {
      name: "Professional",
      tagline: "Best for growing businesses",
      price: "$999",
      description: "Advanced features for serious growth",
      features: [
        { text: "Up to 5 Pages", included: true },
        { text: "Custom UI/UX Design", included: true },
        { text: "Advanced Forms & Integrations", included: true },
        { text: "Priority Email & Chat Support", included: true },
        { text: "Custom Domain & SSL", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Monthly Analytics Report", included: false }
      ],
      cta: "Choose Professional",
      popular: true,
      accent: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      tagline: "For large-scale solutions",
      price: "Custom",
      description: "Tailored solutions for complex needs",
      features: [
        { text: "Unlimited Pages & Features", included: true },
        { text: "Custom Web Application", included: true },
        { text: "Advanced API Integrations", included: true },
        { text: "24/7 Dedicated Support", included: true },
        { text: "Advanced SEO Strategy", included: true },
        { text: "Performance Optimization", included: true },
        { text: "Custom Analytics Dashboard", included: true }
      ],
      cta: "Contact Sales",
      popular: false,
      accent: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-zinc-900 to-background text-foreground font-sans py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
            Start small, scale as you grow.
          </p>
          
          {/* Toggle Switch for Annual/Monthly */}
          <div className="inline-flex items-center bg-zinc-800 rounded-full p-1 mb-12">
            <button className="px-6 py-2 rounded-full text-sm font-medium transition-all">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-medium transition-all">
              Yearly <span className="text-xs text-primary-200">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                plan.popular 
                  ? 'border-2 border-primary/50 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-xl shadow-primary/10' 
                  : 'border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 mb-3">
                    {plan.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-purple-500">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-zinc-400 ml-2">/project</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        feature.included 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-zinc-800 text-zinc-600'
                      }`}>
                        {feature.included ? '✓' : '×'}
                      </div>
                      <span className={feature.included ? 'text-zinc-300' : 'text-zinc-600'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'bg-gradient-to-r from-zinc-800 to-zinc-900 text-white border border-zinc-700 hover:border-primary/50 hover:bg-zinc-800'
                }`}>
                  {plan.cta}
                </button>
              </div>

              {/* Gradient Accent */}
              <div className={`h-1 bg-gradient-to-r ${plan.accent}`}></div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Feature Comparison</h2>
          <div className="rounded-2xl border border-zinc-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-900">
                  <th className="p-4 text-left text-zinc-300 font-semibold">Features</th>
                  {plans.map((plan, idx) => (
                    <th key={idx} className="p-4 text-center font-semibold">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Development Time",
                  "Revisions Included",
                  "Support Response Time",
                  "Source Code Access",
                  "Hosting Setup",
                  "Maintenance Period"
                ].map((feature, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-zinc-900/50' : 'bg-zinc-900/30'}>
                    <td className="p-4 text-zinc-300">{feature}</td>
                    <td className="p-4 text-center">
                      <span className="text-primary">✓</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-primary">✓</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-primary">✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I upgrade my plan later?",
                a: "Yes, you can upgrade at any time. We'll prorate the difference."
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 14-day satisfaction guarantee on all plans."
              },
              {
                q: "Is there a contract?",
                a: "No contracts. Cancel anytime with no penalties."
              },
              {
                q: "What payment methods do you accept?",
                a: "All major credit cards, PayPal, and bank transfers."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-zinc-900/30 rounded-xl p-6 hover:bg-zinc-900/50 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/5 to-purple-500/10 rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h3>
            <p className="text-zinc-400 mb-6">We can tailor a package specifically for your business needs.</p>
            <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-primary/25 transition-all">
              Get a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}