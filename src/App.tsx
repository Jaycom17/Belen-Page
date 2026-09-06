/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ProjectDiagnosticModal } from './components/ProjectDiagnosticModal';
import { FaqJsonLd } from './components/FaqJsonLd';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('orientacion');
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedServiceId('orientacion');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9EE] text-[#1C1C15] font-['Karla',sans-serif] selection:bg-[#DCE6DD] selection:text-[#1E3024]">
      <FaqJsonLd />

      {/* Header */}
      <Header
        onOpenBooking={handleOpenGeneralBooking}
        onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#FCF9EE] flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={handleOpenGeneralBooking}
          onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
        />

        {/* 2. Sobre Belén Section */}
        <AboutSection />

        {/* 3. Portafolio de Servicios Section */}
        <ServicesSection
          onSelectServiceForBooking={handleOpenBookingWithService}
          onOpenDiagnostic={() => setDiagnosticModalOpen(true)}
        />

        {/* 4. Cómo Funciona Section */}
        <HowItWorksSection />

        {/* 5. A Quién Ayudo Section */}
        <TargetAudienceSection />

        {/* 6. Por Qué Trabajar Conmigo Section */}
        <WhyWorkWithMeSection />

        {/* 7. Preguntas Frecuentes Section */}
        <FaqSection onOpenBooking={handleOpenGeneralBooking} />

        {/* 9. Contacto & CTA Final Section */}
        <CtaSection onOpenBooking={handleOpenGeneralBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenGeneralBooking} />

      {/* Interactive Booking Scheduler Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialServiceId={selectedServiceId}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Interactive 3-Question Project Diagnostic Modal */}
      <ProjectDiagnosticModal
        isOpen={diagnosticModalOpen}
        onClose={() => setDiagnosticModalOpen(false)}
        onSelectServiceForBooking={(serviceId) => {
          setDiagnosticModalOpen(false);
          handleOpenBookingWithService(serviceId);
        }}
      />
    </div>
  );
}
