export default function PageWrapper({ children }) {
  return (
    <div className="text-white bg-gray-900 min-h-screen flex flex-col justify-between space-y-20">
      {children}
    </div>
  );
}
