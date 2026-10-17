const paths = {
  growth: "M3 17l6-6 4 4 8-8M14 7h7v7",
  ai: "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M7 7h10v10H7z",
  rocket: "M12 19c-3 0-6-2-7-5 2 0 4-1 5-3 2 1 4 1 6 0 1 2 3 3 5 3-1 3-4 5-7 5zm0 0v3M9 22h6",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  mentor: "M16 19v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1M10 12a3 3 0 100-6 3 3 0 000 6zM20 19v-1a3 3 0 00-2.2-2.9M16 6.1a3 3 0 010 5.8",
  project: "M8 7V5h8v2M4 7h16v12H4zM8 12h8",
  interview: "M5 6h14v9H8l-3 3V6z",
  path: "M8 6h11M8 12h11M8 18h11M5 6h.01M5 12h.01M5 18h.01",
  chat: "M5 6h14v9H8l-3 3V6zM8 10h8M8 13h5",
  compass: "M12 21a9 9 0 100-18 9 9 0 000 18zM14.5 9.5l-1.2 3.8-3.8 1.2 1.2-3.8 3.8-1.2z",
  trophy: "M8 4h8v4a4 4 0 01-8 0V4zM6 5H4a3 3 0 003 4M18 5h2a3 3 0 01-3 4M9 20h6M12 12v4M9 20a3 3 0 016 0",
  folder: "M3 7h6l2 2h10v10H3V7z",
  external: "M14 5h5v5M19 5l-9 9M10 6H6v12h12v-4",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  chevron: "M6 9l6 6 6-6",
};

export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={paths[name] || paths.path} />
    </svg>
  );
}
