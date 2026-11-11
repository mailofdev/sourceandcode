import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import videoSrc from "../assets/IMG_0998.MP4";
import poster from "../assets/mentor-intro.jpg";
import { cn } from "../lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function MentorVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setStarted(true);
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <figure className={cn("mx-auto w-full max-w-xl lg:max-w-none", className)}>
      <div className="relative aspect-video overflow-hidden rounded-[1.4rem] border border-white/25 bg-black shadow-[0_30px_70px_-28px_rgba(0,0,0,0.8)] sm:rounded-[1.75rem]">
        {/* The file is portrait pixels stored sideways; -90deg turns the mentor upright. */}
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          preload="metadata"
          muted={muted}
          style={{ width: "56.25%", height: "177.78%" }}
          className={cn(
            "absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90 object-cover",
            !started && "opacity-0",
          )}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        />

        {!started && (
          <button
            type="button"
            onClick={toggle}
            className="absolute inset-0 z-10"
            aria-label="Play introduction from your mentor"
          >
            <img src={poster} alt="" className="h-full w-full object-cover" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)]">
              <Play className="ml-1 h-7 w-7" />
            </span>
          </button>
        )}

        {started && (
          <button
            type="button"
            onClick={toggle}
            className="absolute inset-x-0 top-0 bottom-14 z-10"
            aria-label={playing ? "Pause video" : "Play video"}
          />
        )}

        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-1.5 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-2 pb-2 pt-8 sm:gap-2 sm:px-3 sm:pb-3">
          <button
            type="button"
            onClick={toggle}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/15"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
          </button>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(current, duration || 0)}
            aria-label="Seek"
            disabled={!duration}
            className="h-11 min-w-0 flex-1 cursor-pointer accent-violet-300 disabled:opacity-50"
            onChange={(event) => {
              const next = Number(event.target.value);
              if (videoRef.current) videoRef.current.currentTime = next;
              setCurrent(next);
            }}
          />
          <span className="shrink-0 text-[11px] font-semibold tabular-nums text-white/90">
            {formatTime(current)} / {formatTime(duration)}
          </span>
          <button
            type="button"
            onClick={() => setMuted((value) => !value)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/15"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <figcaption className="mt-3 text-balance text-center text-xs font-semibold tracking-wide text-white/80">
        Intro from Siddhant — what this batch covers and how to get started
      </figcaption>
    </figure>
  );
}
