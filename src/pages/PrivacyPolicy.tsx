const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <header className="space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Legal</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              We value your privacy. This page outlines how we collect, use, and protect your data when you use our services.
            </p>
          </header>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
              <p>Contact details (name, email, phone), order details, files you share for academic support, and technical data (IP, device, browser).</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">How We Use Information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To deliver academic support and customer service.</li>
                <li>To process payments securely and provide invoices/receipts.</li>
                <li>To improve our site performance and user experience.</li>
                <li>To send essential notifications about your orders.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Data Protection</h2>
              <p>We apply encryption in transit (HTTPS), role-based access for staff, and retention limits. We do not sell your data. You may request access, correction, or deletion of your personal data.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
              <p>We use cookies and similar technologies to improve site functionality, remember preferences, and gather analytics. You can control cookies via your browser settings.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p>If you have privacy questions or requests, contact us at <a className="text-accent underline" href="mailto:criticalwritinghub80@gmail.com">criticalwritinghub80@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;


