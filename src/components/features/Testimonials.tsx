import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = ({
  direction,
  speed,
  testimonials,
}: {
  direction: "left" | "right";
  speed: "fast" | "normal" | "slow";
  testimonials: { quote: string; name: string; title: string }[];
}) => {
  return (
    <div>
      <InfiniteMovingCards
        items={testimonialsDemo}
        direction={direction}
        speed={speed}
      />
    </div>
  );
};

export default Testimonials;

const testimonialsDemo = [
  {
    id: 1,
    quote:
      "We partnered with Pantheon Digital Works for our mobile app and website, and they exceeded our expectations. The UI/UX is top-notch, and our users love the refreshed logo!",
    img: "/TestimonialLoadingWalla.webp",
    title: "Loading Walla",
  },
  {
    id: 2,
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    img: "/Testimonial1.webp",
    title: "Talent Stag",
  },
  {
    id: 3,
    quote:
      "We trusted Pantheon with our website and social media, and they’ve driven real engagement and steady traffic growth. True digital experts!",
    img: "/projects/17.webp",
    title: "Utility Choice",
  },
  {
    id: 4,
    quote:
      "The UI/UX overhaul and website Pantheon delivered for us is incredible. Student sign-ups are higher than ever thanks to the seamless experience.",
    img: "/projects/15.webp",
    title: "Select My College",
  },
  {
    id: 5,
    quote:
      "From branding to website to cloud deployment, Pantheon handled it all. Reliable, friendly, and technically sound—couldn’t ask for more.",
    img: "/connecting_voip.jpeg",
    title: "Connecting VoIP",
  },
  {
    id: 6,
    quote:
      "From branding to website to cloud deployment, Pantheon handled it all. Reliable, friendly, and technically sound—couldn’t ask for more.",
    img: "/dsmart-logo.webp",
    title: "DSmart",
  },
  {
    id: 7,
    quote:
      "Pantheon Digital Works’ eye for design elevated our magazine, made our logo memorable, and refreshed our digital presence beautifully.",
    img: "/projects/10.svg",
    title: "Thought Power",
  },
  {
    id: 8,
    quote:
      "Pantheon Digital Works transformed our mobile app idea into a sleek, intuitive platform. The UI/UX is user-friendly and on-brand—our customers love it!",
    img: "/pind-balluchi-logo.png",
    title: "Pindballuchi",
  },
  {
    id: 9,
    quote:
      "Pantheon Digital Works created a powerful logo and elegant brochure that perfectly represent our brand values. The designs have helped us leave a lasting impression with clients.",
    img: "/Prasidhi-logo.png",
    title: "Prasidhi Real Estate",
  },
];
