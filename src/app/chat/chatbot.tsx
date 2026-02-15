"use client";

import { useState, useEffect, useRef } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!canvasRef.current || open) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let rotation = 0;
    
    // Simple 3D-like AI model animation
    const draw3DModel = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set canvas size
      canvas.width = 60;
      canvas.height = 60;
      
      // Draw 3D sphere with AI elements
      const centerX = 30;
      const centerY = 30;
      const radius = isHovered ? 25 : 22;
      
      // Create gradient for 3D effect
      const gradient = ctx.createRadialGradient(
        centerX - 5, centerY - 5, 5,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, '#60a5fa');
      gradient.addColorStop(0.5, '#3b82f6');
      gradient.addColorStop(1, '#2563eb');
      
      // Draw main sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add shine effect
      ctx.beginPath();
      ctx.arc(centerX - 8, centerY - 8, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();
      
      // Draw AI circuit lines (rotating)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 2;
      
      // Draw orbiting rings
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, radius + 5, radius - 10, i * Math.PI/3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 - i * 0.1})`;
        ctx.stroke();
      }
      
      // Draw AI brain symbol
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw neural connections
      for (let j = 0; j < 6; j++) {
        const angle = (j * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * 5, Math.sin(angle) * 5);
        ctx.lineTo(Math.cos(angle) * 15, Math.sin(angle) * 15);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      
      ctx.restore();
      
      // Update rotation for animation
      rotation += 0.02;
      
      animationRef.current = requestAnimationFrame(draw3DModel);
    };
    
    draw3DModel();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, open]);

  return (
    <>
      {/* 3D AI Model Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-blue-400 rounded-full blur-xl transition-opacity duration-300 
            ${isHovered ? 'opacity-70' : 'opacity-40'}`}>
          </div>
          
          {/* Canvas for 3D model */}
          <canvas
            ref={canvasRef}
            className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 
              shadow-2xl cursor-pointer transition-transform duration-300 
              ${isHovered ? 'scale-110 rotate-6' : 'scale-100'}`}
            style={{
              boxShadow: isHovered 
                ? '0 20px 30px -10px rgba(59, 130, 246, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.8)' 
                : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
            }}
          />
          
          {/* Pulse ring */}
          <div className={`absolute inset-0 rounded-full border-2 border-white/30 
            animate-ping transition-opacity duration-1000 ${open ? 'opacity-0' : 'opacity-100'}`}>
          </div>
          
          {/* Tooltip */}
          <div className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm 
            rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <div className="relative">
              Chat with AI Assistant
              <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
          
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full 
            border-2 border-white animate-pulse">
          </div>
        </div>
      </button>

      {/* Chat Popup */}
      {open && (
        <div
          className="fixed bottom-4 right-4 w-[380px] h-[700px] 
          bg-white shadow-2xl rounded-2xl overflow-hidden z-50 
          border border-gray-200 flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-indigo-600 text-white p-4 flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">TechMurugan Assistant</h2>
              <p className="text-sm text-blue-100">
                We typically reply in minutes
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/20 rounded-full px-2 py-1"
            >
              ✖
            </button>
          </div>

          {/* Chatbot Area */}
          <div className="flex-1 bg-white">
            <iframe
              src="https://chatbot-umber-seven-97.vercel.app/"
              title="Chatbot"
              className="w-full h-full border-0"
              style={{
                border: "none",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}