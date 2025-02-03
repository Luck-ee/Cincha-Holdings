import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const InterestCard = ({ title, imageUrl, description, visible, isActive, onClick, isMobile }) => {
  if (isMobile) {
    return (
      <div 
        onClick={onClick}
        className={`bg-white rounded-xl shadow-sm mb-3 overflow-hidden transition-all duration-300
          ${isActive ? 'ring-2 ring-purple-400' : 'opacity-90'}`}
      >
        {/* Header */}
        <div className="flex items-center p-4 cursor-pointer">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="rounded-lg object-cover"
              sizes="64px"
            />
          </div>
          <h3 className="ml-4 text-lg font-semibold text-gray-800 flex-grow">{title}</h3>
          <ChevronRight 
            className={`transform transition-transform duration-500 ease-in-out ${
              isActive ? 'rotate-90' : ''
            }`} 
            size={20}
          />
        </div>

        {/* Content */}
        <div 
          className={`transform transition-all duration-500 ease-in-out origin-top ${
            isActive ? 'max-h-48' : 'max-h-0'
          } overflow-hidden`}
        >
          <div className="p-4 pt-0">
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Original desktop/tablet card
  return (
    <div
      className={`bg-white flex flex-col items-center p-4 py-8 shadow-md transition-opacity duration-500 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <img src={imageUrl} alt={title} className="min-h-32 object-cover mb-1" />
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

const CoreInterestsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeInterest, setActiveInterest] = useState(null);
  const sectionRef = useRef(null);

  const interests = [
    {
      title: "Affordable Housing",
      imageUrl: "/affordablehousing.jpg",
      description: "Dedicated to creating accessible and sustainable housing solutions for all communities, ensuring everyone has a place to call home."
    },
    {
      title: "Food Security",
      imageUrl: "/foodSec.jpg",
      description: "Supporting innovative solutions to ensure sustainable food production and distribution systems for growing populations."
    },
    {
      title: "Waste Management",
      imageUrl: "/wasteManage.jpg",
      description: "Implementing cutting-edge technologies for efficient waste management and recycling processes."
    },
    {
      title: "Renewable Energy",
      imageUrl: "/renewEnergy.jpg",
      description: "Investing in clean energy solutions to power a sustainable future and combat climate change."
    },
    {
      title: "Inclusive Fintech",
      imageUrl: "/inclFintech.jpg",
      description: "Providing accessible financial solutions through technology to empower entrepreneurs and communities."
    },
    {
      title: "Education",
      imageUrl: "/education.jpg",
      description: "Fostering innovative learning solutions to make quality education accessible to all."
    },
    {
      title: "Health Clinics",
      imageUrl: "/commHealth.jpg",
      description: "Supporting healthcare initiatives that bring quality medical services to underserved communities."
    },
    {
      title: "Sustainable Fashion",
      imageUrl: "/sustainable.jpg",
      description: "Promoting eco-friendly fashion practices and supporting sustainable textile innovations."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setVisibleCards((prev) => {
              const next = prev.length;
              if (next < interests.length) {
                return [...prev, next];
              } else {
                clearInterval(interval);
                return prev;
              }
            });
          }, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [interests.length]);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-12">
          OUR CORE INTERESTS
        </h1>

        {/* Mobile View */}
        <div className="md:hidden max-w-md mx-auto">
          {interests.map((interest, index) => (
            <InterestCard
              key={index}
              {...interest}
              isMobile={true}
              isActive={activeInterest === index}
              onClick={() => setActiveInterest(activeInterest === index ? null : index)}
            />
          ))}
        </div>

        {/* Desktop/Tablet View (Unchanged) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <InterestCard
              key={index}
              {...interest}
              visible={visibleCards.includes(index)}
              isMobile={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreInterestsSection;