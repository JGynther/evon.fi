const axios = require("axios").default;
import template from "@templates/customermail.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let error = false;
    const data = req.body;
    const request = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${data.captcha}`;

    const result = await fetch(request, {
      method: "POST",
    }).then((r) => r.json());

    if (result.success !== true) {
      error = true;
      console.log("Captcha verification failed.");
      res.status(400).json("Captcha verification failed.");
    }

    try {
      await axios({
        method: "post",
        url: `${process.env.MAILGUN_URL}/messages`,
        auth: {
          username: "api",
          password: `${process.env.MAILGUN_API}`,
        },
        params: {
          from: "Evon Group <info@evon.fi>",
          to: `${data.email}`,
          subject: "Vahvistus osakkeiden merkinnästä - Evon Group",
          html: template(data),
        },
      });
    } catch (e) {
      error = true;
      console.log(e);
    }

    const html = `
      ${
        error
          ? "<p> HUOM! Tätä merkintää tehdessä tapahtui virhe! Se ei siis välttämättä ole mennyt asiakkaalle läpi.</p>"
          : ""
      } 
      <p>Nimi: ${data.name}</p>
        <p>Sähköposti: <a href="mailto:${data.email}">${data.email}</a></p>
        <p>Puhelinnumero: ${data.phone}</p>
        <p>Lähiosoite: ${data.streetaddress}</p>
        <p>Postinumero: ${data.postalcode}</p>
        <p>Kaupunki: ${data.city}</p>
        <p>Osakkeiden lukumäärä: ${data.stock}</p>
        <p>Merkintä euroina: ${data.stock * 0.3} EUR</p>
    `;

    try {
      await axios({
        method: "post",
        url: `${process.env.MAILGUN_URL}/messages`,
        auth: {
          username: "api",
          password: `${process.env.MAILGUN_API}`,
        },
        params: {
          from: "Evon Group <info@evon.fi>",
          to: `info@evon.fi`,
          subject: `Uusi merkintä - ${data.name}`,
          html: html,
        },
      });
    } catch (e) {
      error = true;
      console.log(e.message);
    }

    if (!error) {
      res.status(200).json();
    }
  } else {
    res.status(405).json();
  }
}
