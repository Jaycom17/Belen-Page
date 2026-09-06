import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenDiagnostic?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre-belen');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'sobre-belen',
        'servicios',
        'como-funciona',
        'a-quien-ayudo',
        'preguntas-frecuentes',
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Belén', href: '#sobre-belen', id: 'sobre-belen' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Cómo funciona', href: '#como-funciona', id: 'como-funciona' },
    { name: 'A quién ayudo', href: '#a-quien-ayudo', id: 'a-quien-ayudo' },
    { name: 'Preguntas frecuentes', href: '#preguntas-frecuentes', id: 'preguntas-frecuentes' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FCF9EE]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
            : 'bg-[#FCF9EE]/90 backdrop-blur-sm shadow-[0_1px_4px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className="h-20 max-w-[75rem] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo with dark background */}
          <a
            href="#"
            className="flex items-center shrink-0 group focus:outline-none"
            aria-label="Belén Valencia Inicio"
          >
            <div className="relative w-13 h-13 transition-transform group-hover:scale-105">
              {/* Blurred glow behind */}
              <div className="absolute inset-[-6px] rounded-full bg-black/30 blur-md" />
              {/* Circle container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_12px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#333] via-[#1a1a1a] to-[#0a0a0a]" />
                <img
                  alt="Logotipo Belén Valencia"
                  className="relative h-full w-full object-contain p-1"
                  src="/logo.svg"
                />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-['Karla'] text-[14px] transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#18331F] font-bold'
                      : 'text-[#424842] hover:text-[#1C1C15] font-medium'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2E4A34] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Agenda tu consulta CTA */}
            <button
              id="header-booking-cta"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-[#A66A1E] text-[#FBF9F3] font-['Karla'] text-[14px] font-medium px-4 py-2 rounded-md hover:bg-[#8A5518] active:bg-[#683D00] transition-colors shadow-[0_1px_4px_rgba(0,0,0,0.06)] cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-1.5 hidden sm:inline" />
              <span className="hidden sm:inline">Agenda tu consulta</span>
              <span className="sm:hidden">Agendar</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú de navegación"
              className="xl:hidden p-2 text-[#2E4A34] hover:bg-[#EBE8DD] rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="xl:hidden border-t border-[#E5E3D8] bg-[#FCF9EE] px-4 py-4 shadow-lg flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-['Karla'] text-[15px] py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#E5E3D8] text-[#18331F] font-bold'
                    : 'text-[#424842] hover:bg-[#F1EEE3]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E5E3D8] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#A66A1E] text-white font-['Karla'] font-medium text-sm rounded-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Agenda tu consulta de orientación</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
