import Image from "next/image";
import config from "@/config/site.config";

export default function Logo({ markSize = 40, showWordmark = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={config.site.logoMark}
        alt=""
        width={markSize}
        height={markSize}
        className="h-10 w-10 shrink-0 object-contain"
        style={{ width: markSize, height: markSize }}
        priority
      />
      {showWordmark ? (
        <span className="font-display text-[1.05rem] font-extrabold leading-none tracking-tight text-navy sm:text-lg">
          Sourceandcod
          <span className="gradient-text">E</span>
        </span>
      ) : null}
    </span>
  );
}
