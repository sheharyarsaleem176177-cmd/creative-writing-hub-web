const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <header className="space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Legal</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">
              Please review these terms before using our site or services. By placing an order, you agree to these terms.
            </p>
          </header>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Services</h2>
              <p>We provide academic support, research guidance, and tutoring. Our materials are for reference and learning; you remain responsible for complying with your institution’s policies.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Orders & Revisions</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide clear requirements and deadlines when ordering.</li>
                <li>Free revisions are offered within the agreed revision window for scope-aligned requests.</li>
                <li>Delivery times depend on project scope and timely client feedback.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Payments & Refunds</h2>
              <p>Payments are processed securely. Refunds, if any, are assessed on a case-by-case basis per project milestones and delivered work quality.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Academic Integrity</h2>
              <p>Our work must be used ethically and in accordance with your institution’s academic integrity rules. You agree not to misrepresent delivered materials as your own where prohibited.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, we are not liable for indirect or consequential damages. Total liability is limited to the amount paid for the applicable service.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p>For questions about these terms, contact us at <a className="text-accent underline" href="mailto:criticalwritinghub80@gmail.com">criticalwritinghub80@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;


