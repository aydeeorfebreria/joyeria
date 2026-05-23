import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { nombre, email, mensaje } = body;

    const data = await resend.emails.send({

      from: "Aydee Orfebre <onboarding@resend.dev>",

      to: ["lamirimu@gmail.com"],

      subject: "Nueva solicitud desde la página web",

      html: `
        <h2>Nueva solicitud</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>Correo:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${mensaje}</p>
      `,
    });

    return Response.json(data);

  } catch (error) {

    return Response.json(
      { error },
      { status: 500 }
    );

  }
}