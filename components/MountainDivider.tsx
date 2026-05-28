export function MountainDivider({ label }: { label?: string }) {
  return (
    <div className="my-20 flex flex-col items-center" aria-hidden={!label}>
      <svg
        viewBox="0 0 400 70"
        className="h-12 w-auto text-charcoal-800/70"
        fill="currentColor"
        role="presentation"
      >
        {/* back range — lighter */}
        <path
          opacity="0.45"
          d="M0 60 L60 38 L95 50 L130 28 L165 46 L205 22 L240 44 L275 30 L315 48 L350 36 L400 54 L400 70 L0 70 Z"
        />
        {/* front range — darker */}
        <path d="M0 64 L40 50 L75 58 L115 40 L150 56 L185 36 L215 52 L250 38 L290 56 L325 44 L365 58 L400 50 L400 70 L0 70 Z" />
        {/* tiny pines */}
        <g opacity="0.6">
          <path d="M18 70 L21 60 L24 70 Z M22 70 L25 58 L28 70 Z" />
          <path d="M375 70 L378 60 L381 70 Z M379 70 L382 58 L385 70 Z" />
        </g>
      </svg>

      {label && (
        <p className="divider-leaf mt-5">
          <span aria-hidden>&#10042;</span>
          <span>{label}</span>
          <span aria-hidden>&#10042;</span>
        </p>
      )}
    </div>
  );
}
