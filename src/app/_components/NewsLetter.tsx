import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaLeaf,
  FaTruck,
  FaTag,
  FaArrowRight,
  FaApple,
  FaGooglePlay,
  FaStar,
  FaMobileScreenButton,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const perks: { icon: IconType; label: string }[] = [
  { icon: FaLeaf, label: "Fresh Picks Weekly" },
  { icon: FaTruck, label: "Free Delivery Codes" },
  { icon: FaTag, label: "Members-Only Deals" },
];

export default function NewsletterCard() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-10">
      {/* Blurred gradient blob: sits outside the card at its top-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 -z-10 h-72 w-72 max-w-[60vw] rounded-full bg-gradient-to-br from-[#ECFCF5] via-[#ECFCF5]/70 to-transparent blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-white via-white to-[#ECFCF5]/60 p-6 shadow-sm sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_auto_1fr] lg:gap-12">
          {/* Left: newsletter */}
          <div className="min-w-0">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 text-xl text-white shadow-lg shadow-green-500/30">
                <FaEnvelope />
              </span>
              <div className="min-w-0">
                <p className="text-base font-semibold text-green-600">Newsletter</p>
                <p className="text-sm text-gray-500">50,000+ subscribers</p>
              </div>
            </div>

            <h2 className="mt-7 text-[32px] leading-[1.15] font-bold tracking-tight text-gray-900 sm:text-[36px]">
              Get the Freshest Updates
              <br />
              <span className="text-green-600">Delivered Free</span>
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              Weekly recipes, seasonal offers &amp; exclusive member perks.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {perks.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex min-w-0 items-center gap-2.5 rounded-full border border-green-100 bg-white/80 py-2 pr-5 pl-2.5 text-sm font-medium text-gray-700 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                    <Icon />
                  </span>
                  <span className="truncate">{label}</span>
                </li>
              ))}
            </ul>

            <form className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="h-14 min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-5 text-base text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/15"
                />
                <button
                  type="submit"
                  className="flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 text-base font-semibold text-white shadow-lg shadow-green-500/30 transition hover:from-emerald-600 hover:to-green-700 focus-visible:ring-4 focus-visible:ring-green-500/30 focus-visible:outline-none"
                >
                  Subscribe
                  <FaArrowRight className="text-sm" />
                </button>
              </div>

              <p
                className="mt-4 flex items-center gap-2 text-sm text-gray-400"
                role="status"
              >
                <FaWandMagicSparkles className="shrink-0 text-amber-400" />
                <span className="break-words">Unsubscribe anytime. No spam, ever.</span>
              </p>
            </form>
          </div>

          {/* Divider */}
          <div className="hidden w-px bg-gray-200/80 lg:block" />

          {/* Right: mobile app card */}
          <div className="relative min-w-0 overflow-hidden rounded-3xl bg-gray-900 p-7 text-white shadow-xl lg:self-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 max-w-[70%] rounded-full bg-green-500/20 blur-3xl"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                <FaMobileScreenButton />
                Mobile App
              </span>

              <h3 className="mt-5 text-2xl leading-snug font-bold">
                Shop Faster on Our App
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Get app-exclusive deals &amp; 15% off your first order.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                >
                  <FaApple className="shrink-0 text-2xl" />
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[11px] text-gray-400">Download on</span>
                    <span className="block text-base font-semibold">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                >
                  <FaGooglePlay className="shrink-0 text-xl" />
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[11px] text-gray-400">Get it on</span>
                    <span className="block text-base font-semibold">Google Play</span>
                  </span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                <span className="flex shrink-0 gap-0.5 text-amber-400" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
                <span>4.9 · 100K+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}