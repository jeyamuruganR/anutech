"use client";
import Link from "next/link";
import Navigation from '../navication/page';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle, Instagram, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "hello@marketme.com",
      link: "mailto:hello@marketme.com",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "123 Business Ave, Suite 100",
      link: "#",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      detail: "Available 24/7",
      link: "#",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#", color: "hover:bg-pink-500/20 hover:text-pink-500" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#", color: "hover:bg-blue-400/20 hover:text-blue-400" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#", color: "hover:bg-blue-600/20 hover:text-blue-600" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#", color: "hover:bg-blue-700/20 hover:text-blue-700" }
  ];

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "We respond to all inquiries within 24 hours on business days."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free 30-minute consultation for new clients."
    },
    {
      question: "What are your business hours?",
      answer: "Monday to Friday, 9 AM - 6 PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-zinc-900/50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let&apos;s Build Something
            <span className="block text-primary">Amazing Together</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
            Our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form Section */}
          <div
            id="contact-form"
            className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send us a message
            </h2>
            <p className="text-gray-400 mb-8">We&apos;ll get back to you as soon as possible</p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ve received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className={`${method.color} border rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="mb-4 p-3 rounded-full bg-current/10">
                    {method.icon}
                  </div>
                  <h3 className="font-bold mb-1">{method.title}</h3>
                  <p className="text-sm opacity-90">{method.detail}</p>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-yellow-500" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-zinc-800/50">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/50">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 p-6">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-700/50 transition-all duration-300 hover:scale-105`}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800/30 p-6 hover:border-zinc-700/50 transition-colors"
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="relative max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 blur-2xl rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-6">Schedule a free consultation with our experts today.</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Book a Free Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}