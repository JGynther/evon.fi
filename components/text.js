export function Title({ children }) {
  return (
    <h2 className="text-2xl md:text-4xl font-serif tracking-wide">
      {children}
    </h2>
  );
}

export function Subtitle({ children }) {
  return (
    <h3 className="text-indigo-500 tracking-wider text-lg my-3">{children}</h3>
  );
}

export function Prose({
  children,
  noMargin,
  large,
  small,
  italic,
  whitespacepreline,
}) {
  return (
    <p
      className={`opacity-80 max-w-prose
        ${noMargin ? "" : "mt-5"} 
        ${large ? "text-lg" : ""}
        ${small ? "text-sm" : ""}
        ${italic ? "italic" : ""}
        ${whitespacepreline ? "whitespace-pre-line" : ""}
      `}
    >
      {children}
    </p>
  );
}
