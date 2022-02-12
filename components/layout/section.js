export default function Section({ id, textcenter, children }) {
  return (
    <section id={id || null} className="container mx-auto">
      <div className="flex justify-center mx-5">
        <div
          className={`flex-grow max-w-screen-md ${
            textcenter ? "text-center" : ""
          }`}
        >
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
