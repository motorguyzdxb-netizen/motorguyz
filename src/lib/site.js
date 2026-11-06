export const logoUrl =
  "https://media.base44.com/images/public/6ae18541773eea85af4225c3/a671670df_motorguyzlogo2025.png";

export const site = {
  name: "Motorguyz",
  tagline: "Onsite mobile car repair in Dubai",
  phoneDisplay: "056 911 1910",
  phoneHref: "tel:+971569111910",
  whatsappNumber: "971569111910",
  email: "hello@motorguyz.ae",
  hours: "Sat – Thu · 8:00 – 22:00 · Friday on call",
  areas: [
    "Downtown Dubai",
    "Dubai Marina",
    "JLT",
    "Business Bay",
    "DIFC",
    "Jumeirah",
    "Palm Jumeirah",
    "Al Barsha",
    "JVC",
    "Al Quoz",
    "Dubai Hills",
    "Silicon Oasis",
    "Mirdif",
    "Al Nahda",
    "Sports City",
    "Discovery Gardens",
    "Deira",
    "Bur Dubai",
  ],
  stats: [
    { value: "4,800+", label: "Cars serviced" },
    { value: "45 min", label: "Average arrival" },
    { value: "4.9/5", label: "Customer rating" },
    { value: "12 mo", label: "Workmanship warranty" },
  ],
};

const waBase = `https://wa.me/${site.whatsappNumber}`;

export const waLink = (service) => {
  const message = service
    ? `Hi Motorguyz, I'd like to book this service: ${service}. My car and area are: `
    : `Hi Motorguyz, I'd like to book an onsite service in Dubai. My car and area are: `;
  return `${waBase}?text=${encodeURIComponent(message)}`;
};

