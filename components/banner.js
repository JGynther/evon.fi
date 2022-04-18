import { Title, Prose } from "@components/text";
import Button from "@components/button";

export default function Banner({ title, long, button, href, children }) {
  return (
    <div className="flex justify-center bg-indigo-500 bg-opacity-10 p-10 rounded">
      <div className="flex flex-col space-y-5">
        <Title long={long}>{title}</Title>
        <Prose>{children}</Prose>
        {button && href && (
          <span>
            <Button type="link" href={href}>
              {button}
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}
