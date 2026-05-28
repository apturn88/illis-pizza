import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-crust-100 mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-circle.png"
            alt="Illi's Pizza"
            width={88}
            height={88}
            className="h-20 w-20"
          />
          <p className="mt-5 font-display text-2xl text-crust-50">
            Pizza Worth Coming Home For.
          </p>
          <p className="mt-3 text-sm text-crust-200/70 max-w-xs">
            Neighbourhood pizza, made with heart. Belmont, Calgary, Alberta.
          </p>
        </div>

        <div className="text-sm leading-7">
          <h3 className="font-display text-base tracking-wider uppercase text-crust-50 mb-3">
            Find Us
          </h3>
          <p className="text-crust-200/80">
            300 Belmont Ave SW<br />
            Calgary, AB T2X 4Z9
          </p>
          <p className="mt-3 text-crust-200/80">
            (403) 555&#8209;0142<br />
            ciao@illispizza.ca
          </p>
        </div>

        <div className="text-sm leading-7">
          <h3 className="font-display text-base tracking-wider uppercase text-crust-50 mb-3">
            Hours
          </h3>
          <dl className="grid grid-cols-2 gap-y-1 text-crust-200/80 max-w-xs">
            <dt>Tue – Thu</dt><dd>4 – 9 pm</dd>
            <dt>Fri – Sat</dt><dd>12 – 10 pm</dd>
            <dt>Sunday</dt><dd>12 – 8 pm</dd>
            <dt>Monday</dt><dd>Closed</dd>
          </dl>
        </div>
      </div>

      <div className="border-t border-charcoal-700/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-crust-200/60 gap-3">
          <p>&copy; {new Date().getFullYear()} Illi&rsquo;s Pizza. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-crust-50">Home</Link>
            <Link href="/about" className="hover:text-crust-50">Our Story</Link>
            <Link href="/contact" className="hover:text-crust-50">Visit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
