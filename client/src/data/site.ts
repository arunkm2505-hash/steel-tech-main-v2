/* Central content store, adapted from steeltechindustries.in and the source-content audit, and expanded for the revamp. */

export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc: string }[] };

export const products = [
  {
    slug: "fire-rated-doors",
    no: "01",
    name: "Fire-Rated Steel Doors",
    tag: "60–120 min · configuration-specific",
    short: "Fire-resistance ratings from 60 to 120 minutes, subject to the tested door configuration.",
    intro: "SteelTech fire-rated steel doors are designed to help contain fire and smoke. The certified rating depends on the complete tested assembly, including the leaf, frame, glazing and hardware.",
    features: [
      "Test standards: IS 3614 (Part 2): 1992 and BS 476 Parts 20 and 22",
      "Fire-resistance ratings from 60 to 120 minutes; verify the rating for the selected assembly",
      "Intumescent seals that expand under heat to block smoke",
      "Self-closing hardware options; confirm fire-rating compatibility for the selected assembly",
      "Fire-rated vision glazing options; permitted size and rating depend on the tested configuration",
      "Aliphatic acrylic PU paint finish with UV and salt-spray resistance; test duration to be confirmed",
    ],
    applications: ["Stairwells and escape corridors", "Server rooms and electrical risers", "Hotels and hospitality kitchens", "Factories and warehouses", "Hospitals and institutional buildings"],
    icon: "flame",
    image: "/images/products/fire-rated-doors.jpg",
    imageAlt: "Red fire-rated steel double door with vision panels, installed at a building stairwell",
  },
  {
    slug: "scientific-doors",
    no: "02",
    name: "Scientific Steel Doors",
    tag: "Labs · hospitals · clean rooms",
    short: "Purpose-built access for laboratories, hospitals, clean rooms and other controlled environments.",
    intro: "SteelTech scientific doors are designed for hygiene-sensitive environments such as laboratories, clean rooms, operating theatres and pharmaceutical facilities. Materials, seals and hardware can be specified for the project.",
    features: [
      "Seamless, crevice-free surfaces for easy sanitisation",
      "Sealed gasketing for controlled environments; performance figures to be confirmed",
      "Stainless steel or PU-painted steel options; material grade and finish to be confirmed",
      "Lead-lined variants available; lead equivalence is project-specific",
      "Automatic sliding and sensor hardware options",
    ],
    applications: ["Hospital operation theatres", "Pharmaceutical clean rooms", "Research laboratories", "Imaging and radiology suites", "Food processing facilities"],
    icon: "flask-conical",
    image: "/images/products/scientific-doors.jpg",
    imageAlt: "Brushed stainless steel double doors with vision panels, installed in a scientific facility",
  },
  {
    slug: "general-purpose-doors",
    no: "03",
    name: "General Purpose Steel Doors",
    tag: "35+ design options",
    short: "Durable steel door solutions for homes, utility zones, offices, and high-traffic applications.",
    intro: "SteelTech general-purpose doors bring durable steel construction to residential, commercial and utility openings, with a choice of designs and project-specific sizes.",
    features: [
      "35+ design and panelling options",
      "Steel construction: termite-proof and will not warp",
      "Standard and custom sizes; confirm opening dimensions during specification",
      "Optional insulated core; core type and acoustic or thermal performance to be confirmed",
    ],
    applications: ["Residential entrances and utility doors", "Office and retail entries", "Warehouses and back-of-house areas", "Educational institutions", "Multi-family residential blocks"],
    icon: "door-closed",
    image: "/images/products/general-purpose-doors.jpg",
    imageAlt: "Off-white general purpose steel double door with granite surround and steel handles",
  },
  {
    slug: "aluminium-glass-doors",
    no: "04",
    name: "Aluminium-Framed Glazed Doors",
    tag: "Glazed door systems",
    short: "Slim aluminium framing and safety-glass options for bright, contemporary entrances.",
    intro: "SteelTech glazed door systems use slim aluminium framing with toughened or laminated safety-glass options to bring daylight and visibility to entrances. Glass specification and frame configuration are confirmed for each project.",
    features: [
      "Toughened or laminated safety-glass options; confirm the applicable standard and glass thickness",
      "Sliding and swing door configurations",
      "Aluminium-framed system; profile and finish to be confirmed",
      "Automatic door hardware options",
    ],
    applications: ["Corporate lobbies and reception areas", "Retail entrances", "Showrooms", "Office entrances"],
    icon: "square-stack",
    image: "/images/products/aluminium-glass-doors.jpg",
    imageAlt: "Aluminium-framed glazed entrance with side panels and pull handles",
  },
] as const;

