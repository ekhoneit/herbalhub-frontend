import Container from "@/components/Shared/Container";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Leaf, Award } from "lucide-react";

export const metadata = {
  title: "About Us | Herbalhub",
  description: "Learn more about Herbalhub's mission to provide pure, authentic herbal wellness in Bangladesh.",
};

export default function AboutUsPage() {
  const highlights = [
    {
      icon: Leaf,
      title: "100% Pure & Botanical",
      desc: "Carefully sourced natural ingredients without harmful chemical additives or adulterants.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Controlled",
      desc: "Every product batch undergoes strict hygiene and purity verification before packing.",
    },
    {
      icon: Award,
      title: "Trusted by Thousands",
      desc: "Delivering nationwide wellness and daily health support across all 64 districts in Bangladesh.",
    },
    {
      icon: HeartHandshake,
      title: "Cash On Delivery",
      desc: "Inspect your delivery at your doorstep before paying with our risk-free COD policy.",
    },
  ];

  return (
    <div className="py-12 bg-white font-sans text-slate-800">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Our Journey & Purpose
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Empowering Health with Pure Nature
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Herbalhub was founded with a single mission: to bring authentic, high-quality botanical and herbal wellness formulations directly to the homes of Bangladeshi families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-sm transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{h.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
