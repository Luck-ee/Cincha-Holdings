import React from 'react';
import { Amatic_SC } from "next/font/google";

const amatic700 = Amatic_SC({ weight: '400', subsets: ['latin'] });

function VideoPage() {
  return (
    <div className='relative h-screen sm:h-[65vh] lg:h-screen overflow-hidden'>
      {/* Video Background */}
      <video 
        className="absolute top-28 left-0 w-full h-full object-cover filter blur-0" 
        autoPlay 
        loop 
        muted 
      >
        <source src="/videos/horsevid.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-10 items-center justify-center h-full px-4 md:px-0">
        <h1 className="text-4xl md:text-7xl font-semibold text-rose-950 text-center">
          A HUMAN LOOK FIRST
        </h1>
        <h1 className={`${amatic700.className} text-2xl md:text-3xl text-red-950 z-10 text-center`}>
          INVESTING IN OUR FUTURE.
        </h1>
      </div>
    </div>
  );
}

export default VideoPage;