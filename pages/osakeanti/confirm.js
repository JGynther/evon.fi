import { Headless } from "@components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Confirm() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      handleTokenConfirmation();
    }
  }, [router.isReady]);

  async function handleTokenConfirmation() {
    const res = await fetch("/api/osakeanti/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: router.query.token }),
    });

    if (res.ok) {
      toast.success("Email confirmed successfully!");
    } else {
      toast.error("Oh no! Email confirmation failed.");
    }

    router.replace("/");
  }

  return <Headless title="Confirm email" />;
}
