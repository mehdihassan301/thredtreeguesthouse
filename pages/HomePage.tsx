
import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AboutSection from '../components/AboutSection';
import RoomsSection from '../components/RoomsSection';
import ExperienceSection from '../components/ExperienceSection';
import AmenitiesFacilitiesSection from '../components/AmenitiesFacilitiesSection';
import BranchesOverviewSection from '../components/BranchesOverviewSection';
import GalleryPreviewSection from '../components/GalleryPreviewSection';
import GuestReviewsCarousel from '../components/GuestReviewsCarousel';
import FinalCtaSection from '../components/FinalCtaSection';

interface HomePageProps {
  navigateTo: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <>
      <Hero navigateTo={navigateTo} />
      <WhyChooseUsSection navigateTo={navigateTo} />
      <AboutSection />
      <RoomsSection navigateTo={navigateTo} />
      <ExperienceSection />
      <AmenitiesFacilitiesSection />
      <GalleryPreviewSection navigateTo={navigateTo} />
      <BranchesOverviewSection navigateTo={navigateTo} />
      <GuestReviewsCarousel />
      <FinalCtaSection 
        button1OnClick={() => navigateTo('rooms')}
        button2OnClick={() => navigateTo('contact')}
      />
    </>
  );
};

export default HomePage;
