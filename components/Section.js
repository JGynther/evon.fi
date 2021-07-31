export default function Section({ children }) {
  return (
    <section className="flex justify-center">
      <div className="max-w-screen-md flex-grow">
        {children}
      </div>
    </section>
  )
}