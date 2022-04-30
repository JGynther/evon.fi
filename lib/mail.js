import axios from "axios";

export async function sendMail({ from, to, subject, html, text, ...rest }) {
  await axios({
    method: "post",
    url: `${process.env.MAILGUN_URL}/messages`,
    auth: {
      username: "api",
      password: `${process.env.MAILGUN_API}`,
    },
    params: {
      from: from,
      to: to,
      subject: subject,
      html: html || null,
      text: text || null,
      ...rest,
    },
  });
}
