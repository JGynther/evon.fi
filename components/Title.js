export default function Title({ noMargin, children }) {
    return (
      <h1 className={`text-4xl font-bold tracking-wide ${noMargin ? "" : "mb-8"}`}>
        {children}
      </h1>
    )
  }