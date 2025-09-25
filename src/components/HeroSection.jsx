import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="space-y-8 pt-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Stay Informed, Stay Inspired
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
          </p>
        </div>
        
        {/* Right Content - Author Info */}
        <div className="flex flex-col items-end space-y-8">
          {/* Author Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" 
              alt="Thompson P." 
              className="w-80 h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Author Info */}
          <div className="max-w-md text-right">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-3 font-medium">
              author
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thompson P.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
