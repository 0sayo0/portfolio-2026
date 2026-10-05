const nodes = [
  { cx: 50, cy: 11, r: 1.35 },
  { cx: 79, cy: 29, r: 1.05 },
  { cx: 84, cy: 65, r: 1.2 },
  { cx: 50, cy: 87, r: 1.45 },
  { cx: 16, cy: 65, r: 1.05 },
  { cx: 21, cy: 29, r: 1.15 },
];

export function CoreSystem() {
  return (
    <div
      className="relative aspect-square w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-124"
      aria-hidden="true"
    >
      <div className="border-border-subtle absolute inset-0 rounded-full border" />
      <div className="border-border-subtle absolute inset-[17%] rounded-full border" />
      <div className="border-border-subtle absolute inset-[34%] rounded-full border" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="absolute inset-0 size-full overflow-visible"
      >
        <path
          d="M50 11L79 29L84 65L50 87L16 65L21 29L50 11Z"
          className="stroke-border-subtle"
          strokeWidth="0.3"
        />

        <path
          d="M50 11V87M21 29L84 65M79 29L16 65"
          className="stroke-border-subtle"
          strokeWidth="0.25"
        />

        {nodes.map((node) => (
          <circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            className="fill-technical-300"
          />
        ))}

        <circle cx="50" cy="50" r="2.2" className="fill-burgundy" />

        <circle
          cx="50"
          cy="50"
          r="6"
          className="stroke-burgundy"
          strokeWidth="0.35"
          opacity="0.65"
        />
      </svg>

      <span className="text-technical-500 absolute top-1/2 left-1/2 mt-8 -translate-x-1/2 font-mono text-[0.6rem] tracking-[0.18em] uppercase">
        System / 00
      </span>
    </div>
  );
}
