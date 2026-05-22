import { ServiceItem, Testimonial, FAQItem, ServiceCity } from './types.ts';

export const BUSINESS_INFO = {
  legalName: "McKinney Plumbing Services Limited Liability Company (LLC)",
  shortName: "McKinney Plumbing Services LLC",
  phone: "(000) 000-0000",
  phoneFormatted: "tel:0000000000",
  email: "contact@mckinneyplumbing.com", // Canonical email
  address: "508 Little Britain Church Road, Peach Bottom, PA 17563",
  addressNote: "Dispatched locally across southern PA and northern MD. (Office consultations by pre-approved appointment only).",
  licensePA: "PA HIC #PA188432 (Pending registration)",
  licenseMD: "MD MHIC #Pending (In progress for cross-border projects)",
  insuranceLimit: "$2,000,000 General Liability & Property Damage",
  hours: "Mon - Fri: 7:00 AM - 5:00 PM | Sat: 8:00 AM - 12:00 PM",
  emergencyNote: "24/7 Same-Day Emergency Dispatch Response for extreme leaks, burst pipes, and water heater failures",
  foundingYear: 2021,
};

export const SERVICES: ServiceItem[] = [
  {
    id: "drain-cleaning",
    title: "Drain Cleaning & Clog Removal",
    shortDesc: "Slow drains, gurgling pipes, or full backups cleared with professional machinery.",
    longDesc: "From simple kitchen sinks to clogged main lines, we use commercial snake/auger equipment to safely extract debris and restore full, continuous flow. We diagnose underlying root infestations or pipe sagging so you get a lasting solution rather than a quick coverup.",
    iconName: "DropletOff",
    pricingModel: "Upfront pricing (No hidden surprises)",
    estimatedPrice: "",
    symptoms: [
      "Water pooling around your feet in the shower",
      "Sinks taking several minutes to drain",
      "Gurgling sounds coming from toilet when sink runs",
      "Unpleasant sour odors near household drains"
    ],
    features: [
      "No-damage line snaking policy",
      "Full hair, grease, and soap buildup extraction",
      "Post-clear drainage stress testing",
      "Preventative maintenance treatment advice"
    ]
  },
  {
    id: "water-heaters",
    title: "Water Heater Repair & Replacement",
    shortDesc: "Complete support for tank, tankless, gas, and electric water heaters.",
    longDesc: "If your hot water has disappeared, is rusty, or your heating tank is dripping, we can help. We repair elements, replace gas pilot assemblies, and install modern, high-efficiency traditional or tankless systems (Bradford White, Rinnai, Rheem) matching local rural well-water conditions.",
    iconName: "Flame",
    pricingModel: "Detailed upfront quote",
    estimatedPrice: "",
    symptoms: [
      "Lukewarm shower temperature that goes cold rapidly",
      "Puddle of water pooling in secondary safety tray",
      "Popping, cracking, or rumbling noises in basement",
      "Reddish-brown tinted water from hot lines only"
    ],
    features: [
      "Standard tank and fast-recovery tankless designs",
      "High-durability sediment-resistant anodes for well-systems",
      "Safe pressure-relief valve calibration",
      "Disposal of old non-functional water heating units"
    ]
  },
  {
    id: "leak-detection",
    title: "Leak Detection & Prompt Repair",
    shortDesc: "Pinpoint accuracy in finding hidden line water leaks before they rot your home.",
    longDesc: "Leaky water lines can silently ravage crawlspaces, ceilings, and well-pumps. We perform thorough tests to isolate leaks in copper, PEX, and legacy galvanized hardware. We complete precise surgical repairs isolsating structural damage.",
    iconName: "Search",
    pricingModel: "Upfront quote first",
    estimatedPrice: "",
    symptoms: [
      "Unexplained water bill spike",
      "Warm or soft spots on floor boards",
      "Well-pump running repeatedly when no taps are open",
      "Musty mildew smells in closets or basement corners"
    ],
    features: [
      "Non-destructive electronic pipe locating tech",
      "Fast spot-repairs with high-grade copper or flexible PEX",
      "Wall/ceiling structure protection strategy",
      "Main water shut-off valve inspection"
    ]
  },
  {
    id: "well-water-systems",
    title: "Well Pump & Pressure Tank Adjacent Work",
    shortDesc: "Ensuring stable household water pressure for local homes running on rural well systems.",
    longDesc: "Living in southern Lancaster County means well-water properties are prominent. If your water pressure fluctuates, is surging, or you lose water entirely, the problem is often a sticking pressure switch, standard water tank failure, or filter blockage. We repair adjacent plumbing controls with clean, robust components.",
    iconName: "Gauge",
    pricingModel: "Upfront Diagnosis & Repairs",
    estimatedPrice: "",
    symptoms: [
      "Frequent water pressure drops that surge back",
      "Well pump clicking on and off rapidly (short-cycling)",
      "Total water supply loss with power panel still active",
      "Sand, air bubbles, or black flecks sputtering from faucets"
    ],
    features: [
      "Heavy-duty pressure switch upgrades (30/50 & 40/60 PSI)",
      "Bladder type vertical thermal expansion tank installations",
      "Whole-house particulate sedimentation filter upgrades",
      "System purification testing suggestions"
    ]
  },
  {
    id: "toilets-faucets",
    title: "Toilet, Faucet & Fixture Services",
    shortDesc: "Quiet down running toilets and install high-quality, drip-free faucets.",
    longDesc: "Running toilets can waste hundreds of gallons of well fluid a day, wearing out pumps. We restore toilet mechanisms (valves, flappers, wax rings) and install premium, leak-free kitchen/bathroom faucets. High-performance, water-saving fixtures built to withstand normal wear.",
    iconName: "Wrench",
    pricingModel: "Upfront flat-rate quote",
    estimatedPrice: "",
    symptoms: [
      "Toilet constantly hissing or refilling randomly",
      "Faucet consistently dripping even when tightened firmly",
      "Corroded shut-off angle stops underneath the cabinet",
      "Sprayer attachments jammed or leaking"
    ],
    features: [
      "Water-saving low flow toilet internals",
      "Elegant double-handle & pull-down utility faucet lines",
      "Wax ring replacements & solid structural flange resetting",
      "Quarter-turn solid brass angle valve replacements"
    ]
  },
  {
    id: "pipe-replacement",
    title: "Pipe Repairs & PEX Repiping",
    shortDesc: "Replacement of leaky galvanized lines with highly flexible PEX pipe.",
    longDesc: "Old copper and scale-clogged galvanized pipes leak and choke off pressure. We perform partial or complete home repiping using flexible, food-safe PEX piping which does not corrode, does not scale, and successfully handles winter freeze-up flexing better than rigid metals.",
    iconName: "GitMerge",
    pricingModel: "Overall project quote",
    estimatedPrice: "",
    symptoms: [
      "Significant drop in hot and cold pressure globally",
      "Damp drywall stains in basement or floor tracks",
      "Rust particles or weird smells from the cold pipe",
      "Plentiful pinhole leaks starting to sprout up"
    ],
    features: [
      "Corrosion-proof food-safe premium flexible PEX",
      "Fast, less-destructive installation layout",
      "Sewer drop repairs & main incoming utility connection",
      "Thorough pressure isolation testing"
    ]
  }
];

