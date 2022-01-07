export function Title({ long, noMargin, children }) {
  return (
    <h1
      className={`${
        long ? "text-xl md:text-4xl" : "text-4xl"
      } font-bold tracking-wide ${noMargin ? "" : "mb-8"}`}
    >
      {children}
    </h1>
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
