export default function Section({ id, children }) {
  return (
    <section id={id || null} className="flex flex-col items-center mb-10">
      <div className="w-full max-w-screen-md">{children}</div>
    </section>
  );
}
