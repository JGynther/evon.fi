export function Title({ noMargin, children }) {
  return (
    <h1
      className={`text-4xl font-bold tracking-wide ${noMargin ? "" : "mb-8"}`}
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

export function Prose({ children, large, italic }) {
  return (
    <p
      className={`opacity-80 mt-5 max-w-prose ${large ? "text-lg" : ""} ${
        italic ? "italic" : ""
      }`}
    >
      {children}
    </p>
  );
}
