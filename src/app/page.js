'use client'
import React from 'react';
import VideoPage from '@/components/videoPage/videopage';
import WhatWeDoSection from '@/components/wwd/wwd';
import CinchaImpactAreas from '@/components/impact/impactsec';
import CoreInterestsSection from '@/components/interestsec/interestsec';
import GuidingValuesSection from '@/components/guidingSec/guidingSec';
import ContactInfoSection from '@/components/footer/footer';
import MeetTheTeam from '@/components/teamsec/teamsec';
import Navbar from '@/components/navbar/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <VideoPage />
      </div>
      <div id="about">
        <WhatWeDoSection />
      </div>
      <div id="impact">
        <CinchaImpactAreas />
      </div>
      <div id="interests">
        <CoreInterestsSection />
      </div>
      <div id="guiding">
        <GuidingValuesSection />
      </div>
      <div id="teams">
        <MeetTheTeam />
      </div>
      <div id="contact">
        <ContactInfoSection />
      </div>
    </>
  );
}
