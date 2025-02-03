import React from 'react';

const ImpactArea = ({ title, description, imageUrl }) => (
  <div className="flex flex-col items-center mx-auto w-11/12 md:w-8/12 mb-12 md:mb-0">
    <img src={imageUrl} alt={title} className="min-h-44 mb-4 w-full md:w-auto" />
    <h3 className="text-xl md:text-2xl font-medium mb-2 text-center">{title}</h3>
    <p className="text-center text-gray-600 text-sm md:text-base px-4 md:px-0">{description}</p>
  </div>
);

const CinchaImpactAreas = () => {
  const impactAreas = [
    {
      title: "COMMUNITY",
      description: "Cincha seeks to invest in social enterprises and community programs that provide economic opportunities, access to education and healthcare, and a higher quality of life for under-served populations",
      imageUrl: "/community.jpg"
    },
    {
      title: "TECHNOLOGY",
      description: "We identify and invest in visionary technology startups developing innovative solutions in fields like AI, robotics, biotech, and clean energy that have the potential to revolutionize industries and address pressing global issues.",
      imageUrl: "/technology.jpg"
    },
    {
      title: "CONSERVATION",
      description: "Cincha pursues investments in environmental solutions that promote sustainability, combat climate change, and enable responsible stewardships of our planet's precious natural resources.",
      imageUrl: "/conservation.jpg"
    }
  ];

  return (
    <div className="container mx-auto w-11/12 px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-5xl font-medium text-center mb-8 md:mb-12">
        CINCHA'S AVENUE OF IMPACT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {impactAreas.map((area, index) => (
          <ImpactArea key={index} {...area} />
        ))}
      </div>
    </div>
  );
};

export default CinchaImpactAreas;