export default function Section({ id, children }) {
  return (
    <section id={id || null} className="flex flex-col items-center mb-10">
      <div>{children}</div>
    </section>
  );
}
