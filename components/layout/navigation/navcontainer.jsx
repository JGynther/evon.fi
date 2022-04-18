export default function NavContainer({ children }) {
  return (
    <div className="sticky top-0 z-10 mb-10">
      <nav>
        <div className="bg-neutral-900 border-b border-neutral-700 divide-y divide-neutral-700">
          {children}
        </div>
      </nav>
    </div>
  );
}
