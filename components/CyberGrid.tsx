export default function CyberGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(244,114,182,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(244,114,182,0.6)_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div className="animate-scan-line absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-fuchsia-400/10 to-transparent" />
    </div>
  );
}
