import React from 'react';
import Image from 'next/image';

const GuidingValuesSection = () => {
  const values = [
    { 
      title: "INTEGRITY", 
      imageUrl: "/integrity.jpg",
      color: "from-blue-500/10 to-blue-500/20"
    },
    { 
      title: "SUSTAINABILITY", 
      imageUrl: "/sustainability.jpg",
      color: "from-green-500/10 to-green-500/20"
    },
    { 
      title: "COMPASSION", 
      imageUrl: "/compassion.jpg",
      color: "from-purple-500/10 to-purple-500/20"
    },
    { 
      title: "INNOVATION", 
      imageUrl: "/innovation.jpg",
      color: "from-rose-500/10 to-rose-500/20"
    }
  ];

  // Desktop/Tablet Card (unchanged)
  const DesktopValueCard = ({ imageUrl, title, color }) => (
    <div className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${color} p-4 transition-all duration-300 hover:shadow-lg`}>
      <div className="aspect-square w-full relative rounded-xl overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold tracking-wide text-gray-800">
          {title}
        </h3>
      </div>
    </div>
  );

  // Mobile Card
  const MobileValueCard = ({ imageUrl, title }) => (
    <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover rounded-lg" 
          sizes="64px"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile View */}
      <div className="sm:hidden py-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Our Guiding Values
        </h2>
        <div className="space-y-3 max-w-md mx-auto">
          {values.map((value, index) => (
            <MobileValueCard key={index} {...value} />
          ))}
        </div>
      </div>

      {/* Desktop/Tablet View (unchanged) */}
      <div className="hidden sm:block py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Guiding Values
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <DesktopValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidingValuesSection;