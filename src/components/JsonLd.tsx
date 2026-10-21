import { site, siteUrl } from "@/content/site";

/** LaundryOrDryCleaner structured data, using only the laundromat's own published details. */
export function LaundromatJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LaundryOrDryCleaner",
    name: site.name,
    url: siteUrl(),
    telephone: site.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.facebook, site.social.instagram],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: site.opens,
      closes: site.closes,
    },
    paymentAccepted: "Cash, Credit Card, Eftpos, Apple Pay",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
