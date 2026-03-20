import React from 'react';

interface JsonLdProps {
  data: any;
}

/**
 * A utility component to inject JSON-LD structured data into the <head>.
 * Use this for Organization, Product, Article, etc.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
