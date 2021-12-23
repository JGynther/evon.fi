import { Title, Subtitle, Prose } from "@components/text";
import { LinkButton } from "@components/button";

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
        {button && <LinkButton href={href}>{button}</LinkButton>}
      </div>
    </div>
  );
}
