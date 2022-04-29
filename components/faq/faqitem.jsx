import { Prose } from "@components/text";

export default function FAQitem({ question, children }) {
  return (
    <details className="mt-10">
      <summary className="text-xl">{question}</summary>
      <Prose large>{children}</Prose>
    </details>
  );
}
