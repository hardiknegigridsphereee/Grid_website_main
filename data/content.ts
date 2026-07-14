import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  BrainCircuit,
  Boxes,
  Globe,
  Smartphone,
  Cloud,
  Workflow,
  BarChart3,
  Sprout,
  GraduationCap,
  Truck,
  ShoppingBag,
  Factory,
  HeartPulse,
} from 'lucide-react'

/* ---------------------------------- Metrics --------------------------------- */
export interface Metric {
  label: string
  value: number
  suffix?: string
}

export const metrics: Metric[] = [
  { label: 'Projects Delivered', value: 120, suffix: '+' },
  { label: 'Industries Served', value: 14, suffix: '+' },
  { label: 'Products Built', value: 25, suffix: '+' },
  { label: 'Technologies Used', value: 40, suffix: '+' },
]

/* --------------------------------- Services --------------------------------- */
export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Custom Software Development',
    description:
      'Bespoke platforms engineered around your operations, from architecture to deployment.',
    icon: Code2,
  },
  {
    title: 'AI Solutions',
    description:
      'Predictive models, computer vision and generative AI woven directly into your products.',
    icon: BrainCircuit,
  },
  {
    title: 'ERP Systems',
    description:
      'Unified resource planning that connects finance, inventory, HR and operations.',
    icon: Boxes,
  },
  {
    title: 'Web Development',
    description:
      'Fast, accessible and beautiful web experiences built on modern frameworks.',
    icon: Globe,
  },
  {
    title: 'Mobile Applications',
    description:
      'Native-grade iOS and Android apps with seamless offline and realtime sync.',
    icon: Smartphone,
  },
  {
    title: 'Cloud Solutions',
    description:
      'Scalable, secure cloud infrastructure with automated CI/CD and observability.',
    icon: Cloud,
  },
  {
    title: 'Automation Systems',
    description:
      'Workflow automation that removes manual toil and accelerates every process.',
    icon: Workflow,
  },
  {
    title: 'Analytics Platforms',
    description:
      'Realtime dashboards and data pipelines that turn raw signals into decisions.',
    icon: BarChart3,
  },
]

/* --------------------------------- Products --------------------------------- */
export interface Product {
  name: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export const products: Product[] = [
  {
    name: 'Orchard Intelligence Platform',
    description:
      'AI-driven precision agriculture — disease prediction, irrigation and yield forecasting from live field telemetry.',
    image: '/products/orchard-intelligence.png',
    tags: ['AI/ML', 'IoT', 'Next.js', 'TensorFlow'],
    link: '#',
  },
  {
    name: 'School ERP Suite',
    description:
      'End-to-end education management — admissions, attendance, timetabling, fees and parent engagement.',
    image: '/products/school-erp.png',
    tags: ['ERP', 'React', 'PostgreSQL', 'Node.js'],
    link: '#',
  },
  {
    name: 'Workforce Tracker',
    description:
      'Realtime workforce visibility with geolocation, shift scheduling and productivity analytics.',
    image: '/products/workforce-tracker.png',
    tags: ['Tracking', 'Mobile', 'Realtime', 'AWS'],
    link: '#',
  },
  {
    name: 'Asset Management Platform',
    description:
      'Full asset lifecycle — inventory, maintenance scheduling, depreciation and QR-based tracking.',
    image: '/products/asset-management.png',
    tags: ['Enterprise', 'Cloud', 'Analytics', 'Docker'],
    link: '#',
  },
  {
    name: 'Logistics Monitoring System',
    description:
      'Live fleet and shipment monitoring with route optimization, ETAs and warehouse orchestration.',
    image: '/products/logistics-monitoring.png',
    tags: ['Logistics', 'Maps', 'IoT', 'Python'],
    link: '#',
  },
]

/* -------------------------------- Industries -------------------------------- */
export interface Industry {
  name: string
  description: string
  icon: LucideIcon
}

export const industries: Industry[] = [
  { name: 'Agriculture', description: 'Precision farming & crop intelligence', icon: Sprout },
  { name: 'Education', description: 'Smart campuses & learning platforms', icon: GraduationCap },
  { name: 'Logistics', description: 'Fleet, freight & supply chain', icon: Truck },
  { name: 'Retail', description: 'Commerce, POS & inventory', icon: ShoppingBag },
  { name: 'Manufacturing', description: 'Industry 4.0 & shop-floor automation', icon: Factory },
  { name: 'Healthcare', description: 'Clinical systems & patient analytics', icon: HeartPulse },
]

/* ------------------------------- Technologies ------------------------------- */
export const technologies: string[] = [
  'Next.js',
  'React',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
  'AWS',
  'TensorFlow',
]

/* -------------------------------- Partnerships ------------------------------ */
export const partners: string[] = [
  'Vercel',
  'AWS',
  'Google Cloud',
  'Microsoft Azure',
  'NVIDIA',
  'MongoDB',
  'Stripe',
  'OpenAI',
  'Docker',
  'Cloudflare',
]

/* ----------------------------- Featured Projects ---------------------------- */
export interface Project {
  title: string
  category: string
  description: string
  image: string
  year: string
}

export const projects: Project[] = [
  {
    title: 'Precision Agriculture Network',
    category: 'AI · IoT',
    description:
      'A nationwide sensor grid feeding ML models that cut crop loss by 32% across partner farms.',
    image: '/projects/precision-agriculture.png',
    year: '2025',
  },
  {
    title: 'Smart Logistics Backbone',
    category: 'Tracking · Cloud',
    description:
      'Realtime fleet orchestration platform handling 40k+ daily shipments with sub-second updates.',
    image: '/projects/smart-logistics.png',
    year: '2024',
  },
  {
    title: 'Enterprise ERP Rollout',
    category: 'ERP · Automation',
    description:
      'Unified operations for a multi-site enterprise, automating finance, HR and inventory workflows.',
    image: '/projects/enterprise-erp.png',
    year: '2024',
  },
  {
    title: 'Healthcare AI Analytics',
    category: 'AI · Analytics',
    description:
      'Patient-flow prediction and diagnostics support deployed across a regional hospital network.',
    image: '/projects/healthcare-ai.png',
    year: '2023',
  },
]

/* --------------------------------- Nav links -------------------------------- */
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Projects', href: '#projects' },
]