export const waCustom = (message) => `${waBase}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const services = [
  {
    slug: "oil-change",
    name: "Oil & Filter Change",
    shortName: "Oil Change",
    image:
      "https://media.base44.com/images/public/6ae18541773eea85af4225c3/46ce89eec_generated_image.png",
    price: "249",
    duration: "45 min",
    tagline: "Full-synthetic oil and genuine filter, changed where your car is parked.",
    intro:
      "Engine oil degrades faster in Dubai heat and stop-start traffic. Our technician arrives with the correct grade of oil for your engine, drains and replaces the filter, tops up fluids and resets your service interval — all without you leaving your building.",
    included: [
      "Full-synthetic oil matched to your manufacturer spec",
      "Genuine or OEM-equivalent oil filter",
      "Washer plug and seal replacement",
      "Fluid top-ups and a 20-point visual inspection",
      "Service stamp recorded for your records",
    ],
    pricing: [
      { label: "4-cylinder engines", price: "AED 149" },
      { label: "6-cylinder engines", price: "AED 199" },
      { label: "European / performance oils", price: "AED 249" },
      { label: "Additional labour (if required)", price: "Quoted upfront" },
    ],
    faqs: [
      {
        q: "Do you use the oil grade my car requires?",
        a: "Yes. We check your manufacturer specification before arriving and carry the matching grade for your engine, including long-life European specs.",
      },
      {
        q: "How long does an onsite oil change take?",
        a: "Around 45 minutes from arrival, including the inspection and fluid top-ups. Your car stays in its parking spot the whole time.",
      },
      {
        q: "Is the old oil disposed of properly?",
        a: "Every litre is collected in sealed containers and handed to a licensed Dubai recycling partner — never poured to drain.",
      },
    ],
    meta:
      "Mobile oil change in Dubai at your doorstep. Full-synthetic oil, genuine filter, 45-minute service and 20-point check. Book on WhatsApp 056 911 1910.",
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    shortName: "Battery",
    image:
      "https://media.base44.com/images/public/6ae18541773eea85af4225c3/353074524_generated_image.png",
    price: "199",
    duration: "25 min",
    tagline: "Tested, diagnosed and replaced onsite — usually inside half an hour.",
    intro:
      "Dubai summers kill batteries early. We test the battery, alternator output and parasitic draw before recommending anything, then supply and fit a warranty-backed battery in your parking bay. No jump-start guesswork, no towing.",
    included: [
      "Battery load test and alternator charge test",
      "Parasitic drain check for repeat flat batteries",
      "Genuine or premium-brand replacement battery",
      "Terminal clean, grease and correct torque",
      "Old battery removed and recycled",
    ],
    pricing: [
      { label: "Battery test & jump start", price: "AED 99" },
      { label: "Standard battery replacement", price: "From AED 199" },
      { label: "AGM / start-stop batteries", price: "From AED 349" },
      { label: "Battery registration (European cars)", price: "AED 75" },
    ],
    faqs: [
      {
        q: "My car won't start — can you come today?",
        a: "In most Dubai areas, yes. Message us your location and car, and we will confirm an arrival window within minutes.",
      },
      {
        q: "Will the new battery affect my car's electronics?",
        a: "We fit it correctly with a memory saver where needed, and register start-stop batteries to the car so charging stays calibrated.",
      },
      {
        q: "Is there a warranty on the battery?",
        a: "Yes — the battery carries its manufacturer warranty, and our fitting work is covered for 12 months.",
      },
    ],
    meta:
      "Car battery replacement in Dubai, at your location. Free load test, warranty-backed batteries, AGM and start-stop fitment in under 30 minutes. Call 056 911 1910.",
  },
  {
    slug: "mobile-mechanic",
    name: "Mobile Mechanic Diagnostics & Repair",
    shortName: "Mobile Mechanic",
    image:
      "https://media.base44.com/images/public/6ae18541773eea85af4225c3/85e4817c4_generated_image.png",
    price: "249",
    duration: "60–120 min",
    tagline: "A full diagnostic workshop that arrives with the tools for the job.",
    intro:
      "Warning lights, grinding brakes, a rattle over speed bumps, air-con that blows warm — our mobile mechanics carry dealer-level diagnostic equipment and the parts most jobs need, so a large share of faults are fixed in one visit.",
    included: [
      "OBD-II scan with fault-code explanation in plain language",
      "Brake pads, discs and fluid checks or replacement",
      "Suspension, steering and belt inspection",
      "Air-con performance and cabin filter service",
      "Written report of findings with photo evidence",
    ],
    pricing: [
      { label: "Onsite diagnostic inspection", price: "AED 249" },
      { label: "Brake pads (per axle, supplied & fitted)", price: "From AED 349" },
      { label: "Air-con service & re-gas", price: "From AED 299" },
      { label: "Diagnostic fee credited against repair", price: "Included" },
    ],
    faqs: [
      {
        q: "Can you fix the car onsite or will it need a garage?",
        a: "Most diagnostics, brakes, batteries, belts, filters and cooling jobs are completed onsite. If a fault genuinely needs a lift or specialist tooling, we tell you before charging for anything further.",
      },
      {
        q: "Do you bring the parts?",
        a: "We carry common consumables and can source parts same day. You always get the price before we fit anything.",
      },
      {
        q: "Will my warranty be affected?",
        a: "We follow manufacturer service schedules and use matching parts. For brand-new cars under dealer warranty, we will advise if a dealer visit is the safer route.",
      },
    ],
    meta:
      "Mobile mechanic in Dubai — onsite diagnostics, brakes, air-con and repairs at your home or office. Dealer-level scanners, transparent quotes, 12-month warranty.",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const processSteps = [
  {
    title: "Message us",
    text: "Send your car, your area and what is wrong on WhatsApp. We reply with a fixed price and an arrival window.",
  },
  {
    title: "We arrive",
    text: "A certified technician reaches your home, office or parking bay with the parts and tools for your job.",
  },
  {
    title: "Diagnose & repair",
    text: "You see the fault, the parts and the price before any work starts. Then it gets fixed on the spot.",
  },
  {
    title: "Quality check",
    text: "We test-drive or pressure-check the repair, hand you a written summary and back the work for 12 months.",
  },
];

export const testimonials = [
  {
    quote:
      "Booked at 9am, oil changed in my building's parking by 11. No garage, no traffic, no waiting room.",
    name: "Ahmed R.",
    detail: "Audi Q5 · Dubai Marina",
  },
  {
    quote:
      "Battery died in the JLT car park. They tested it, quoted, and had a new one fitted in 25 minutes.",
    name: "Sara M.",
    detail: "Nissan Patrol · JLT",
  },
  {
    quote:
      "My bumper crack was welded properly instead of replaced. The panel lines are perfect and it saved me thousands.",
    name: "Daniel K.",
    detail: "BMW 5 Series · Business Bay",
  },
  {
    quote:
      "Their scan found a sensor fault two garages missed. Fixed it the same visit and showed me the readings.",
    name: "Fatima A.",
    detail: "Toyota Camry · Al Barsha",
  },
];

export const faqs = [
  {
    q: "Which areas of Dubai do you cover?",
    a: "We cover the whole of Dubai — Marina, JLT, Downtown, Business Bay, Jumeirah, Al Barsha, JVC, Dubai Hills, Silicon Oasis, Mirdif, Deira, Bur Dubai and everything between. Message us your location and we will confirm the arrival window.",
  },
  {
    q: "How quickly can a mechanic reach me?",
    a: "Most bookings are attended the same day, with an average arrival of around 45 minutes for emergency calls such as a dead battery or a warning light.",
  },
  {
    q: "Do you charge a call-out fee?",
    a: "No hidden call-out fee. The price we quote on WhatsApp is the price you pay, and the diagnostic fee is credited against the repair if you go ahead.",
  },
  {
    q: "Are your technicians certified?",
    a: "Every technician is trained and experienced on European, Japanese and American vehicles, works to manufacturer service schedules and carries dealer-level diagnostic equipment.",
  },
  {
    q: "What warranty do you give?",
    a: "Workmanship is covered for 12 months, and parts carry their manufacturer warranty. If something we fixed isn't right, we come back.",
  },
  {
    q: "Can you work in an underground or mall car park?",
    a: "Yes, as long as the vehicle is accessible and the building permits service work. We bring battery-powered equipment for spaces without a power point.",
  },
  {
    q: "How do I pay?",
    a: "Cash, card or bank transfer on completion, with a receipt sent on WhatsApp. You always approve the price before work starts.",
  },
  {
    q: "Do I need to be with the car?",
    a: "For most jobs we only need access to the vehicle. Many customers leave the keys with building security or a colleague and carry on with their day.",
  },
];