import { Headless } from "@components/layout";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "@components/button";
import { Form } from "@components/formcontrol";

export default function Confirm() {
  const router = useRouter();
  const { uuid } = router.query;

  const [isLoading, setIsLoading] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  async function handleTokenConfirmation(event) {
    event.preventDefault();
    setIsLoading(true);

    if (!uuid) return;

    const res = await fetch("/api/waitlist/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: uuid }),
    });

    if (!res.ok) return toast.error("Oh no! Email confirmation failed.");

    toast.success("Email confirmed successfully!");
    setDidSubmit(true);
  }

  return (
    <Headless title="Confirm join - Evon Capital">
      {didSubmit ? (
        <label> Odotuslistalle liittyminen onnistui! Tervetuloa!</label>
      ) : (
        <Form onSubmit={(e) => handleTokenConfirmation(e)}>
          <label>Vahvistus: {uuid}</label>
          <Button type="submit" loading={isLoading}>
            Vahvista liittyminen odotuslistalle
          </Button>
        </Form>
      )}
    </Headless>
  );
}
