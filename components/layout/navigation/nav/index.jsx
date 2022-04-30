export default function Nav({ children }) {
  return (
    <div className="container mx-auto flex flex-wrap justify-center md:justify-between py-5">
      {children}
    </div>
  );
}
