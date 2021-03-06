export function Input({
  label,
  type,
  required,
  error,
  setError,
  onChange,
  ...rest
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-white tracking-wide text-lg">
        {label}
        {required ? <span className="text-rose-500"> *</span> : null}
      </label>
      <input
        type={type}
        onChange={onChange}
        required={required}
        {...rest}
        className="bg-neutral-900 rounded px-4 py-2 border border-neutral-700 hover:border-neutral-500 tranform hover:-translate-y-1 focus:-translate-y-1 shadow hover:shadow-lg focus:shadow-lg outline-none focus:ring-1 focus:border-indigo-700 transition"
      />
    </div>
  );
}

export function Form({ onSubmit, center, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex ${center ? "justify-center" : ""}`}
    >
      <div className="max-w-md flex-grow flex flex-col gap-5 mt-8">
        {children}
      </div>
    </form>
  );
}
