import React from 'react';

const Hero = () => (
 
  <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-white overflow-hidden">
    {/* Background Balls */}
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(15)].map((_, index) => (
        <div
          key={index}
          className="w-6 h-6 rounded-full bg-yellow-500 opacity-70 shadow-xl animate-moveRight"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * -5}s`,
            boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.4), 0px 8px 20px rgba(0, 0, 0, 0.2)`,
          }}
        />
      ))}
    </div>

    {/* Content */}
    <h1 className="text-4xl font-bold mb-4 animate-fadeIn">King of Jaunpur Navneet Kumar Singh</h1>
    {/* <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Welcome to My Portfolio!</h1> */}
    <p className="text-xl animate-slideIn">Sharing my journey, blog, and social life.</p>
  </section>
);

export default Hero;
