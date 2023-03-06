import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "@lib/supabase";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				await updateSupabaseCookie(event, session);
				if (event === "SIGNED_IN") {
					router.push("/portal");
				}
			},
		);
		return () => {
			authListener?.unsubscribe();
		};
	}, []);

	async function updateSupabaseCookie(event, session) {
		await fetch("api/auth", {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			credentials: "same-origin",
			body: JSON.stringify({ event, session }),
		});
	}

	return (
		<>
			<Toaster />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
