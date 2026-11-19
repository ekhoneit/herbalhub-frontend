import Container from "@/components/Shared/Container";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Herbalhub",
  description: "Get in touch with Herbalhub customer care and headquarters in Dhaka.",
};

export default function ContactUsPage() {
  return (
    <div className="py-12 bg-white font-sans text-slate-800">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact Herbalhub
            </h1>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              Have questions regarding our natural wellness products or an ongoing order? Reach out to our dedicated support representatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                Customer Care & Hotline
              </h2>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-700 shrink-0" />
                  <a href="tel:01901355995" className="font-semibold text-slate-900 hover:text-emerald-700">
                    01901355995
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-700 shrink-0" />
                  <a href="mailto:support@herbalhubbd.com" className="hover:text-emerald-700">
                    support@herbalhubbd.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-emerald-700 shrink-0" />
                  <span>Saturday – Thursday (9:00 AM – 9:00 PM)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                Headquarters & Dispatch Center
              </h2>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    Jigatola, Dhanmondi, Dhaka – 1209, Bangladesh
                  </span>
                </div>
                <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                  Nationwide home delivery available across all 64 districts in Bangladesh with verified cash on delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
