import LinkButton from "./linkbutton";

export default function Button({ type, href, onclick, children }) {
  if (type === "link") {
    return <LinkButton href={href}>{children}</LinkButton>;
  } else {
    return;
  }
}
