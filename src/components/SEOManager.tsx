import React, { useEffect } from 'react';
import { BUSINESS_INFO, SERVICES, SERVICE_CITIES, FAQS } from '../data.ts';

interface SEOManagerProps {
  activeTab: string;
}

export default function SEOManager({ activeTab }: SEOManagerProps) {
  useEffect(() => {
    // Dynamically update document title & meta description for advanced SEO!
    let title = "McKinney Plumbing Services LLC | Licensed Plumber Peach Bottom PA";
    let desc = "Professional, honest plumbing services in Southern PA & Northern MD. 24/7 emergency leak dispatch, upfront pricing, drain cleaning, and water heater swapping.";

    if (activeTab === 'services') {
      title = "Expert Plumbing Services | Drain Cleaning, Water Heaters, Well Pumps";
      desc = "Affordable flat-rate plumbing services by McKinney Plumbing. Specializing in drain snaking, vertical water heaters, leak repairs, and flexible PEX piping.";
    } else if (activeTab === 'areas') {
      title = "Local Plumber Service Areas | Peach Bottom, Quarryville, Oxford PA";
      desc = "Check immediate dispatch boundaries for McKinney Plumbing. Servicing Lancaster County, York County, Chester County PA, and Cecil/Harford Counties MD.";
    } else if (activeTab === 'about') {
      title = "About McKinney Plumbing Services | Family-Owned, Fully Insured";
      desc = "Learn about McKinney Plumbing's dedication to high-efficiency repairs, honest upfront quotes, and deep roots in Southern PA rural communities.";
    } else if (activeTab === 'faqs') {
      title = "FAQs & Troubleshooting Guide | McKinney Plumbing Services LLC";
      desc = "Get expert answers to well system failures, low water pressure, clogged lines, and when to call a professional emergency plumber.";
    } else if (activeTab === 'contact') {
      title = "Contact Emergency Plumber | Dispatch Line (000) 000-0000";
      desc = "Reach out to McKinney Plumbing for free estimates and 24/7 emergency dispatch. Located at 508 Little Britain Church Rd, Peach Bottom PA.";
    }

    document.title = title;
    
    // Update or create meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);
  }, [activeTab]);

  // Generate dynamic JSON-LD based on current active tab
  const getJsonLdSchema = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://mckinneyplumbing.com';
    
    // Base LocalBusiness Local SEO configuration
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "PlumbingService",
      "id": `${origin}/#localbusiness`,
      "name": BUSINESS_INFO.legalName,
      "alternateName": BUSINESS_INFO.shortName,
      "url": origin,
      "logo": `${origin}/src/assets/images/plumbing_work_hero_1779484799974.png`, // Fallback or direct reference
      "image": [
        `${origin}/src/assets/images/plumbing_work_hero_1779484799974.png`,
        `${origin}/src/assets/images/plumbing_work_hero_1779484799974.webp`
      ],
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "508 Little Britain Church Road",
        "addressLocality": "Peach Bottom",
        "addressRegion": "PA",
        "postalCode": "17563",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.7578,
        "longitude": -76.1685 // Precise Coordinates for Peach Bottom / Little Britain
      },
      "areaServed": SERVICE_CITIES.map(city => ({
        "@type": "AdministrativeArea",
        "name": `${city.name}, ${city.state}`
      })),
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": BUSINESS_INFO.phone,
        "contactType": "customer service",
        "areaServed": ["US-PA", "US-MD"],
        "availableLanguage": "en"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "ratingCount": "24",
        "reviewCount": "24"
      }
    };

    if (activeTab === 'services') {
      // Dynamic Services Offer schema
      const servicesOffersSchema = SERVICES.map(srv => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Plumbing",
        "name": srv.title,
        "description": srv.longDesc,
        "provider": {
          "@type": "PlumbingService",
          "name": BUSINESS_INFO.shortName,
          "telephone": BUSINESS_INFO.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "508 Little Britain Church Road",
            "addressLocality": "Peach Bottom",
            "addressRegion": "PA",
            "postalCode": "17563",
            "addressCountry": "US"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "eligibleRegion": SERVICE_CITIES.map(city => ({
            "@type": "AdministrativeArea",
            "name": `${city.name}, ${city.state}`
          }))
        }
      }));

      return servicesOffersSchema;
    }

    if (activeTab === 'areas') {
      // Specialized ServiceArea schema optimizing local citations
      return {
        "@context": "https://schema.org",
        "@type": "PlumbingService",
        "name": BUSINESS_INFO.shortName,
        "telephone": BUSINESS_INFO.phone,
        "description": "Premium 24/7 residential plumbing dispatch across Southern Pennsylvania and Cecil/Harford Northern Maryland.",
        "areaServed": SERVICE_CITIES.map(city => ({
          "@type": "AdministrativeArea",
          "name": city.name,
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": city.state === "PA" ? "Pennsylvania" : "Maryland"
          }
        })),
        "hasMap": "https://maps.google.com/?q=Peach+Bottom+PA+Plumbing+Services"
      };
    }

    if (activeTab === 'faqs') {
      // Direct high-performance Google FAQPage Schema validation structure
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "url": `${origin}/#faq-item-${faq.id}`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    }

    // Default to the LocalBusiness general schema
    return localBusinessSchema;
  };

  const schemaContent = JSON.stringify(getJsonLdSchema());

  return (
    <script
      type="application/ld+json"
      id={`jsonld-seo-${activeTab}`}
      dangerouslySetInnerHTML={{ __html: schemaContent }}
    />
  );
}
