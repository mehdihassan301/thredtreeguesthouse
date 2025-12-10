
import React from 'react';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import BookingOptionsSection from '../components/contact/BookingOptionsSection';

interface ContactPageProps {
  navigateTo: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigateTo }) => {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoCards />
      <BookingOptionsSection />
    </>
  );
};

export default ContactPage;
