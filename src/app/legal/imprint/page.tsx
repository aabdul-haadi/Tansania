import React from 'react';

export default function ImprintPage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8">Imprint</h1>
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
          <section>
            <h2 className="text-secondary font-bold text-xl mb-2">Company Information</h2>
            <p>
              Serengeti Dreams / Tanzania Travel Adventure<br />
              123 Zamalek St<br />
              Cairo, Egypt
            </p>
          </section>
          
          <section>
            <h2 className="text-secondary font-bold text-xl mb-2">Represented By</h2>
            <p>Samson Kyashama (Founder)</p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-2">Contact</h2>
            <p>
              Phone: +20 123 456 7890<br />
              Email: concierge@serengetidreams.com
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-2">Disclaimer</h2>
            <p>
              The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
