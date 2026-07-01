import React from "react";
import { BookUserIcon } from "lucide-react";
import Title from "./Title";

function Testimonials() {
  const testimonials = [
    {
      text: "I landed three interviews within a week of using this AI resume builder. It rewrote my bullet points to highlight impact – not just duties.",
      name: "Cristofer Levin",
      role: "Frontend engineer",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      text: "The AI suggestions saved me hours of tweaking. My resume now matches job descriptions perfectly, and I finally get past the ATS.",
      name: "Rohan Mehta",
      role: "Startup founder",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      text: "I was skeptical at first, but the AI generated better bullet points than I ever could. My resume feels polished and confident now.",
      name: "Jason Kim",
      role: "Product designer",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      text: "The ability to tailor my resume to each role in seconds is a game-changer. I’ve already received two interview invites this month.",
      name: "Alex Turner",
      role: "Full stack developer",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      text: "This tool helped me reframe my experience into measurable achievements. The AI didn’t just format – it actually improved the content.",
      name: "Sofia Martinez",
      role: "UX designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      text: "I’ve used other resume builders, but this one actually understands what recruiters look for. My application response rate doubled.",
      name: "Daniel Wong",
      role: "UI designer",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ];

  const rows = [
    { start: 0, end: 3, className: "animate-scroll" },
    { start: 3, end: 6, className: "animate-scroll-reverse" },
  ];

  const renderCard = (testimonial, index, rowIndex) => {
    // Generate star rating (5 stars, filled based on rating)
    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${i < rating ? "text-green-400" : "text-gray-300"}`}
          aria-hidden="true"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      ));
    };

    return (
      <div
        key={`${index}-${rowIndex}`}
        className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 shrink-0 w-72 sm:w-80 lg:w-96"
      >
        <div className="flex mb-3 space-x-0.5">
          {renderStars(testimonial.rating || 5)}
        </div>
        <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-5 line-clamp-4">
          {testimonial.text}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-11 h-11 rounded-full object-cover border border-slate-100"
          />
          <div>
            <p className="font-semibold text-neutral-800 text-sm">
              {testimonial.name}
            </p>
            <p className="text-neutral-500 text-xs md:text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="testimonials"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 border border-green-200 rounded-full px-4 py-1">
        <BookUserIcon className="size-4.5 stroke-green-600" />
        <span>Testimonials</span>
      </div>
      <Title
        title="Don't just take our words."
        description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."
      />

      <section className="bg-[#FAFAFA] py-16 px-4 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-neutral-100 border border-neutral-400 rounded-full px-4 py-1 mb-3">
              <span className="text-xs text-neutral-600">Loved by clients</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 mb-4">
              What people are saying
            </h2>
            <p className="text-neutral-600 text-sm max-w-96 mx-auto">
              Real feedback from founders, developers and teams building
              production-ready products.
            </p>
          </div>

          <div className="space-y-6">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="relative overflow-hidden">
                {/* Fade overlays – now using bg-linear-to-r/l (Tailwind v4) */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-linear-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-linear-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

                <div
                  className={`flex gap-6 ${row.className} will-change-transform`}
                  style={{ width: "max-content" }}
                >
                  {[
                    ...testimonials.slice(row.start, row.end),
                    ...testimonials.slice(row.start, row.end),
                  ].map((testimonial, index) =>
                    renderCard(testimonial, index, rowIndex),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyframe animations – stays compatible */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scrollReverse 20s linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
