import Image from 'next/image';

export function MountainDivider({ label }: { label?: string }) {
  return (
    <div className="my-14 sm:my-20 flex flex-col items-center">
      <div className="w-full max-w-[22rem] sm:max-w-[32rem]">
        <Image
          src="/images/mountain-divider-clean.png"
          alt=""
          width={2156}
          height={465}
          sizes="(min-width: 640px) 32rem, 26rem"
          className="w-full h-auto select-none"
        />
      </div>

      {label && (
        <p className="divider-leaf mt-6">
          <span aria-hidden>&#10042;</span>
          <span>{label}</span>
          <span aria-hidden>&#10042;</span>
        </p>
      )}
    </div>
  );
}
