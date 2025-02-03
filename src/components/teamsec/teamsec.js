import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Bob Brown',
    role: 'Creative Leader',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  },
  {
    name: 'Mary Smith',
    role: 'Sales Manager',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  },
  {
    name: 'Jonh Rich',
    role: 'Manager',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  },
  {
    name: 'Nat Reynolds',
    role: 'Chief Accountant',
    description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: "/profimg.jpg"
  }
];

// Mobile Team Member Card
const MobileTeamMember = ({ name, role, image }) => (
  <div className="flex items-center p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
    <div className="relative w-14 h-14 flex-shrink-0">
      <Image 
        src={image} 
        alt={name} 
        fill
        className="object-cover rounded-full"
        sizes="56px"
      />
    </div>
    <div className="ml-4 flex-grow">
      <h3 className="text-lg font-semibold text-indigo-900">{name}</h3>
      <p className="text-sm text-indigo-600">{role}</p>
    </div>
  </div>
);

// Desktop/Tablet Team Member Card
const DesktopTeamMember = ({ name, role, description, image }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg transition-shadow duration-300">
    <div className="w-24 h-24 relative flex-shrink-0">
      <Image 
        src={image} 
        alt={name} 
        fill
        className="rounded-full object-cover" 
        sizes="96px"
      />
    </div>
    <div className="text-center sm:text-left flex-grow">
      <h3 className="text-xl font-semibold text-indigo-900 mb-1">{name}</h3>
      <p className="text-indigo-600 mb-3 text-sm">{role}</p>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex justify-center sm:justify-start space-x-4">
        <Facebook className="text-indigo-600 hover:text-indigo-800 cursor-pointer transition-colors" size={20} />
        <Twitter className="text-indigo-600 hover:text-indigo-800 cursor-pointer transition-colors" size={20} />
        <Instagram className="text-indigo-600 hover:text-indigo-800 cursor-pointer transition-colors" size={20} />
      </div>
    </div>
  </div>
);

const MeetTheTeam = () => (
  <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Meet The Team
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-3 max-w-md mx-auto">
        {teamMembers.map((member, index) => (
          <MobileTeamMember key={index} {...member} />
        ))}
      </div>

      {/* Desktop/Tablet View */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <DesktopTeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </div>
);

export default MeetTheTeam;