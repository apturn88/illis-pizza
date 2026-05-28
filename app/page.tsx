import Image from 'next/image';
import Link from 'next/link';
import { MountainDivider } from '@/components/MountainDivider';

const pies = [
  {
    name: 'Margherita',
    blurb: 'San Marzano, fior di latte, basil, Sicilian olive oil. The classic, the way it should be.',
    price: '$18',
  },
  {
    name: 'The Belmont',
    blurb: 'Spicy soppressata, hot honey, fresh mozzarella, charred chili. Our neighbourhood signature.',
    price: '$22',
  },
  {
    name: 'Foothill Funghi',
    blurb: 'Roasted cremini & oyster mushrooms, garlic confit, thyme, grana padano, truffle oil.',
    price: '$21',
  },
  {
    name: 'Chinook',
    blurb: 'Smoked mozzarella, double pepperoni, roasted red pepper, chili flake. Warm wind in pie form.',
    price: '$20',
  },
  {
    name: 'Bow Valley Bianca',
    blurb: 'White pie, ricotta, lemon zest, prosciutto, arugula, cracked pepper. Bright and savoury.',
    price: '$23',
  },
  {
    name: 'Calabrese',
    blurb: 'House nduja, caramelized onion, fior di latte, basil. A long, slow burn — in a good way.',
    price: '$22',
  },
];

const values = [
  {
    title: 'Dough made daily',
    body: '72-hour cold ferment. Just flour, water, salt, and time.',
  },
  {
    title: 'Local ingredients',
    body: 'Alberta dairy, vegetables from Foothills growers, charcuterie from Calgary butchers.',
  },
  {
    title: 'Wood-fired',
    body: '900&deg;F oven, 90-second bake. Soft, leopard-spotted crust the way Naples intended.',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-pizza-mountain.png"
            alt="Wood-fired pizza in front of a mountain backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/40 to-charcoal-900/85" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-40 text-crust-50">
          <p className="text-[0.7rem] sm:text-sm tracking-[0.35em] sm:tracking-[0.4em] uppercase text-crust-200/80">
            Belmont &middot; Calgary &middot; Alberta
          </p>
          <h1 className="mt-4 sm:mt-5 font-display text-[2.4rem] leading-[1.05] sm:text-7xl max-w-3xl">
            Pizza worth coming&nbsp;home&nbsp;for.
          </h1>
          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-crust-100/85 leading-relaxed">
            Naples-style pies, baked in a wood-fired oven, made with ingredients from the
            foothills we live in. A neighbourhood spot in Belmont, built for slow Friday nights
            and quick weekday slices.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact#order"
              className="inline-flex items-center justify-center rounded-full bg-brick-600 hover:bg-brick-500 text-crust-50 px-7 py-3.5 text-sm tracking-widest uppercase transition shadow-lg shadow-charcoal-900/30"
            >
              Order pickup
            </Link>
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-crust-50/50 hover:border-crust-50 text-crust-50 px-7 py-3.5 text-sm tracking-widest uppercase transition"
            >
              See the menu
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="bg-brick-700 text-crust-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-14 grid gap-8 sm:gap-10 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col">
              <span className="text-xs tracking-[0.3em] uppercase text-crust-100/70">
                &mdash; The Illi&rsquo;s Way
              </span>
              <h3 className="mt-2 font-display text-2xl">{v.title}</h3>
              <p
                className="mt-2 text-crust-100/90 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: v.body }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE PIES */}
      <section id="menu" className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-20 scroll-mt-24">
        <div className="flex flex-col items-center text-center">
          <span className="divider-leaf">&#10042; Our pies &#10042;</span>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl text-brick-700">
            Six pies, made with intention.
          </h2>
          <p className="mt-4 max-w-2xl text-charcoal-700/90">
            A short menu, on purpose. Every pie is dialed in &mdash; no fillers, no shortcuts.
            Gluten-free crust available for any pie (+$3).
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-x-10 gap-y-9 sm:gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {pies.map((p) => (
            <article key={p.name} className="border-t border-crust-200 pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-charcoal-900">{p.name}</h3>
                <span className="font-display text-xl text-brick-700">{p.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-700/85">{p.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <MountainDivider label="From our oven" />

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/cheese-pull.png"
              alt="Cheese pull from a fresh slice"
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:translate-y-8">
            <Image
              src="/images/pepperoni-mushroom-mountain.png"
              alt="Pepperoni and mushroom pie"
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/packaging.png"
              alt="Illi's Pizza takeout packaging"
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* STOREFRONT CALLOUT */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 mt-16 sm:mt-24">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
            <Image
              src="/images/storefront.png"
              alt="Illi's Pizza storefront in Belmont, Calgary"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="divider-leaf">&#10042; Visit us &#10042;</span>
            <h2 className="mt-5 font-display text-3xl sm:text-5xl text-brick-700">
              A corner of Belmont, with the lights on.
            </h2>
            <p className="mt-5 text-charcoal-700/90 leading-relaxed">
              We&rsquo;re tucked into Belmont&rsquo;s main street, between the bakery and the
              bookstore. Warm wood, soft light, a counter big enough to lean on, and an oven
              that&rsquo;s always going. Walk in, call ahead, or order for pickup &mdash; we&rsquo;re
              ready when you are.
            </p>
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brick-700 hover:bg-brick-800 text-crust-50 px-7 py-3.5 text-sm tracking-widest uppercase transition"
              >
                Hours &amp; directions
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center sm:justify-start text-sm tracking-widest uppercase text-brick-700 hover:text-brick-800 underline underline-offset-8 decoration-1 py-3.5"
              >
                Our story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="mt-16 sm:mt-24 bg-charcoal-900 text-crust-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <p className="divider-leaf justify-center text-crust-200/80">
            &#10042; Friday night &#10042;
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl">
            Come for the pizza. Stay for the table.
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-crust-100/80">
            Reservations aren&rsquo;t required, but on weekends they&rsquo;re wise. Six tops or
            larger, give us a call.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brick-600 hover:bg-brick-500 text-crust-50 px-7 py-3.5 text-sm tracking-widest uppercase transition"
            >
              Book a table
            </Link>
            <a
              href="tel:+14035550142"
              className="inline-flex items-center justify-center rounded-full border border-crust-50/40 hover:border-crust-50 px-7 py-3.5 text-sm tracking-widest uppercase transition"
            >
              (403) 555&#8209;0142
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
