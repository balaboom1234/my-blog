import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content - Title */}
          <div className="lg:col-span-1 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stay Informed,<br />
              Stay Inspired
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
            </p>
          </div>
          
          {/* Center Content - Hero Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                alt="Thompson P." 
                className="w-72 h-80 object-cover rounded-3xl shadow-2xl"
              />
              {/* Optional: Add a subtle background shape */}
              <div className="absolute -top-4 -right-4 w-72 h-80 bg-yellow-200 rounded-3xl -z-10 opacity-30"></div>
            </div>
          </div>
          
          {/* Right Content - Author Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2 font-medium">
                Author
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thompson P.
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-sm">
                I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                When I'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
