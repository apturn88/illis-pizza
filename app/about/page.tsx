import Image from 'next/image';
import Link from 'next/link';
import { MountainDivider } from '@/components/MountainDivider';

export const metadata = {
  title: "Our Story — Illi's Pizza",
  description:
    "How a small wood-fired pizzeria came to call Belmont home. Dough, mountains, neighbours, and a 900-degree oven.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-charcoal-900 text-crust-50">
        <div className="absolute inset-0 -z-10 opacity-50">
          <Image
            src="/images/cheese-pull.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/85 via-charcoal-900/70 to-charcoal-900" />
        </div>
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-24 sm:py-36 text-center">
          <p className="divider-leaf justify-center text-crust-200/80">
            &#10042; Our Story &#10042;
          </p>
          <h1 className="mt-5 sm:mt-6 font-display text-[2.1rem] leading-[1.1] sm:text-6xl sm:leading-tight">
            A small oven, a long ferment, and a corner of Belmont we call home.
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-crust-100/85 leading-relaxed">
            We opened Illi&rsquo;s in 2024 with a simple idea: cook the kind of pizza we&rsquo;d
            want for ourselves &mdash; honest, unrushed, and made with what&rsquo;s grown nearby.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 sm:mt-20 space-y-8 sm:space-y-10 text-base sm:text-lg leading-relaxed text-charcoal-800">
        <p>
          The name comes from a kitchen nickname &mdash; the kind that sticks because nobody can
          quite remember why. The mountains in our logo come from where we grew up, half an
          hour west, where the Rockies start to crowd the horizon. The pizza in between is the
          part we&rsquo;ve been working on for about a decade.
        </p>
        <p>
          Our dough is mixed late at night and rests for 72 hours before it ever sees heat.
          That&rsquo;s where the chew comes from, and the leopard spotting on the cornicione,
          and the way a good slice folds without cracking. There&rsquo;s no shortcut for time.
        </p>
        <p>
          We bake in a wood-fired oven that runs around 900&deg;F. A pie goes in and comes out
          in about ninety seconds. The crust is soft in the middle and crisp on the edge, the
          cheese is just-melted, the basil hasn&rsquo;t had time to lose its colour. That&rsquo;s
          the window we&rsquo;re after.
        </p>
      </section>

      <MountainDivider label="What we believe" />

      {/* TENETS */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <Tenet
            title="A short menu, done right"
            body="Six pies, a few salads, a few sides. We&rsquo;d rather make a small list well than a long list okay."
          />
          <Tenet
            title="Ingredients with a name"
            body="Cheese from a dairy we&rsquo;ve visited. Tomatoes that ripened on a vine. Charcuterie from Calgary butchers who know our names."
          />
          <Tenet
            title="The neighbourhood comes first"
            body="Walk-ins, kids, large parties, takeout in the rain. Belmont is the room we&rsquo;re cooking for. Everyone else is welcome too."
          />
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 mt-16 sm:mt-24">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/pepperoni-mushroom-mountain.png"
              alt="Pepperoni and mushroom pie"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/storefront.png"
              alt="Illi's Pizza storefront"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 sm:mt-24 text-center">
        <blockquote className="font-display text-2xl sm:text-4xl text-brick-700 leading-snug">
          &ldquo;Make food you&rsquo;d want to eat on a Tuesday, not just on your birthday.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm tracking-widest uppercase text-charcoal-700/70">
          &mdash; the rule we cook by
        </p>
      </section>

      {/* CTA */}
      <section className="mt-16 sm:mt-24 bg-brick-700 text-crust-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-5xl">
            Come say hi.
          </h2>
          <p className="mt-4 text-crust-100/85">
            We&rsquo;re open Tuesday through Sunday in Belmont, SW Calgary.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-crust-50 text-brick-700 hover:bg-crust-100 px-7 py-3.5 text-sm tracking-widest uppercase transition"
            >
              Plan a visit
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-crust-50/40 hover:border-crust-50 px-7 py-3.5 text-sm tracking-widest uppercase transition"
            >
              See the menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Tenet({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <span className="block h-px w-12 bg-brick-700 mb-5" aria-hidden />
      <h3 className="font-display text-2xl text-brick-700">{title}</h3>
      <p
        className="mt-3 text-charcoal-700/90 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
