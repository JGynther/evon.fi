export function Input({ label, type, error, setError, onChange }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-white tracking-wide text-lg">{label}</label>
      <input
        type={type}
        onChange={onChange}
        className="bg-neutral-900 rounded px-4 py-2 border border-neutral-700 hover:border-neutral-500 tranform hover:-translate-y-1 focus:-translate-y-1 shadow hover:shadow-lg focus:shadow-lg outline-none focus:ring-1 focus:border-indigo-700 transition"
      />
    </div>
  );
}

export function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="flex justify-center">
      <div className="max-w-md flex-grow flex flex-col gap-5 mt-8">
        {children}
      </div>
    </form>
  );
}
