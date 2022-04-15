export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      {children}
    </div>
  );
}