export const benefits = [
  { no: "01", title: "4x stronger than wood", desc: "High-impact steel construction outperforms timber on raw strength and dimensional stability." },
  { no: "02", title: "Termite & pest resistant", desc: "Steel doors do not attract termites or borers, so no chemical treatment is ever required." },
  { no: "03", title: "12x superior finish", desc: "PU Paint coated surfaces hold their finish far longer than painted wood under daily wear." },
  { no: "04", title: "Fire-resistant by material", desc: "Steel's natural properties are the foundation of our certified fire-rated range." },
  { no: "05", title: "35+ design options", desc: "From flush panels to moulded profiles, there is a design language for every façade." },
  { no: "06", title: "Eco-friendly manufacturing", desc: "No trees are cut. Every door is built from engineered steel and recyclable components." },
  { no: "07", title: "7x more warp-resistant", desc: "Steel holds its shape through heat, humidity, and years of daily use without warping." },
  { no: "08", title: "Weatherproof construction", desc: "Built to perform in coastal humidity, monsoon exposure, and daily temperature swings." },
  { no: "09", title: "1 Year Warranty", desc: "Every door ships with a 1-year manufacturer warranty and lifetime service support." },
  { no: "10", title: "Maintenance-free", desc: "No repainting, resealing, or seasonal upkeep. Wipe-clean surfaces stay presentable for years." },
  { no: "11", title: "Value engineered", desc: "Lower lifetime cost than timber once you account for replacement, repair, and treatment." },
] as const;

export const stats = [
  { value: "30+", label: "YEARS IN\nTHE FIELD" },
  { value: "2HR", label: "FIRE-RATED\nPROTECTION" },
  { value: "4", label: "DOOR SYSTEM\nCATEGORIES" },
  { value: "360°", label: "SUPPLY +\nINSTALLATION" },
] as const;

export const timeline = [
  { year: "1995", title: "SteelTech Industries founded", desc: "Began manufacturing flash butt welded steel windows, roof trusses, and building accessories to IS 1038 / IS 1361 standards." },
  { year: "2005", title: "Expansion into flush doors", desc: "Widened the product range into pressed steel flush doors, bringing the same engineering discipline to a new category." },
  { year: "2010s", title: "Fire-rated specialisation", desc: "Became a dedicated fire-rated door provider, integrating global testing standards into local manufacturing." },
  { year: "Today", title: "Royal Fab Group venture", desc: "Operating as part of the Royal Fab Group, serving commercial, institutional, and residential clients across South India." },
] as const;

export const productRange = [
  "Fire-Rated Steel Doors",
  "Scientific Steel Doors",
  "General Purpose Steel Doors",
  "Aluminium-Framed Glazed Doors",
  "Lead Lined Steel Doors",
  "Stainless Steel Doors",
  "Floor Spring & Double Action Hinged Doors",
  "Pressed Steel Door Frames",
  "Pressed Steel Louvre Ventilators",
  "Double Glazed Vision Panels",
] as const;

export const hardwarePartners = ["dormakaba", "Geze", "Yale"] as const;

