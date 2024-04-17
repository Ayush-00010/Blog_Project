import React from "react";

export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-screen">
          <div className="relative w-64 h-64 overflow-hidden rounded-full">
            {/* Background gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75"></div>
            {/* Spinning animation */}
            <div className="absolute inset-0 rounded-full animate-spin">
              <div className="flex items-center justify-center h-full">
                <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
              </div>
            </div>
            {/* Sparkling fireworks */}
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="absolute -z-10 w-2 h-2 rounded-full opacity-25"
                  style={{
                    animation: `sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    
  
