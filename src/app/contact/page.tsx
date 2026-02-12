"use client";

import Navigation from "../navication/page";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ REAL EMAIL SUBMIT FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        alert("❌ Email sending failed!");
      }
    } catch (error) {
      alert("❌ Something went wrong!");
    }

    setIsSubmitting(false);
  };

  // ✅ Input Change Handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Contact Methods
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "muruganjeyao59@gmail.com",
      link: "mailto:muruganjeyao59@gmail.com",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+91 9150945606",
      link: "tel:+919150945606",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "Ramanathapuram, Tamil Nadu",
      link: "#",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      detail: "Available 24/7",
      link: "#",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
  ];

  // Social Links
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "#",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "#",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-zinc-900/50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project idea? Send us a message and we will respond quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-zinc-900/60 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Send className="w-5 h-5" /> Send Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-gray-400">
                  We received your message successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
                />

                <textarea
                  name="message"
                  placeholder="Your Message..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-full font-semibold flex justify-center items-center gap-2 hover:opacity-90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.link}
                  className={`${method.color} border rounded-xl p-6 text-center hover:scale-105 transition`}
                >
                  <div className="mb-3">{method.icon}</div>
                  <h3 className="font-bold">{method.title}</h3>
                  <p className="text-sm">{method.detail}</p>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="flex gap-2 items-center px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