export const accessories = [
  { name: "Door Closers", desc: "Hydraulic and cam-action and hold open closers for controlled, self-closing operation on every door category." },
  { name: "Panic & Exit Hardware", desc: "Push-bar exit devices with or without external trim for fire-rated and high-occupancy doors, built to release instantly under pressure." },
  { name: "Locks & Cylinders", desc: "Mortise dead locks, sash lock, digital locks, cylindrical knob lock and multi-point locking systems sourced from certified hardware partners." },
  { name: "Hinges & Pivots", desc: "Ball-bearing hinges and floor-spring pivots rated for high-frequency commercial use." },
  { name: "Vision Panels", desc: "Fire-rated and standard glazing inserts for visibility without compromising protection." },
  { name: "Seals & Thresholds", desc: "Intumescent, acoustic, weather seals and GI & SS threshold fitted to match each door's performance rating." },
] as const;

export const certifications = [
  { title: "IS 1038 / IS 1361", desc: "Steel window and door manufacturing standards followed since the company's founding." },
  { title: "IS 3614 (Part 2): 1992 / BS 476", desc: "Fire doors are tested to IS 3614 (Part 2): 1992 and BS 476 Parts 20 and 22, with configuration-specific ratings from 60 to 120 minutes." },
  { title: "Hardware Compliance", desc: "Hardware for rated assemblies is selected to match the tested door configuration." },
  { title: "1 Year Warranty", desc: "Every installation is backed by a 1-year manufacturer warranty and lifetime service support." },
] as const;

export const qualityPolicy = [
  { area: "Technology", desc: "We adopt the latest technology available in door manufacturing." },
  { area: "Manufacturing", desc: "We follow best manufacturing practices at every stage of production." },
  { area: "Communication", desc: "We maintain effective communication at every level, from enquiry to handover." },
  { area: "Standard compliance", desc: "We comply with the requirements of the International series ISO 9001:2008." },
  { area: "Delivery", desc: "We ensure prompt delivery of cost effective, quality products conforming to international standards." },
] as const;

export const serviceOfferings = [
  { title: "Installation Service", desc: "We install every door ourselves. A precise installation protects the door's performance and keeps the whole opening working the way it was designed." },
  { title: "Installation Supervision", desc: "If your own technicians are handling installation, our engineer can supervise the work on site and guide your team through it." },
  { title: "After Sales Service", desc: "Once installation is certified by a SteelTech engineer, the standard one-year installation warranty applies, and our team stays reachable for spares and adjustments." },
] as const;

export const assurance = [
  { title: "1-year manufacturer warranty", desc: "Every door we manufacture is backed by a 1-year manufacturer warranty and lifetime service support." },
  { title: "1-year installation warranty", desc: "When installation is supervised and certified by a SteelTech engineer, the installation itself is covered for one year." },
  { title: "ISO 9001:2008 aligned", desc: "Our quality management system follows the International series ISO 9001:2008." },
  { title: "Engineers on call", desc: "A dedicated point of contact for spares, adjustments, and after-sales support for the life of the installation." },
] as const;

export const serviceGeography = ["Chennai", "Coimbatore", "Madurai", "Trichy", "Bangalore", "Mysore", "Trivandrum", "Cochin", "Hyderabad", "Visakhapatnam", "Puducherry"] as const;

export const installationSteps = [
  { no: "01", title: "Site survey", desc: "Our team visits the site to measure openings, assess structural constraints, and understand the application." },
  { no: "02", title: "Specification", desc: "We recommend the right door category, rating, hardware, and finish for the opening and its use case." },
  { no: "03", title: "Fabrication", desc: "Doors are manufactured to exact dimensions at our facility, with quality checks at every stage." },
  { no: "04", title: "Delivery & staging", desc: "Finished assemblies are delivered and staged on-site ahead of the scheduled installation window." },
  { no: "05", title: "Installation", desc: "Our installation team fits frames, hangs shutters, and mounts hardware to manufacturer tolerances." },
  { no: "06", title: "Quality handover", desc: "Every opening is tested, including operation, seals, and hardware, before formal handover and warranty activation." },
] as const;

