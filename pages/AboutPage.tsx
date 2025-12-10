
import React from 'react';
import AboutHeroSection from '../components/about/AboutHeroSection';
import StorySection from '../components/about/StorySection';
import BrandValuesSection from '../components/about/BrandValuesSection';
import BranchNetworkSection from '../components/about/BranchNetworkSection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import LeadershipMessageSection from '../components/about/LeadershipMessageSection';
import HospitalityStandardsSection from '../components/about/HospitalityStandardsSection';
import GuestReviewsCarousel from '../components/GuestReviewsCarousel';
import FinalCtaSection from '../components/FinalCtaSection';

interface AboutPageProps {
  navigateTo: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <>
      <AboutHeroSection />
      <StorySection />
      <BrandValuesSection />
      <BranchNetworkSection navigateTo={navigateTo} />
      <MissionVisionSection />
      <LeadershipMessageSection />
      <HospitalityStandardsSection />
      <GuestReviewsCarousel />
      <FinalCtaSection
        headline="Your Comfort, Our Commitment."
        text="Explore our rooms and branches to find the perfect stay for your next visit to Karachi."
        button1Text="View Rooms"
        button1OnClick={() => navigateTo('rooms')}
        button2Text="Contact Us"
        button2OnClick={() => navigateTo('contact')}
      />
    </>
  );
};

export default AboutPage;
