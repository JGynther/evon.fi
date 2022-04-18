import { Headless } from "@components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Confirm() {
  const [status, setStatus] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady && router.query.token) {
      fetch("/api/waitlist/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: router.query.token }),
      });
    }
  }, [router.isReady]);

  return <Headless title="Confirm email">testi</Headless>;
}
