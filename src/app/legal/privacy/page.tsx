import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8">Data Protection</h1>
        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground font-light leading-relaxed">
          <p className="italic">Last updated: May 2024</p>
          
          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">1. General Information</h2>
            <p>
              The protection of your personal data is a particularly high priority for Serengeti Dreams. This privacy policy explains how we collect, use, and protect your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">2. Data Collection</h2>
            <p>
              We collect data that you provide to us directly, such as when you fill out our trip planner, contact form, or guest information form. This may include your name, email address, phone number, and passport details for booking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">3. Use of Data</h2>
            <p>
              Your data is primarily used to process your bookings, communicate with you regarding your trip, and ensure the safe logistics of your safari in Tanzania.
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">4. Your Rights</h2>
            <p>
              You have the right to request information about your personal data stored by us at any time. You also have the right to request the correction, blocking, or deletion of this data.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
