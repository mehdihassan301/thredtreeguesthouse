
import React from 'react';
import RoomsHeroSection from '../components/rooms/RoomsHeroSection';
import RoomCategoryGrid from '../components/rooms/RoomCategoryGrid';
import InRoomAmenitiesStrip from '../components/rooms/InRoomAmenitiesStrip';
import RoomComparisonTable from '../components/rooms/RoomComparisonTable';
import RoomHighlightsSection from '../components/rooms/RoomHighlightsSection';
import FinalCtaSection from '../components/FinalCtaSection';

interface RoomsPageProps {
  navigateTo: (page: string) => void;
}

const RoomsPage: React.FC<RoomsPageProps> = ({ navigateTo }) => {
  return (
    <>
      <RoomsHeroSection />
      <RoomCategoryGrid navigateTo={navigateTo} />
      <InRoomAmenitiesStrip />
      <RoomComparisonTable />
      <RoomHighlightsSection />
      <FinalCtaSection
        headline="Find Your Perfect Room Today"
        text="Choose comfort, space, and hospitality that match your travel needs."
        button1Text="Book Now"
        button1OnClick={() => navigateTo('contact')}
        button2Text="Contact for Availability"
        button2Href="tel:03258044401"
      />
    </>
  );
};

export default RoomsPage;