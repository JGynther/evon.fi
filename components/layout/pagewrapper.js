export default function PageWrapper({ children }) {
  return (
    <div className="grid text-white bg-gray-900 min-h-screen">{children}</div>
  );
}
