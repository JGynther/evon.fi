import { Prose } from "@components/text";

export default function Value({ title, children }) {
  return (
    <div className="my-5 bg-neutral-800 p-8 rounded">
      <div className="text-xl">{title}</div>
      <Prose large>{children}</Prose>
    </div>
  );
}
