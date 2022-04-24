export default function Section({ id, children }) {
  return (
    <section id={id || null} className="flex flex-col items-center mb-20">
      <div className="w-full max-w-screen-md">{children}</div>
    </section>
  );
}
