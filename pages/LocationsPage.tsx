
import React from 'react';
import LocationsHeroSection from '../components/locations/LocationsHeroSection';
import NearbyAreasGrid from '../components/locations/NearbyAreasGrid';
import BranchOverviewSection from '../components/locations/BranchOverviewSection';
import LocationHighlightsStrip from '../components/locations/LocationHighlightsStrip';
import FinalCtaSection from '../components/FinalCtaSection';

interface LocationsPageProps {
  navigateTo: (page: string) => void;
}

const LocationsPage: React.FC<LocationsPageProps> = ({ navigateTo }) => {
  return (
    <>
      <LocationsHeroSection navigateTo={navigateTo} />
      <NearbyAreasGrid />
      <BranchOverviewSection />
      <LocationHighlightsStrip />
      <FinalCtaSection
        headline="Book Your Stay at the Most Convenient Locations in Karachi"
        text="Experience comfort, luxury, and convenience at any of our four prime guest houses."
        button1Text="Book Now"
        button1OnClick={() => navigateTo('contact')}
        button2Text="Contact Us"
        button2Href="tel:03258044401"
      />
    </>
  );
};

export default LocationsPage;