export const SERVICE_CITIES: ServiceCity[] = [
  { name: "Peach Bottom", state: "PA", zipCode: "17563", isEmergencyAvailable: true, estTravelTimeMin: 10 },
  { name: "Quarryville", state: "PA", zipCode: "17566", isEmergencyAvailable: true, estTravelTimeMin: 20 },
  { name: "Oxford", state: "PA", zipCode: "19363", isEmergencyAvailable: true, estTravelTimeMin: 22 },
  { name: "Delta", state: "PA", zipCode: "17314", isEmergencyAvailable: true, estTravelTimeMin: 15 },
  { name: "Kirkwood", state: "PA", zipCode: "17536", isEmergencyAvailable: true, estTravelTimeMin: 18 },
  { name: "Nottingham", state: "PA", zipCode: "19362", isEmergencyAvailable: true, estTravelTimeMin: 25 },
  { name: "Wakefield", state: "PA", zipCode: "17563", isEmergencyAvailable: true, estTravelTimeMin: 10 },
  { name: "Fawn Grove", state: "PA", zipCode: "17321", isEmergencyAvailable: true, estTravelTimeMin: 25 },
  { name: "Rising Sun", state: "MD", zipCode: "21911", isEmergencyAvailable: true, estTravelTimeMin: 22 },
  { name: "Conowingo", state: "MD", zipCode: "21918", isEmergencyAvailable: true, estTravelTimeMin: 15 },
  { name: "Whiteford", state: "MD", zipCode: "21160", isEmergencyAvailable: true, estTravelTimeMin: 18 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Richard B.",
    location: "Peach Bottom, PA",
    rating: 5,
    date: "2026-03-12",
    text: "Had zero water pressure. McKinney Plumbing came out to Wakefield area within two hours. Quick diagnose—it was just a failed bladder tank pressure control switch. They swapped it out, verified my well tank charge, and kept costs very fair of what I expected. Solid local guys.",
    serviceReceived: "Well System Switch Calibration"
  },
  {
    id: "t2",
    author: "Sarah L.",
    location: "Quarryville, PA",
    rating: 5,
    date: "2026-04-05",
    text: "Professional, clean, and upfront. They replaced our old 40-gallon electric water heater with as little noise as possible. The pricing was exactly as estimated over the phone. Kept the basement clean throughout. Super happy to have a honest plumber in southern Lancaster County.",
    serviceReceived: "Water Heater Replacement"
  },
  {
    id: "t3",
    author: "Timothy M.",
    location: "Oxford, PA",
    rating: 5,
    date: "2026-04-19",
    text: "We had a stubborn kitchen sink clog that nested 15 feet down under our concrete floor. Two hours of professional snaking did the trick. They answered all my questions about sewer lines. Highly inspect their work, polite and fast response.",
    serviceReceived: "Complex Drain Snaking"
  },
  {
    id: "t4",
    author: "Grace D.",
    location: "Conowingo, MD",
    rating: 5,
    date: "2026-05-02",
    text: "Wonderful customer service. Hard to find reliable contractors who cross the PA-MD line for smaller jobs. They repaired two weeping PEX valves under our bathroom sink. Cleaned up everything, highly recommended McKinney!",
    serviceReceived: "Bathroom Shutoff Valves Repair"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "Do you operate strictly as a licensed and insured plumber?",
    answer: "Yes. McKinney Plumbing Services LLC operates with proper registration and hold detailed $2,000,000 general liability insurance. Pennsylvania home improvement contractors do not have a centralized 'plumbing' code statewide, so we register under PA Home Improvement Contractor rules. Maryland-based support uses specialty county licensing or MHIC guidelines."
  },
  {
    id: "faq-2",
    category: "coverage",
    question: "Which towns and regions do you service?",
    answer: "We are based in Peach Bottom, PA. We primarily service southern Lancaster County (Quarryville, Kirkwood, Wakefield, Nottingham, Kirkwood), southern Chester County (Oxford), southeastern York County (Delta, Fawn Grove), and northern Cecil/Harford Counties in Maryland (Rising Sun, Conowingo, Whiteford). If you aren't sure, use our service area tool below to test your ZIP code!"
  },
  {
    id: "faq-3",
    category: "pricing",
    question: "Are your price estimates free? How does billing work?",
    answer: "We provide clear, ballpark range estimates over the phone for standard repairs (such as ciggerette-size leak repairs or typical drain clears). For complex jobs, we dispatch a tech, diagnose on-site, and provide a firm, upfront flat-rate menu price before any work begins. This ensures you never have to worry about 'surprise hours' on your bill."
  },
  {
    id: "faq-4",
    category: "emergency",
    question: "Do you handle local well water systems or only indoor pipes?",
    answer: "Because we live and work in highly rural communities along the Susquehanna River, we are experts in issues specific to well-water systems. While we do not drill wells, we repair and replace physical vertical pressure bladder tanks, well pressure switches (30/50 and 40/60 switches), sediment water filtration beds, and check-valves."
  },
  {
    id: "faq-5",
    category: "emergency",
    question: "How quickly do you respond to urgent plumbing leaks?",
    answer: "For emergency issues (gushing pipes, full sewer backups, or leaking hot tanks), we offer immediate dispatch priorities for local clients, aiming to arrive within 1-2 hours depending on how near you stand from Sandy Beach/Little Britain."
  },
  {
    id: "faq-6",
    category: "pricing",
    question: "What payment forms does McKinney Plumbing accept?",
    answer: "For residential security and simplicity, we accept Cash, Checks, and standard credit cards (Visa, MasterCard, Discover, AMEX) via secure on-site mobile processing. Payment is due upon successful completion of the service."
  }
];
