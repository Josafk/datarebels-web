"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const HUBSPOT_SCRIPT = "https://js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_FORM_ID = "hubspot-contact-form";

const HUBSPOT_PORTAL_ID = "22679661";
const HUBSPOT_FORM_GUID = "d28de33f-fcd1-47f1-9f2d-48b349c3d548";

export function ContactSection() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const script = document.createElement("script");
    script.src = HUBSPOT_SCRIPT;
    script.async = true;
    script.onload = () => {
      // Usamos (window as any) para evitar errores de tipado que rompen el build
      if (typeof window !== "undefined" && (window as any).hbspt) {
        const hbspt = (window as any).hbspt;
        hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_GUID,
          target: `#${HUBSPOT_FORM_ID}`,
          cssClass: "hubspot-contact-form-styled",
          submitButtonClass: "hubspot-submit-btn",
          submitText: "Let's talk >",
        });

        timer = setTimeout(() => {
          const container = document.getElementById(HUBSPOT_FORM_ID);
          if (container && container.querySelector(".hs-form")) {
            setShowPlaceholder(false);
          }
        }, 2000);
      }
    };
    document.body.appendChild(script);
    return () => {
      if (timer) clearTimeout(timer);
      const existing = document.querySelector(`script[src="${HUBSPOT_SCRIPT}"]`);
      if (existing && existing.parentNode) {
  existing.parentNode.removeChild(existing);
}
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full py-12 lg:py-16 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Background-form.png')" }}
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto w-full px-6 md:px-10 lg:px-8">
        <div className="bg-white rounded-[3rem] p-6 sm:p-10 md:p-8 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-16">
            {/* Columna Izquierda - Información */}
            <div className="flex flex-col">
              <div className="mb-8">
                <Image
                  src="/Isologo.svg"
                  alt="Data Rebels"
                  width={48}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="font-title text-slate-900 text-[24px] leading-[26px] lg:text-[36px] lg:leading-tight font-semibold tracking-normal mb-6">
                Contact with us
              </h2>
              <p className="font-sans text-slate-600 text-[14px] leading-[18px] mb-8 lg:mb-10 max-w-md">
                Have questions or need assistance? Our dedicated team is here to support you—just reach out!
              </p>

              {/* Desktop: datos de contacto junto al bloque de info */}
              <div className="hidden lg:block space-y-6">
                <a
                  href="tel:8182626300"
                  className="flex items-center gap-3 font-sans text-slate-700 text-[15px] hover:text-slate-900 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-rose-500" aria-hidden />
                  <span>81 8262 6300</span>
                </a>
                <a
                  href="mailto:contact@datarebels.mx"
                  className="flex items-center gap-3 font-sans text-slate-700 text-[15px] hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-rose-500" aria-hidden />
                  <span>contact@datarebels.mx</span>
                </a>
                <div className="flex items-start gap-3 font-sans text-slate-700 text-[15px]">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" aria-hidden />
                  <span>Blvd. Díaz Ordaz 333, SPGG, N.L.</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Formulario HubSpot */}
            <div ref={formContainerRef} className="flex flex-col relative">
              {/* Placeholder visual (maqueta) - se oculta cuando HubSpot carga el form real */}
              {showPlaceholder && (
                <div className="absolute inset-0 hubspot-form-placeholder">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="ph-name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                      <input id="ph-name" type="text" placeholder="Your name" readOnly className="w-full px-4 py-3 text-[15px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="ph-company" className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                      <input id="ph-company" type="text" placeholder="Your company" readOnly className="w-full px-4 py-3 text-[15px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="ph-email" className="block text-sm font-medium text-slate-700 mb-1.5">E-mail</label>
                      <input id="ph-email" type="email" placeholder="your@email.com" readOnly className="w-full px-4 py-3 text-[15px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="ph-message" className="block text-sm font-medium text-slate-700 mb-1.5">How can we help?</label>
                      <textarea id="ph-message" placeholder="Tell us about your needs..." readOnly rows={4} className="w-full px-4 py-3 text-[15px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl resize-y min-h-[120px]" />
                    </div>
                    <label className="flex items-start gap-3 cursor-default mt-4 mb-5">
                      <input type="checkbox" readOnly className="mt-1 accent-fuchsia-500" />
                      <span className="text-sm text-slate-600">I accept the <span className="text-fuchsia-500 font-medium">Terms</span></span>
                    </label>
                    <button type="button" disabled className="w-full py-3.5 px-6 rounded-full bg-blue-main text-white font-semibold text-[16px] flex items-center justify-center gap-2">
                      Let&apos;s talk →
                    </button>
                  </div>
                </div>
              )}
              <div id={HUBSPOT_FORM_ID} className="hubspot-form-wrapper min-h-[320px]" />
            </div>

            {/* Mobile/Tablet: datos de contacto debajo del formulario */}
            <div className="lg:hidden space-y-4 -mt-2">
              <a
                href="tel:8182626300"
                className="flex items-center gap-3 font-sans text-slate-700 text-[15px] hover:text-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-rose-500" aria-hidden />
                <span>81 8262 6300</span>
              </a>
              <a
                href="mailto:contact@datarebels.mx"
                className="flex items-center gap-3 font-sans text-slate-700 text-[15px] hover:text-slate-900 transition-colors break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-rose-500" aria-hidden />
                <span>contact@datarebels.mx</span>
              </a>
              <div className="flex items-start gap-3 font-sans text-slate-700 text-[15px]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-500" aria-hidden />
                <span>Blvd. Díaz Ordaz 333, SPGG, N.L.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
