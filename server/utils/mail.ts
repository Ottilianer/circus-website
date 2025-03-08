import { ClientResponseError } from "pocketbase";
import { getPocketbase } from "./pocketbase";

export async function sendMail(to: string, subject: string, html: string) {
  await (
    await getPocketbase()
  ).send("/send-mail", {
    body: {
      to,
      subject,
      html,
    },
    method: "POST",
  });
}
