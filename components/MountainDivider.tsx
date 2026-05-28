import Image from 'next/image';

export function MountainDivider({ label }: { label?: string }) {
  return (
    <div className="relative flex flex-col items-center my-16">
      <div className="w-full max-w-md opacity-70">
        <Image
          src="/images/mountain-divider.png"
          alt=""
          width={1500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      {label && <p className="divider-leaf mt-4">&#10042; {label} &#10042;</p>}
    </div>
  );
}
