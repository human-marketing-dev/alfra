/* F&S Real Estate Solutions — contenido de su página.
   Fuente: «Website Content Brief · F&S Real Estate Solutions» (inglés).

   Esta empresa no usa la plantilla compartida de `[slug]`: tiene brief,
   estructura y estructura propios, y su página va en inglés. Las cifras
   son las del brief y ya vienen confirmadas por F&S.

   Nota: donde el prototipo HTML nombraba entidades del grupo (FS&A,
   Financiera Flores Serna, SOFOM) el brief usa formulaciones genéricas
   —«our legal and tax specialists», «our in-house financial arm»—. Se
   respeta el brief, que es la fuente única de verdad. */

import type { IconName } from "@/components/ui/Icon";

export const FS = {
  nombre: "F&S Real Estate Solutions",
  tagline: "Corporate Real Estate Advisors · Mexico",
  matriz: "Flores Serna Group",
  sitio: "https://www.floresserna.com",
  correo: "info@fsrealestate.mx",
  ubicacion: "San Pedro Garza García, N.L. México",
} as const;

export const HERO = {
  eyebrow: "Corporate Real Estate Advisors · Mexico",
  titular: "Your business lands in Mexico.",
  titularAcento: "We make it happen.",
  subtitular:
    "Full-service corporate real estate advisory for multinational companies expanding into Mexico. Site selection, negotiation, built-to-suit, financing — backed by the full legal, financial and institutional power of Flores Serna Group.",
} as const;

export const CIFRAS_HERO = [
  { valor: "500+", etiqueta: "Corporate clients", detalle: "across Mexico" },
  { valor: "15+", etiqueta: "Cities", detalle: "with active coverage" },
  { valor: "4", etiqueta: "Countries", detalle: "with FS Group offices" },
  { valor: "1", etiqueta: "Integrated team", detalle: "real estate + legal + finance" },
];

export const QUIENES = {
  tag: "Who we are",
  titular: "The real estate arm of a group that already knows your business.",
  parrafos: [
    "F&S Real Estate Solutions is the corporate real estate division of Flores Serna Group — Mexico's leading multidisciplinary business advisory consortium. Unlike traditional brokers, we don't just find you a building. We bring together real estate expertise, legal structuring, financial solutions and government relations under one roof, from day one.",
    "Our clients are multinational companies choosing Mexico as their next market. We are their soft landing specialists.",
  ],
  etiquetas: ["Industrial", "Nearshoring", "Office", "Built to Suit", "Investment", "Site Selection"],
} as const;

export const RESPALDO = {
  etiqueta: "Backed by",
  nombre: "Flores Serna Group",
  descripcion:
    "A multidisciplinary consortium with headquarters in Mexico City and offices in Monterrey, Guadalajara, Miami, Panama and Shanghai. Specialists in legal, tax, financial advisory and institutional relations — serving over 500 corporate clients across Mexico and Latin America.",
  datos: [
    { valor: "500+", etiqueta: "Active clients" },
    { valor: "15+", etiqueta: "Offices in Mexico" },
    { valor: "4", etiqueta: "International offices" },
    { valor: "GPTW", etiqueta: "Certified 2026–27" },
  ],
} as const;

export interface Servicio {
  nombre: string;
  descripcion: string;
  icono: IconName;
  destacado?: boolean;
}

