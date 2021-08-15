const nodemailer = require("nodemailer");

async function main(data) {
  const request = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${data.captcha}`;

  const result = await fetch(request, {
    method: "POST",
  }).then(r => r.json())

  if (result.success !== true) {
    return { error: true };
  }

  let transporter = nodemailer.createTransport({
    host: "mail.evon.fi",
    port: 465,
    secure: true,
    auth: {
      user: "info@evon.fi",
      pass: process.env.EMAIL_PASS,
    }
  })
  try {
    await transporter.sendMail({
      from: "Evon Group <info@evon.fi>",
      to: "joona.gynther@evon.fi, aatu.pulkkinen@evon.fi",
      subject: `Uusi osakkeiden merkintä ${data.name}`,
      html: 
      ` <p>Nimi: ${data.name}</p>
        <p>Sähköposti: <a href="mailto:${data.email}">${data.email}</a></p>
        <p>Puhelinnumero: ${data.phone}</p>
        <p>Lähiosoite: ${data.streetaddress}</p>
        <p>Postinumero: ${data.postalcode}</p>
        <p>Kaupunki: ${data.city}</p>
        <p>Osakkeiden lukumäärä: ${data.stock}</p>`,
    })
  } catch(err) {
    console.log(err)
    return { error: true };
  }

  try {
    await transporter.sendMail({
      from: "'Evon Group' <info@evon.fi>",
      to: data.email,
      replyTo: "aatu.pulkkinen@evon.fi",
      subject: "Vahvistus osakkeiden merkinnästä - Evon Group",
      html: `
      <div>
        <h3>Olet merkinnyt Evon Groupin osakkeita osakeannissamme.</h3>
        <p>Alla vielä vahvistuksena tekemäsi merkintä. 
        Mikäli esimerkiksi tietosi ovat väärin, ota yhteyttä mahdollisimman pian vastaamalla tähän sähköpostiin.</p>
        <p>Kaikki merkinnät tarkistetaan vielä manuaalisesti. Otamme yhteyttä mikäli merkintäsi kanssa on ongelma.</p>
        <br>
        <div>
          <p>Nimi: ${data.name}</p>
          <p>Sähköposti: ${data.email}</p>
          <p>Puhelinnumero: ${data.phone}</p>
          <p>Lähiosoite: ${data.streetaddress}</p>
          <p>Postinumero: ${data.postalcode}</p>
          <p>Kaupunki: ${data.city}</p>
          <p>Osakkeiden lukumäärä: ${data.stock}</p>
          <p>Merkintä euroina: ${data.stock * 0.3} EUR</p>
        </div>
      </div>
      `
    })
  } catch(err) {
    console.log(err)
    return { error: true };
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {

    const data = req.body;

    const result = main(data);

    if (result.error === true) {
      res.status(401).json();
    }

    res.status(200).json();

  } else {
    res.status(405).json()
  }
}