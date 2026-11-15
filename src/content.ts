/**
 * Photography is temporary stand-in imagery so the layout can be reviewed.
 * Replace the files in /public/images without changing these paths.
 * The logo files in /public/brand are cropped from the original lockup.
 */

/** Kenyan number in international form. Country code +254, trunk zero removed. */
const whatsappNumber = "254727503952";

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  email: "scenedelafusion@gmail.com",
  instagramHandle: "@scene.delafusion.grp",
  instagramUrl: "https://www.instagram.com/scene.delafusion.grp/",
  phoneDisplay: "+254 727 503 952",
  whatsappUrl: whatsappLink(
    "Hello Scène de la Fusion, I would like to enquire about an event.",
  ),
  mailto:
    "mailto:scenedelafusion@gmail.com?subject=Enquiry%20%E2%80%94%20Sc%C3%A8ne%20de%20la%20Fusion",
};

export const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#experiences", id: "experiences", label: "Experiences" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Event curation",
    copy: "Concepts and experiences designed from the first idea to the final guest.",
    image: "/images/gallery-plate.jpg",
    alt: "A plated dish being served at a candlelit dinner table",
  },
  {
    number: "02",
    title: "Hostessing",
    copy: "Poised, professional hosts who represent your brand with warmth and confidence.",
    image: "/images/gallery-people.jpg",
    alt: "Formal tailoring, composed and precise",
  },
  {
    number: "03",
    title: "Exhibit assistance",
    copy: "Smooth support at exhibitions, trade shows and activations, so your stand is always engaging.",
    image: "/images/exhibit.jpg",
    alt: "A presenter speaking with a seated group",
  },
  {
    number: "04",
    title: "Ushering",
    copy: "Seamless guest flow, seating and guidance, so everyone feels welcome.",
    image: "/images/ushering.jpg",
    alt: "Guests seated for a formal programme",
    focus: "82% center",
  },
  {
    number: "05",
    title: "Marketing & media",
    copy: "Campaigns and content that put your message in front of the right people.",
    image: "/images/media.jpg",
    alt: "A professional on a call, focused and composed",
  },
  {
    number: "06",
    title: "On-ground campaigns",
    copy: "Direct, face-to-face brand engagement that creates real connections.",
    image: "/images/campaign.jpg",
    alt: "Colleagues working together, face to face",
  },
  {
    number: "07",
    title: "Consultancy",
    copy: "Practical advice and planning to make your event or campaign work harder.",
    image: "/images/consultancy.jpg",
    alt: "A small group in discussion around a meeting table",
  },
] as const;

export const occasions = [
  {
    title: "Social",
    image: "/images/social.jpg",
    alt: "A long banquet table dressed in white with flowers down the centre",
    tone: "roman",
  },
  {
    title: "Corporate",
    image: "/images/corporate.jpg",
    alt: "A speaker presenting to a corporate audience",
    tone: "italic",
  },
  {
    title: "Political",
    image: "/images/political.jpg",
    alt: "A wide, formally lit auditorium prepared for a large gathering",
    tone: "roman",
  },
  {
    title: "Private",
    image: "/images/private.jpg",
    alt: "A dim dining room with dark wood, leather seating and warm lamps",
    tone: "italic",
  },
  {
    title: "VIP",
    image: "/images/gallery-glass.jpg",
    alt: "A finished cocktail in low, warm light",
    tone: "roman",
  },
] as const;

export const stages = [
  {
    number: "01",
    title: "Discover",
    copy: "We listen, understand your objectives and get to know your audience.",
  },
  {
    number: "02",
    title: "Create",
    copy: "We develop the concept, strategy and experience around your vision.",
  },
  {
    number: "03",
    title: "Execute",
    copy: "We coordinate the people, details and moving parts with precision.",
  },
  {
    number: "04",
    title: "Deliver",
    copy: "We bring everything together to create a memorable experience.",
  },
] as const;

export const reasons = [
  {
    number: "01",
    title: "Bespoke experiences",
    copy: "Every event is shaped around your vision, your audience and your goals.",
  },
  {
    number: "02",
    title: "Professional people",
    copy: "Hosts and teams who represent your brand with warmth and confidence.",
  },
  {
    number: "03",
    title: "Creative thinking",
    copy: "Concepts and experiences designed from the first idea to the final guest.",
  },
  {
    number: "04",
    title: "On-ground precision",
    copy: "People, details and moving parts coordinated so the experience holds.",
  },
  {
    number: "05",
    title: "Versatility",
    copy: "Social, corporate, political, private and VIP — one standard of care.",
  },
] as const;

export const gallery = [
  {
    src: "/images/gallery-gatherings.jpg",
    alt: "A long candlelit table set for an evening gathering",
    label: "Gatherings",
    className: "tile tile--tall",
  },
  {
    src: "/images/gallery-floral.jpg",
    alt: "A lush bouquet of garden roses and seasonal flowers",
    label: "Florals",
    className: "tile",
  },
  {
    src: "/images/gallery-table.jpg",
    alt: "A finished plate at a fine-dining table",
    label: "The table",
    className: "tile tile--tall",
  },
  {
    src: "/images/gallery-toast.jpg",
    alt: "A guest with a glass, dressed for the evening",
    label: "A toast",
    className: "tile",
  },
  {
    src: "/images/gallery-guests.jpg",
    alt: "Guests dressed for a formal celebration",
    label: "Guests",
    className: "tile tile--wide",
  },
  {
    src: "/images/gallery-detail.jpg",
    alt: "A coupe cocktail on a brass table",
    label: "Detail",
    className: "tile",
  },
  {
    src: "/images/gallery-pour.jpg",
    alt: "Red wine pouring into a glass",
    label: "The pour",
    className: "tile",
  },
  {
    src: "/images/gallery-presence.jpg",
    alt: "A man in a dark suit, composed in warm light",
    label: "Presence",
    className: "tile tile--wide",
  },
] as const;

export const serviceOptions = services.map((service) => service.title);