export const SERVICIOS: Servicio[] = [
  {
    nombre: "Soft landing & market entry",
    descripcion:
      "End-to-end advisory for companies entering Mexico. We coordinate every workstream — real estate, legal, fiscal, permits — from a single point of contact.",
    icono: "globe",
    destacado: true,
  },
  {
    nombre: "Site selection",
    descripcion:
      "Market intelligence, demographics, infrastructure feasibility, labor data and developer profiles — all validated by our in-house research team.",
    icono: "map-pin",
  },
  {
    nombre: "Lease negotiation & renewals",
    descripcion:
      "We represent your interests exclusively. Our team navigates complex negotiations to secure the best possible terms for your operation.",
    icono: "briefcase",
  },
  {
    nombre: "Built to suit",
    descripcion:
      "Land acquisition, construction management, services connection and delivery — for clients who need a facility built to their exact specifications.",
    icono: "hard-hat",
  },
  {
    nombre: "Lease vs. buy analysis",
    descripcion:
      "Capital and operating expenditure modeling aligned to your corporate guidelines. We provide the data your CFO needs to make the right call.",
    icono: "trending-up",
  },
  {
    nombre: "Property acquisitions",
    descripcion:
      "Industrial land, warehouses, office buildings and specialized facilities. We source, evaluate and close — with full legal structuring from day one.",
    icono: "key",
  },
  {
    nombre: "Economic incentives",
    descripcion:
      "Our institutional relations team has direct access to municipal and state governments across Mexico. We identify and negotiate incentive packages on your behalf.",
    icono: "target",
  },
  {
    nombre: "Project financing",
    descripcion:
      "Access to development finance, BTS financing and credit solutions through our in-house financial arm. No third-party lender required.",
    icono: "layers",
  },
  {
    nombre: "Project & construction management",
    descripcion:
      "On-site supervision and full construction oversight to enforce contractual terms, ensure quality and protect your budget and timeline.",
    icono: "ruler",
  },
];

export const DIFERENCIADORES = [
  {
    titulo: "Integrated legal & tax structuring",
    descripcion:
      "Every transaction is structured from day one by our legal and tax specialists — the same firm serving 500+ companies across Mexico. No separate law firm. No coordination risk. Your deal is legally sound before it closes.",
  },
  {
    titulo: "In-house financing",
    descripcion:
      "Our financial arm provides credit, leasing and factoring solutions directly to our clients. If you need to finance a BTS project or an acquisition, the answer is already within our group.",
  },
  {
    titulo: "Direct access to government",
    descripcion:
      "Our Institutional Relations division has active relationships at all three levels of government across Mexico. We don't just advise on permits — we help you get them, faster.",
  },
  {
    titulo: "A client network that works for you",
    descripcion:
      "Our group serves 500+ companies across Mexico. That network — of developers, contractors, government contacts and financial partners — is activated on every engagement we take on.",
  },
];

export const MERCADOS = [
  { nombre: "Monterrey", detalle: "Primary market · ZMM" },
  { nombre: "CDMX", detalle: "Corporate hub" },
  { nombre: "Saltillo", detalle: "Industrial corridor" },
  { nombre: "Guadalajara", detalle: "Tech & manufacturing" },
  { nombre: "Querétaro", detalle: "Aerospace & auto" },
];

export const PROCESO = [
  {
    titulo: "Preliminary analysis",
    descripcion:
      "We map your specific needs, operational requirements, timeline and budget. This becomes the strategic brief that drives every decision forward.",
  },
  {
    titulo: "Selection of alternatives",
    descripcion:
      "Our market intel team identifies and shortlists the most viable options — validated against current rates, infrastructure availability and developer profiles.",
  },
  {
    titulo: "Evaluation & comparison",
    descripcion:
      "Physical inspection, financial modeling and side-by-side comparison of all alternatives. Complete transparency — you see everything we see.",
  },
  {
    titulo: "Negotiation",
    descripcion:
      "We represent your interests exclusively. Legal structuring runs in parallel — by the time a deal is signed, it's already been reviewed by our legal team.",
  },
  {
    titulo: "Project management",
    descripcion:
      "On-site supervision, contractor management and timeline enforcement through delivery. We stay engaged until you're operational.",
  },
];

export const TIPOS_PROYECTO = [
  "Industrial warehouse / manufacturing facility",
  "Corporate office",
  "Built to Suit",
  "Land acquisition",
  "Investment property",
  "Other",
];
