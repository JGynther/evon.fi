export default function Spinner({
  textColor = "text-white",
  size = "h-5 w-5",
  classProps,
}) {
  return (
    <svg
      className={`animate-spin ${textColor} ${size} ${classProps}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25 stroke-current stroke-[4]"
        cx="12"
        cy="12"
        r="10"
      />
      <path
        className="opacity-75 fill-current"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014
          12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
