import React from 'react';

export default function DirectivePage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8">Package Travel Directive</h1>
        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground font-light leading-relaxed">
          <p>
            The combination of travel services offered to you is a package within the meaning of Directive (EU) 2015/2302.
          </p>
          
          <section className="bg-muted/30 p-8 rounded-3xl">
            <h2 className="text-secondary font-bold text-xl mb-4">Key Rights under the Directive</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>Travelers will receive all essential information about the package before concluding the package travel contract.</li>
              <li>There is always at least one trader who is liable for the proper performance of all the travel services included in the contract.</li>
              <li>Travelers are given an emergency telephone number or details of a contact point where they can get in touch with the organizer or the travel agent.</li>
              <li>Travelers may transfer the package to another person, from reasonable notice and possibly subject to additional costs.</li>
              <li>The price of the package may only be increased if specific costs rise and if expressly provided for in the contract.</li>
            </ul>
          </section>

          <p>
            For more information on your rights as a package traveler, please consult the official documentation provided by the European Union or contact our legal department.
          </p>
        </div>
      </div>
    </div>
  );
}
