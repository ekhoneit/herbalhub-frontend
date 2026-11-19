import Container from "@/components/Shared/Container";

export const metadata = {
  title: "Terms and Conditions | Herbalhub",
  description: "Read our terms, conditions, and store guidelines.",
};

export default function TermsPage() {
  return (
    <div className="py-12 bg-white font-sans text-slate-800">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Effective Date: November 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Authentic Wellness Offerings</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Herbalhub provides authentic organic herbal teas, nutritional supplements, and natural care products. Information presented on this website is for general educational and wellness purposes and should not be construed as medical advice. Customers with specific health conditions should consult licensed medical practitioners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Ordering & Payment</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Orders placed online are subject to verification via telephone or SMS prior to courier dispatch. We primarily operate on Cash on Delivery (COD) throughout all 64 districts in Bangladesh.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Shipping & Delivery</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Standard delivery takes 24–48 hours inside Dhaka metropolitan area and 48–72 hours across other divisions via express third-party courier partners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Return & Replacement Policy</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              In the unlikely event of receiving a damaged, expired, or incorrect package, customers are entitled to report within 48 hours with intact parcel packaging for an immediate replacement.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
