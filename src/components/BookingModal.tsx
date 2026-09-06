import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Video, MapPin, Send, ArrowLeft } from 'lucide-react';
import { SERVICES } from '../data/content';
import { BookingData } from '../types';

interface BookingModalProps {
  initialServiceId?: string;
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_TIMES = [
  '09:00 AM',
  '10:30 AM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

// Helper to generate dates for next 7 business days (skipping Sundays)
const getAvailableDates = (): string[] => {
  const dates: string[] = [];
  const d = new Date();
  while (dates.length < 7) {
    d.setDate(d.getDate() + 1);
    // skip Sundays
    if (d.getDay() !== 0) {
      dates.push(d.toISOString().split('T')[0]);
    }
  }
  return dates;
};

export const BookingModal: React.FC<BookingModalProps> = ({
  initialServiceId = 'orientacion',
  isOpen,
  onClose,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [modality, setModality] = useState<'remote' | 'in-person'>('remote');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('09:00 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    organizationType: 'Emprendimiento',
    projectSummary: '',
  });
  const [step, setStep] = useState<1 | 2>(1);

  // Sync initial service when opened or when selected from outside
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Reset step if closed
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  const availableDates = getAvailableDates();

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const availableTimes = AVAILABLE_TIMES;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const booking: BookingData = {
      serviceId: currentService.id,
      serviceTitle: currentService.title,
      modality,
      date: selectedDate || availableDates[0],
      time: selectedTime,
      fullName: formData.fullName,
      email: '',
      phone: formData.phone,
      organizationType: formData.organizationType,
      projectSummary: formData.projectSummary,
    };
    const whatsappUrl = getWhatsAppBookingUrl(booking);
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const getWhatsAppBookingUrl = (booking: BookingData) => {
    const modality = booking.modality === 'remote' ? 'Virtual' : 'Presencial';
    const projectInfo = booking.projectSummary
      ? `%0A%0A*Sobre mi proyecto:*%0A${encodeURIComponent(booking.projectSummary)}`
      : '';

    const text = `Hola Belén, soy *${booking.fullName}* y estoy interesado/a en la *${booking.serviceTitle}*%0A` +
      `%0AMe comunico por este medio para solicitar una cita.%0A` +
      `%0A*Datos de la solicitud:*%0A` +
      `%F0%9F%93%85 *Fecha:* ${booking.date}%0A` +
      `%F0%9F%93%86 *Hora:* ${booking.time}%0A` +
      `%F0%9F%93%90 *Modalidad:* ${modality}%0A` +
      `%F0%9F%8F%A2 *Tipo de proyecto:* ${booking.organizationType}` +
      projectInfo;

    return `https://wa.me/573246026211?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1E3024]/70 backdrop-blur-xs p-2.5 sm:p-4"
      onClick={onClose}
    >
      <div className="min-h-full flex justify-center py-2 sm:py-6">
        <div
          className="bg-[#FBF9F3] border border-[#DCE6DD] rounded-lg max-w-xl w-full p-4 sm:p-6 shadow-2xl relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 text-[#57564C] hover:text-[#18331F] p-1.5 rounded-full hover:bg-[#EBE8DD] transition-colors z-20 cursor-pointer"
            aria-label="Cerrar modal de agendamiento"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Stepper Header */}
          <div className="flex items-center gap-2.5 mb-3 border-b border-[#DCE6DD] pb-2.5 pr-8">
            <div className="w-7 h-7 rounded-full bg-[#2E4A34] text-white flex items-center justify-center font-bold text-xs shrink-0">
              {step}
            </div>
            <div>
              <h3 className="font-['Sora'] font-semibold text-base sm:text-lg text-[#18331F] leading-tight">
                {step === 1 && 'Selecciona tu servicio y modalidad'}
                {step === 2 && 'Tus datos e información del proyecto'}
              </h3>
              <p className="font-['Karla'] text-[11px] text-[#57564C] leading-tight">
                {step === 1 && 'Elige la línea de asesoría que mejor se adapta a tu etapa'}
                {step === 2 && 'Completa los detalles para enviar tu solicitud por WhatsApp'}
              </p>
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-3">
              {/* Service selector */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="font-['Sora'] text-[11px] font-bold text-[#18331F] uppercase tracking-wider">
                    1. Servicio requerido
                  </label>
                  <span className="text-[10px] text-[#57564C]">Tarifa transparente</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-2 sm:p-2.5 text-left rounded-md border transition-all text-xs cursor-pointer ${
                        selectedServiceId === srv.id
                          ? 'border-[#2E4A34] bg-[#F5F1E6] ring-1 ring-[#2E4A34]'
                          : 'border-[#DCE6DD] bg-white hover:border-[#4A6B4F]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1 mb-0.5">
                        <span className="font-bold text-[#18331F] font-['Sora'] text-xs leading-tight line-clamp-1">
                          {srv.title}
                        </span>
                        <span className="text-[#A66A1E] font-bold font-['Sora'] text-xs shrink-0">
                          {srv.price}
                        </span>
                      </div>
                      <div className="text-[#57564C] text-[10px] leading-tight truncate">
                        {srv.duration} • {srv.tag}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Modality selector */}
              <div className="pt-0.5">
                <label className="font-['Sora'] text-[11px] font-bold text-[#18331F] uppercase tracking-wider block mb-1.5">
                  2. Modalidad de atención
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setModality('remote')}
                    className={`p-2 rounded-md border text-left flex items-center gap-2 text-xs transition-colors cursor-pointer ${
                      modality === 'remote'
                        ? 'border-[#2E4A34] bg-[#F5F1E6] ring-1 ring-[#2E4A34]'
                        : 'border-[#DCE6DD] bg-white hover:border-[#4A6B4F]/50'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#2E4A34] shrink-0" />
                    <div className="leading-tight">
                      <strong className="block text-[#18331F] text-xs">Virtual / Remota</strong>
                      <span className="text-[#57564C] text-[10px]">Google Meet o Zoom</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModality('in-person')}
                    className={`p-2 rounded-md border text-left flex items-center gap-2 text-xs transition-colors cursor-pointer ${
                      modality === 'in-person'
                        ? 'border-[#2E4A34] bg-[#F5F1E6] ring-1 ring-[#2E4A34]'
                        : 'border-[#DCE6DD] bg-white hover:border-[#4A6B4F]/50'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#A66A1E] shrink-0" />
                    <div className="leading-tight">
                      <strong className="block text-[#18331F] text-xs">Presencial</strong>
                      <span className="text-[#57564C] text-[10px]">Despacho previa cita</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="pt-0.5 grid grid-cols-2 gap-2.5">
                <div>
                  <label className="font-['Sora'] text-[11px] font-bold text-[#18331F] uppercase tracking-wider block mb-1">
                    Fecha tentativa
                  </label>
                  <select
                    value={selectedDate || availableDates[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2 text-xs bg-white border border-[#57564C]/30 rounded text-[#26261F] focus:border-[#2E4A34] focus:outline-none"
                  >
                    {availableDates.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-['Sora'] text-[11px] font-bold text-[#18331F] uppercase tracking-wider block mb-1">
                    Franja horaria
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2 text-xs bg-white border border-[#57564C]/30 rounded text-[#26261F] focus:border-[#2E4A34] focus:outline-none"
                  >
                    {availableTimes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 1 Actions */}
              <div className="pt-2.5 border-t border-[#DCE6DD] flex justify-between items-center">
                <div className="text-xs text-[#57564C]">
                  Inversión estimada:{' '}
                  <strong className="text-[#A66A1E] text-sm font-['Sora']">{currentService.price}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 bg-[#A66A1E] hover:bg-[#8A5518] text-white font-['Karla'] text-xs font-semibold rounded shadow-xs transition-colors cursor-pointer"
                >
                  Continuar con mis datos
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="p-2 bg-[#F5F1E6] rounded border border-[#E5E3D8] text-xs flex justify-between items-center">
                <div className="truncate pr-2">
                  <span className="text-[#57564C]">Servicio:</span>{' '}
                  <strong className="text-[#18331F]">{currentService.title}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[#A66A1E] hover:underline font-semibold flex items-center gap-1 text-[11px] shrink-0 cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" /> Cambiar
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="font-['Karla'] text-xs font-semibold text-[#26261F] block mb-1">
                    Nombre completo *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Ej: Clara Morales"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2 text-xs bg-white border border-[#57564C]/30 rounded text-[#26261F] focus:border-[#2E4A34] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-['Karla'] text-xs font-semibold text-[#26261F] block mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2 text-xs bg-white border border-[#57564C]/30 rounded text-[#26261F] focus:border-[#2E4A34] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-['Karla'] text-xs font-semibold text-[#26261F] block mb-1">
                  Tipo de entidad / proyecto
                </label>
                <select
                  value={formData.organizationType}
                  onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                  className="w-full p-2 text-xs bg-white border border-[#57564C]/30 rounded text-[#26261F] focus:border-[#2E4A34] focus:outline-none"
                >
                  <option value="Emprendimiento productivo">Emprendimiento o negocio</option>
                  <option value="Organización comunitaria o social">Organización comunitaria o social</option>
                  <option value="Club u organización deportiva">Club deportivo</option>
                  <option value="Fundación o asociación">Fundación o asociación</option>
                  <option value="Proyecto universitario o de grado">Proyecto universitario / Tesis</option>
                  <option value="Iniciativa individual / Idea">Iniciativa individual / Idea</option>
                </select>
              </div>

              <div>
                <label className="font-['Karla'] text-xs font-semibold text-[#26261F] block mb-1">
                  Cuéntame brevemente de qué trata tu idea o proyecto
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej: Tenemos una escuela deportiva y queremos postular a una convocatoria..."
                  value={formData.projectSummary}
                  onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                  className="w-full p-2 text-xs bg-white border border-[#57564C]/30 rounded text-[#26261F] focus:border-[#2E4A34] focus:outline-none leading-relaxed resize-none"
                />
              </div>

              <div className="pt-2 border-t border-[#DCE6DD] flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-3 py-1.5 border border-[#57564C]/30 text-[#57564C] font-['Karla'] text-xs font-semibold rounded hover:bg-[#EBE8DD] cursor-pointer"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2E4A34] hover:bg-[#1E3024] text-white font-['Karla'] text-xs font-semibold rounded shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirmar solicitud por WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
