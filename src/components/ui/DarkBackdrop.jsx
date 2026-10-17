export default function DarkBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d1030] via-[#161432] to-[#2a1b5e]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#2196f3]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-[#7b2ff7]/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#fb8c00]/20 blur-3xl" />
    </>
  );
}
