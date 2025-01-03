import { getResponse } from "@utils/apiFunctions";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Business Enquiry`,
    text: `Business`,
    html: `<div>From - ${data.name}(${data.email})</div>
    <div>WhatsApp Number - <a href='https://wa.me/${data.wnumber}'>${data.wnumber}</a></div>
    <div>${data.description}</div>`,
  });
  return getResponse("Email has been sent");
}
