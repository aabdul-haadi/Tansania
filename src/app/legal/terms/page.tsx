import React from 'react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground font-light leading-relaxed">
          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">1. Scope of Application</h2>
            <p>
              These general terms and conditions apply to all travel services and contracts between Serengeti Dreams and our valued travelers. By booking a trip with us, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">2. Conclusion of Contract</h2>
            <p>
              With your travel registration, you offer us the conclusion of a binding travel contract. The contract is concluded upon our written confirmation of the booking.
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">3. Payment Terms</h2>
            <p>
              A deposit of 20% of the travel price is due upon receipt of the booking confirmation. The remaining amount must be paid at least 30 days before the start of the trip.
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">4. Cancellation and Rebooking</h2>
            <p>
              You may withdraw from the trip at any time before the start of the journey. Cancellation fees apply based on the proximity to the departure date. We strongly recommend travel cancellation insurance.
            </p>
          </section>

          <section>
            <h2 className="text-secondary font-bold text-xl mb-4">5. Liability</h2>
            <p>
              We are liable within the scope of the duty of care of a prudent businessman for the conscientious preparation of the trip and the proper provision of the agreed services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
