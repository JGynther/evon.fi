export default function Prose({ children, large, italic }) {
    return (
      <p className={`opacity-80 mt-5 max-w-prose ${large ? "text-lg" : ""} ${italic ? "italic" : ""}`}>
        {children}
      </p>
    )
  }