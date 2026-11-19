import Container from "@/components/Shared/Container";

export const metadata = {
  title: "Privacy Policy | Herbalhub",
  description: "Learn how Herbalhub collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-white font-sans text-slate-800">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: November 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              At Herbalhub (herbalhubbd.com), we respect your privacy and are committed to protecting personal data. When you place an order or interact with our store, we collect necessary contact information including your recipient name, delivery address, phone number, and optional email address exclusively for order processing, logistics dispatch, and customer support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Data</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Your details are used solely to confirm cash-on-delivery orders, print package shipping labels via our verified delivery partners (such as Steadfast / Pathao), and provide order status updates via SMS or phone. We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Analytics & Meta Pixel</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We utilize analytics tools and Meta Pixel strictly to analyze website browsing trends, catalog popularity, and conversion measurements. We do not pass unhashed personally identifiable health or sensitive medical records to advertising networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Data Security</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We employ industry-standard SSL encryption and secure database controls to safeguard customer records against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Our Privacy Team</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              If you have any questions or wish to update or delete your customer account information, please reach out to our support team at <a href="mailto:support@herbalhubbd.com" className="text-emerald-700 underline font-semibold">support@herbalhubbd.com</a> or call <span className="font-semibold text-slate-900">01901355995</span>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
