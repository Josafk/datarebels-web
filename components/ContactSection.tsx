"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const HUBSPOT_SCRIPT = "https://js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_FORM_ID = "hubspot-contact-form";
const HUBSPOT_PORTAL_ID = "22679661";
const HUBSPOT_FORM_GUID = "d28de33f-fcd1-47f1-9f2d-48b349c3d548";

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
      className="relative w-full py-16 lg:py-24 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background-form.png')" }}
    >
      <div className="max-w-6xl mx-auto w-full px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 text-left">
            
            <div className="flex flex-col">
              <div className="mb-8">
                <Image
                  src="/isologo.svg"
                  alt="Data Rebels"
                  width={60}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h2 className="font-title text-slate-900 text-3xl lg:text-4xl font-bold mb-6">
                Contact with us
              </h2>
              <p className="font-sans text-slate-600 text-base mb-10 max-w-md">
                Have questions or need assistance? Our dedicated team is here to support you—just reach out!
              </p>

              <div className="space-y-6">
                <a href="tel:8182626300" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-rose-500" />
                  <span className="font-medium text-left">81 8262 6300</span>
                </a>
                <a href="mailto:contact@datarebels.mx" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-rose-500" />
                  <span className="font-medium text-left">contact@datarebels.mx</span>
                </a>
                <div className="flex items-start gap-4 text-slate-700">
                  <MapPin className="w-5 h-5 mt-1 text-rose-500" />
                  <span className="font-medium text-left">Blvd. Díaz Ordaz 333, SPGG, N.L.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center min-h-[450px]">
              <div id={HUBSPOT_FORM_ID} className="w-full" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}