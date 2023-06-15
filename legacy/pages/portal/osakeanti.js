import { supabase } from "@lib/supabase";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { Portal } from "@components/layout";
import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";
import { Input, Form } from "@components/formcontrol";
import Button from "@components/button";

import { createLog } from "lib/supabase";

export default function Osakeanti({ user }) {
	const [a, setA] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		supabase
			.from("osakeanti_portal")
			.select("a")
			.eq("email", user.email)
			.then((r) => r.data[0])
			.then((data) => data?.a && setA(data.a));
	}, [user.email]);

	return (
		<Portal title="Osakeanti - Evon Capital">
			<Section>
				<div className="mb-8 text-white text-opacity-80">
					Kirjautuneena sisään: <b>{user.email}</b>
				</div>

				<Title>Osakeanti 7.3 - 15.6.2023 </Title>

				<Prose large>
					Evon Capital Oy Ab:n suunnattu osakeanti järjestetään 7.3. - 15.6.2023
					välisenä aikana. Osakkeiden tulee olla maksettu yhtiön tilille
					viimeistään 4.8.2023. Maksuohjeet saat sähköpostitse merkinnän
					jälkeen.
				</Prose>

				<Prose large>
					Merkittävät osakkeet ovat A-sarjaa. Merkintähinta on <b>0,35 euroa</b>{" "}
					kappale. Minimimerkintä on tuhat (1000) osaketta.
				</Prose>

				<Form
					onSubmit={async (event) => {
						event.preventDefault();
						setIsSubmitting(true);

						const res = await fetch("/api/osakeanti/portal", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ a: a }),
						});

						setIsSubmitting(false);

						if (!res.ok) {
							toast.error("Virheellinen merkintä");
							return;
						}

						toast.success("Merkintä vastaanotettu!");
					}}
				>
					<Prose large> Haluan merkitä...</Prose>

					<Input
						required
						label="A-osaketta"
						type="number"
						step={1}
						min={1000}
						value={a}
						onChange={(event) => {
							setA(event.target.value);
						}}
					/>

					<Prose large>
						Yhteensä {Math.round((a && a * 0.35) * 100) / 100} euroa.
					</Prose>

					<div className="bg-rose-500 bg-opacity-20 rounded p-5 my-4">
						<b>Huom!</b>
						<p className="mt-2">
							Merkinnät ovat <b>sitovia</b>. Voit siis myöhemmin vain{" "}
							<b>korottaa merkintääsi!</b>
						</p>
						<p className="mt-2">Tutustu ehtoihin.</p>
						<div className="bg-rose-500 bg-opacity-30 rounded p-4 mt-4 space-x-4">
							<input
								type="checkbox"
								required
								className="accent-indigo-500 transform scale-150"
							/>
							<label>
								Ymmärrän mitä olen tekemässä{" "}
								<span className="text-rose-500">*</span>
							</label>
						</div>
					</div>

					<Button type="submit" loading={isSubmitting}>
						Tee merkintä
					</Button>
				</Form>
			</Section>
		</Portal>
	);
}

export async function getServerSideProps({ req }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	if (!user) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	await createLog({
		event: "osakeanti_portal_visit",
		userid: user.id,
		email: user.email,
	});

	return {
		props: { user },
	};
}
