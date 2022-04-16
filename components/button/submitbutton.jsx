import Spinner from "@components/spinner";

export default function SubmitButton({ loading, children }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`flex justify-center bg-indigo-700 hover:bg-indigo-800 transition py-2 px-6 rounded tracking-wide disabled:opacity-80 disabled:bg-indigo-700`}
    >
      {loading ? <Spinner /> : <>{children}</>}
    </button>
  );
}
