import { Headless } from "@components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "@components/spinner";
import { Title, Prose } from "@components/text";
import toast from "react-hot-toast";

export default function Confirm() {
  const [status, setStatus] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    toast("Testi");
    handleTokenConfirmation();
  }, [router.isReady]);

  async function handleTokenConfirmation() {
    if (router.isReady && router.query.token) {
      const res = await fetch("/api/waitlist/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: router.query.token }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }

      setLoading(false);
    }
  }

  if (isLoading) {
    return (
      <Headless title="Confirm email">
        <Spinner size="h-8 w-8" />
      </Headless>
    );
  }

  return <Headless title="Confirm email"></Headless>;
}
