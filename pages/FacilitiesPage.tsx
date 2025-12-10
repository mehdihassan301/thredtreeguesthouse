
import React from 'react';
import FacilitiesHeroSection from '../components/facilities/FacilitiesHeroSection';
import FacilitiesGrid from '../components/facilities/FacilitiesGrid';
import FeatureHighlightsStrip from '../components/facilities/FeatureHighlightsStrip';
import FinalCtaSection from '../components/FinalCtaSection';

interface FacilitiesPageProps {
  navigateTo: (page: string) => void;
}

const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ navigateTo }) => {
  return (
    <>
      <FacilitiesHeroSection />
      <FacilitiesGrid />
      <FeatureHighlightsStrip />
      <FinalCtaSection
        headline="Experience Comfort & Convenience at Every Step"
        text="Our facilities are designed to make your stay seamless, relaxing, and luxurious."
        button1Text="Explore Rooms"
        button1OnClick={() => navigateTo('rooms')}
        button2Text="Book Now"
        button2OnClick={() => navigateTo('contact')}
      />
    </>
  );
};

export default FacilitiesPage;