import { supabaseServer, createLog } from "@lib/supabase";
import { sendMail } from "@lib/mail";

async function check(email, a) {
	const { data, error } = await supabaseServer
		.from("osakeanti_portal")
		.select("a")
		.eq("email", email);

	if (error) return false;
	if (data.length === 0) return true;
	if (a < data[0].a || 0) return false;

	return true;
}

export default async function handler(req, res) {
	if (req.method !== "POST") return res.status(400).send();

	const { user } = await supabaseServer.auth.api.getUserByCookie(req);

	if (!user) return res.status(401).send();

	let { a } = req.body;
	a = Number(a);
	const sum = Math.round(a * 0.35 * 100) / 100;

	const checkErrors = await check(user.email, a);

	if (!checkErrors) return res.status(400).send();

	const { error } = await supabaseServer.from("osakeanti_portal").upsert({
		updated_at: new Date().toISOString(),
		email: user.email,
		a: a,
		sum: sum,
	});

	if (error) return res.status(500).send();

	await sendMail({
		from: "Evon Capital <osakeanti@evon.fi>",
		to: user.email,
		subject: "Osakeannin merkintä - Evon Capital",
		"o:tag": "osakeanti-1/2023",
		template: "osakeanti_portal",
		"h:reply-to": "Evon Capital <info@evon.fi>",
		"v:a": a,
		"v:sum": sum,
	});

	await createLog({
		service: "portal",
		message: "osakeanti merkinta portal",
		json: {
			email: user.email,
			a: a,
			sum: sum,
		},
		_source: "lambda",
	});

	return res.status(200).send();
}