export const clients = [
  { file: "ai_group", name: "Industry Partner" },
  { file: "akshaya", name: "Akshaya" },
  { file: "apollo_hospitals", name: "Apollo Hospitals" },
  { file: "arun_excello", name: "Arun Excello" },
  { file: "aviagen", name: "Aviagen" },
  { file: "bsnl", name: "BSNL" },
  { file: "ccc", name: "Consolidated Construction Consortium" },
  { file: "coromandel", name: "Coromandel" },
  { file: "camd", name: "Industry Partner" },
  { file: "ford", name: "Ford" },
  { file: "global_hospitals", name: "Global Hospitals" },
  { file: "gg_hospital", name: "GG Hospital" },
  { file: "hyundai", name: "Hyundai" },
  { file: "isuzu", name: "Isuzu" },
  { file: "isro", name: "ISRO" },
  { file: "komatsu", name: "Komatsu" },
  { file: "kajima", name: "Kajima Corporation" },
  { file: "lt", name: "L&T" },
  { file: "mw_group", name: "M+W Group" },
  { file: "michelin", name: "Michelin" },
  { file: "miot_hospitals", name: "MIOT Hospitals" },
  { file: "ntpc", name: "NTPC" },
  { file: "navins", name: "Navin's" },
  { file: "pacifica", name: "Pacifica Companies" },
  { file: "pepsi", name: "Pepsi" },
  { file: "powergrid", name: "Power Grid Corporation" },
  { file: "rainbow_hospital", name: "Rainbow Hospital" },
  { file: "shasun", name: "Shasun" },
  { file: "renault_nissan", name: "Renault Nissan" },
  { file: "samsung", name: "Samsung" },
  { file: "shimizu", name: "Shimizu Corporation" },
  { file: "suguna_poultry", name: "Suguna Poultry" },
  { file: "sims_srm", name: "SIMS (SRM Institutes)" },
  { file: "tata", name: "Tata" },
  { file: "vgn", name: "VGN" },
  { file: "yamaha", name: "Yamaha" },
].map((c) => ({ ...c, logo: `/images/clients/${c.file}.png` }));

export const factoryImages = [
  { src: "/images/factory/pressbrake.jpg", alt: "SteelTech technician operating a CNC press brake", caption: "PRESS BRAKE / FABRICATION" },
  { src: "/images/factory/paintbooth.jpg", alt: "SteelTech spray paint booth finishing a door leaf", caption: "PAINT BOOTH / FINISHING" },
  { src: "/images/factory/cutting.jpg", alt: "SteelTech sheet metal cutting line", caption: "CUTTING LINE / RAW STEEL" },
] as const;

export const certificationImages = [
  { src: "/images/certifications/iso9001.jpg", alt: "ISO 9001:2008 Certificate of Registration" },
  { src: "/images/certifications/ul-cbri-bfrc.jpg", alt: "UL, CBRI and BFRC certification marks" },
] as const;

export const contact = {
  phone: "+91 99429 02025",
  phoneHref: "tel:+919942902025",
  email: "dravidamani@steeltech-ind.com",
  locations: ["Chennai, Tamil Nadu", "Puducherry"],
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: products.map((p) => ({ label: p.name, href: `/products/${p.slug}`, desc: p.tag })),
  },
  { label: "Accessories", href: "/accessories" },
  { label: "Quality", href: "/quality" },
  { label: "Installation", href: "/installation" },
  {
    label: "Clientele",
    href: "/clientele",
    children: [
      { label: "Certifications", href: "/clientele/certifications", desc: "ISO 9001:2008 and our quality policy" },
      { label: "Our Approach", href: "/clientele/our-approach", desc: "How we take on a project" },
      { label: "Assurance", href: "/clientele/assurance", desc: "Warranty and after-sales support" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
