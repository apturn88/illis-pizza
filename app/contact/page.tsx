import Image from 'next/image';
import { MountainDivider } from '@/components/MountainDivider';
import { ContactForm } from './ContactForm';

export const metadata = {
  title: "Visit — Illi's Pizza",
  description:
    "Illi's Pizza in Belmont, Calgary. Hours, address, phone, and a message form. Pizza Worth Coming Home For.",
};

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-charcoal-900 text-crust-50">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/storefront.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/55 to-charcoal-900/95" />
        </div>
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-28 sm:py-36 text-center">
          <p className="divider-leaf justify-center text-crust-200/80">
            &#10042; Visit &#10042;
          </p>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl leading-tight">
            Find us in Belmont.
          </h1>
          <p className="mt-5 text-crust-100/85">
            We&rsquo;re on the corner of Belmont Ave and 19 St SW. Look for the red awning and
            the string lights.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="divider-leaf">&#10042; Where &amp; When &#10042;</span>
          <h2 className="mt-5 font-display text-4xl text-brick-700">Hours &amp; address</h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 text-charcoal-800">
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-charcoal-700/60">Address</h3>
              <p className="mt-3 leading-7">
                300 Belmont Ave SW<br />
                Calgary, AB T2X 4Z9
              </p>
              <a
                href="https://maps.google.com/?q=Belmont+SW+Calgary+AB"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-brick-700 hover:text-brick-800 underline underline-offset-4"
              >
                Get directions &rarr;
              </a>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-charcoal-700/60">Contact</h3>
              <p className="mt-3 leading-7">
                <a href="tel:+14035550142" className="hover:text-brick-700">(403) 555&#8209;0142</a><br />
                <a href="mailto:ciao@illispizza.ca" className="hover:text-brick-700">ciao@illispizza.ca</a>
              </p>
            </div>

            <div className="sm:col-span-2">
              <h3 className="text-xs tracking-[0.3em] uppercase text-charcoal-700/60">Hours</h3>
              <dl className="mt-3 grid grid-cols-2 gap-y-1.5 max-w-sm">
                <dt>Monday</dt><dd className="text-charcoal-700/60">Closed</dd>
                <dt>Tuesday</dt><dd>4 – 9 pm</dd>
                <dt>Wednesday</dt><dd>4 – 9 pm</dd>
                <dt>Thursday</dt><dd>4 – 9 pm</dd>
                <dt>Friday</dt><dd>12 – 10 pm</dd>
                <dt>Saturday</dt><dd>12 – 10 pm</dd>
                <dt>Sunday</dt><dd>12 – 8 pm</dd>
              </dl>
            </div>
          </div>

          <div id="order" className="mt-12 rounded-md border border-crust-200 bg-crust-100/40 p-6">
            <h3 className="font-display text-2xl text-brick-700">Order pickup</h3>
            <p className="mt-2 text-charcoal-700/90 text-sm leading-relaxed">
              Call us for pickup orders &mdash; we don&rsquo;t take orders by text or DM, so we
              don&rsquo;t miss one. Allow 20&ndash;30 minutes on weekends.
            </p>
            <a
              href="tel:+14035550142"
              className="mt-5 inline-flex items-center rounded-full bg-brick-700 hover:bg-brick-800 text-crust-50 px-6 py-3 text-xs tracking-widest uppercase transition"
            >
              Call (403) 555&#8209;0142
            </a>
          </div>
        </div>

        {/* FORM */}
        <div>
          <span className="divider-leaf">&#10042; Drop us a line &#10042;</span>
          <h2 className="mt-5 font-display text-4xl text-brick-700">Send a message</h2>
          <p className="mt-3 text-charcoal-700/90">
            Private events, large orders, feedback, or just a hello &mdash; we read everything.
          </p>
          <ContactForm />
        </div>
      </section>

      <MountainDivider label="Find us" />

      {/* MAP */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-sm border border-crust-200">
          <iframe
            title="Map of Belmont, Calgary"
            src="https://www.google.com/maps?q=Belmont+SW+Calgary+AB&output=embed"
            className="w-full h-[420px] block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 bg-charcoal-900 text-crust-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">See you soon.</h2>
          <p className="mt-4 text-crust-100/80">Pizza Worth Coming Home For.</p>
        </div>
      </section>
    </>
  );
}
