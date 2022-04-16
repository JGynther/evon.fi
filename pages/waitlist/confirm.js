import { Headless } from "@components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Confirm() {
  const [status, setStatus] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { token } = router.query;
      fetch("/api/waitlist/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      });
    }
  }, [router.isReady]);

  return (
    <Headless title="Confirm email">
      <div className="flex flex-col justify-center items-center h-full">
        testi
      </div>
    </Headless>
  );
}
