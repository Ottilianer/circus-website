routerAdd(
  "POST",
  "/send-mail",
  (e) => {
    const body = e.requestInfo().body;

    if (!body.to) {
      return e.json(400, { error: "to is required" });
    }
    if (!body.subject) {
      return e.json(400, { error: "subject is required" });
    }
    if (!body.html) {
      return e.json(400, { error: "html is required" });
    }

    const message = new MailerMessage({
      from: {
        name: "Circus St. Ottilien",
        email: "no-reply@circus.ottilianer.de",
      },
      to: [
        {
          address: body.to,
        },
      ],
      subject: body.subject,
      html: body.html,
    });

    try {
      e.app.newMailClient().send(message);
      return e.json(200, { message: "Email sent" });
    } catch (err) {
      console.error("Error sending email", err);
      return e.json(500, { error: "Error sending email" });
    }
  },
  $apis.requireSuperuserOrOwnerAuth()
);
