export default function PageWrapper({ children }) {
  return (
    <div className="text-white bg-gray-900 grid gap-10 min-h-screen">
      {children}
    </div>
  )
}