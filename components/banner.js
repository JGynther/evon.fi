import { Title, Subtitle, Prose } from "@components/text";

export default function Banner({
  title,
  long,
  subtitle,
  button,
  href,
  children,
}) {
  return (
    <div className="flex justify-center bg-indigo-500 bg-opacity-10  p-10">
      <div>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Title long={long}>{title}</Title>
        <Prose>{children}</Prose>
      </div>
    </div>
  );
}
