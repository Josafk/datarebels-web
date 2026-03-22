"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const HUBSPOT_SCRIPT = "https://js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_FORM_ID = "hubspot-contact-form";
const HUBSPOT_PORTAL_ID = "22679661";
const HUBSPOT_FORM_GUID = "d28de33f-fcd1-47f1-9f2d-48b349c3d548";

const contactItems = [
  { href: "tel:8182626300", icon: Phone, label: "81 8262 6300" },
  { href: "mailto:contact@datarebels.mx", icon: Mail, label: "contact@datarebels.mx" },
  { href: undefined, icon: MapPin, label: "Blvd. Díaz Ordaz 333, SPGG, N.L." },
];

export function ContactSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = HUBSPOT_SCRIPT;
    script.async = true;
    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_GUID,
          target: `#${HUBSPOT_FORM_ID}`,
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      const existing = document.querySelector(`script[src="${HUBSPOT_SCRIPT}"]`);
      if (existing?.parentNode) existing.parentNode.removeChild(existing);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full py-10 lg:py-12 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background-form.png')" }}
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto w-full px-5 md:px-10 lg:px-8">
        <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 lg:px-16 lg:py-10 shadow-2xl">

          {/* Grid principal */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-[120px] text-left">

            {/* Columna izquierda */}
            <div className="flex flex-col justify-between">
              <Image
                src="/isologo.svg"
                alt="Data Rebels"
                width={56}
                height={46}
                className="object-contain mb-6"
              />
              <h2 className="font-title text-slate-900 text-[28px] md:text-[32px] leading-[34px] font-semibold mb-4">
                Contact with us
              </h2>
              <p className="font-sans text-slate-500 text-[14px] md:text-[16px] leading-[22px] mb-6 max-w-xs">
                Have questions or need assistance? Our dedicated team is here to support you—just reach out!
              </p>

              {/* Info contacto — solo desktop */}
              <div className="hidden lg:flex flex-col gap-4 mt-6">
                {contactItems.map(({ href, icon: Icon, label }) =>
                  href ? (
                    <a key={label} href={href} className="flex items-center gap-3 text-rose-500 hover:text-rose-600 transition-colors">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-sans text-[14px] font-medium">{label}</span>
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 text-rose-500">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-sans text-[14px] font-medium">{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Columna derecha — formulario HubSpot */}
            <div className="w-full">
              <div id={HUBSPOT_FORM_ID} className="w-full" />
            </div>
          </div>

          {/* Info contacto — mobile/tablet (fila horizontal debajo) */}
          <div className="lg:hidden flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-6 pt-6 border-t border-slate-100">
            {contactItems.map(({ href, icon: Icon, label }) =>
              href ? (
                <a key={label} href={href} className="flex items-center gap-2 text-rose-500 hover:text-rose-600 transition-colors">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-sans text-[13px] font-medium">{label}</span>
                </a>
              ) : (
                <div key={label} className="flex items-center gap-2 text-rose-500">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-sans text-[13px] font-medium">{label}</span>
                </div>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
