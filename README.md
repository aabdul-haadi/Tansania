# Serengeti Dreams | Infrastructure Registry & AI Advisor

**Serengeti Dreams (Tansania Reiseabenteuer SDL)** is a high-performance, prestige-focused travel ecosystem built for an Egypt-based luxury agency specializing in Tanzania. The platform is designed to scale to **500+ pages**, leveraging autonomous intelligence and real-time registry monitoring.

## 🏛️ Core Architecture: The 500+ Page Scale

The application uses a **Registry-First Architecture** to manage a vast content library including 8 Country Hubs, 100+ Journal Entries, and a massive Safari Catalog.

### Key Directories
- `src/app/`: Next.js 15 App Router. Contains the primary routes.
  - `(public)`: Home, Safaris, Blog, National Parks, Destinations, and Legal.
  - `admin/`: The **Command Center** for registry management and AI auditing.
- `src/components/`: Modularized by domain for extreme scalability.
  - `blog/`: Editorial components and the integrated inquiry protocol.
  - `home/`: High-density cinematic landing sections.
  - `packages/`: Global master cards for safari listings.
  - `layout/`: Responsive prestige navigation and footer registries.
  - `ai/`: Floating concierge and advisor interfaces.
- `src/ai/`: Powered by **Firebase Genkit**.
  - `flows/`: RAG-based trip advisor, SEO audit engine, and itinerary architect.
- `src/firebase/`: Robust synchronization layer.
  - `firestore/`: Custom hooks (`useCollection`, `useDoc`) with permission error emitters.
  - `non-blocking/`: Optimized mutation patterns for instant UI response.

## 🧠 Autonomous Intelligence (AI)

The system features an **Autonomous Sync Protocol** where the AI Advisor "learns" in real-time.

- **RAG-Driven Concierge**: The `askTripAdvisor` flow performs a server-side handshake with Firestore before every response to provide factual, catalog-based data.
- **AI Site Planner**: Located in `/admin/ai-planner`, this tool audits connectivity between the 500+ pages, suggesting internal links and SEO metadata improvements.
- **Itinerary Architect**: A bespoke engine that generates 15-day luxury plans based on real-time wildlife and regional context.

## 🎨 Design Standard: Montserrat Bold Prestige

The UI strictly follows a **High-Density Prestige Standard**:
- **Typography**: Strictly **Montserrat Bold** (700/900).
- **No Italics**: A hard constraint to maintain an authoritative, architectural feel.
- **Visuals**: Rounded corners (`rounded-[2.5rem]`), deep shadows, and cinematic mosaics.
- **Color Palette**: 
  - `Primary`: Serengeti Orange (#e3510d)
  - `Secondary`: Charcoal Night (#141414)
  - `Background`: Paper Mist (#fdfcfb)

## 🛠️ Technical Protocols

1.  **Hydration Safety**: Every interactive trigger uses `suppressHydrationWarning` and client-side mounting guards to prevent mismatches from browser extensions.
2.  **Registry Handshake**: The Admin Layout implements a 5-second handshake to ensure Firestore security rules are synchronized before data fetches.
3.  **Non-Blocking Mutations**: All data writes (Inquiries, Bookings, Settings) use non-blocking patterns to keep the UI fluid and responsive.
4.  **Integrated Inquiry Protocol**: A specialized iframe-based form system with dynamic resizing for seamless lead generation.

## 🚀 Deployment & Operations

The site is configured for **Firebase App Hosting** and uses **Next.js ISR (Incremental Static Regeneration)** for the Blog and Safari Catalog to ensure ultra-fast load times even with 500+ active paths.

---
**Serengeti Dreams Operational Registry** | *Established 2014 • Digital Core 2025*
