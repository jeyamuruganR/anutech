"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 
        text-white px-5 py-4 rounded-full shadow-lg z-50 flex items-center gap-2 
        hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        💬 <span className="font-medium">Chat with us</span>
      </button>

      {/* Chat Popup */}
      {open && (
        <div
          className="fixed bottom-4 right-0 w-[380px] h-[700px] 
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
                borderRadius: "0px",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
