# **App Name**: Serengeti Dreams

## Core Features:

- Package Catalog: Browse safari packages with filtering (duration, price, comfort, season, category) and sorting (price, duration, popularity, rating).
- Detailed Package View: View detailed safari package information: itinerary, inclusions, exclusions, accommodation, add-ons, pricing.
- Booking System: Book a safari package, select dates, travelers, add-ons, and calculate the total price. Send confirmation email to user and notify admin.
- Admin Dashboard: Admin interface for managing packages (CRUD), bookings (status workflow, CSV export), inquiries, blog posts, and reviews.
- Trip Planner Inquiry: Submit a multi-step trip planner inquiry form. Stores lead in Firestore and sends a confirmation email to the user + notification to the admin.
- AI Planner: Internal Admin module. Analyzes site data to keep a Site Knowledge Graph. It then uses that graph as a tool to suggest navigation updates, internal linking, breadcrumbs map, sitemap entries, and missing metadata or broken link detection.
- User Authentication: User registration, login, and dashboard for managing bookings and inquiries.

## Style Guidelines:

- Primary color: Desert sand (#F0E68C) to evoke the warmth and natural beauty of the safari experience. Hex code: #F0E68C
- Background color: Deep night blue (#22425B), desaturated at 20% brightness, reminiscent of the clear African night sky. Hex code: #22425B
- Accent color: Oasis teal (#48D1CC), to bring freshness and visual interest analogous to sand; 30 degrees 'left' on the color wheel and more saturated/brighter than primary. Hex code: #48D1CC
- Headline font: 'Playfair' (serif) for elegant headings. Body font: 'PT Sans' (sans-serif) for clean and readable text.
- Use icons with accents of compasses, suns, and dunes (avoiding pyramids), consistent with the safari theme. Use 'lucide-react' library.
- Spacious layout with premium whitespace and 2xl rounded cards, soft shadows for a luxury feel. Section dividers inspired by desert horizons/dunes.
- Subtle motion effects (fades, hover micro-interactions, smooth transitions) using Framer Motion.