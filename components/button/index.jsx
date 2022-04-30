import LinkButton from "./linkbutton";
import SubmitButton from "./submitbutton";

export default function Button({ type, href, onclick, loading, children }) {
  if (type === "link") {
    return <LinkButton href={href}>{children}</LinkButton>;
  } else if (type === "submit") {
    return <SubmitButton loading={loading}>{children}</SubmitButton>;
  } else {
    return;
  }
}
