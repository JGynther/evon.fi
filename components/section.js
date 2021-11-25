export default function Section({ id, children }) {
  return (
    <section id={id || null} className="flex justify-center my-5 md:my-10 mx-5">
      <div className="max-w-screen-md flex-grow">
        {children}
      </div>
    </section>
  )
}
