import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { nombre, email, mensaje } = body;

    const data = await resend.emails.send({

      from: "Aydee Orfebre <onboarding@resend.dev>",

      to: ["jlriofrio@gmail.com"],

      subject: "Nueva solicitud desde la página web",

      html: `
      <!DOCTYPE html>
      <html lang="es">
      
      <head>
        <meta charset="UTF-8" />
        <title>Nueva solicitud</title>
      </head>
      
      <body style="
        margin:0;
        padding:0;
        background:#f5f5f5;
        font-family:Arial, Helvetica, sans-serif;
      ">
      
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
      
              <table width="700" cellpadding="0" cellspacing="0" style="
                background:white;
                margin-top:40px;
                border-radius:20px;
                overflow:hidden;
                box-shadow:0 10px 30px rgba(0,0,0,0.1);
              ">
      
                <!-- HEADER -->
                <tr>
                  <td style="
                    background:black;
                    padding:50px 20px;
                    text-align:center;
                  ">
      
                    <img
                      src="https://joyeria-tau.vercel.app/logo.png"
                      width="180"
                      alt="Aydee Orfebre"
                      style="display:block; margin:auto;"
                    />
      
                  </td>
                </tr>
      
                <!-- TITULO -->
                <tr>
                  <td style="padding:50px 60px 20px 60px; text-align:center;">
      
                    <h1 style="
                      margin:0;
                      color:#111;
                      font-size:42px;
                    ">
                      ¡Nueva solicitud!
                    </h1>
      
                    <p style="
                      margin-top:20px;
                      color:#666;
                      font-size:20px;
                      line-height:32px;
                    ">
                      Se ha comunicado una nueva persona a través de la página web.
                    </p>
      
                  </td>
                </tr>
      
                <!-- CARD NOMBRE -->
                <tr>
                  <td style="padding:0 60px;">
      
                    <div style="
                      border:1px solid #e5e5e5;
                      border-radius:18px;
                      padding:30px;
                      margin-bottom:25px;
                    ">

                    <img
                      src="https://joyeria-tau.vercel.app/public/user.png"
                      width="45"
                      alt="Usuario"
                      style="margin-bottom:15px;"
                    />
      
                      <p style="
                        margin:0 0 10px 0;
                        color:#c59d00;
                        font-weight:bold;
                        font-size:14px;
                        letter-spacing:2px;
                        text-transform:uppercase;
                      ">
                        Nombre
                      </p>
      
                      <p style="
                        margin:0;
                        color:#111;
                        font-size:28px;
                        font-weight:bold;
                      ">
                        ${nombre}
                      </p>
      
                    </div>
      
                  </td>
                </tr>
      
                <!-- CARD EMAIL -->
                <tr>
                  <td style="padding:0 60px;">
      
                    <div style="
                      border:1px solid #e5e5e5;
                      border-radius:18px;
                      padding:30px;
                      margin-bottom:25px;
                    ">

                    <img
                    src="https://joyeria-tau.vercel.app/public/email.png"
                        width="45"
                        alt="Email"
                        style="margin-bottom:15px;"
                      />
      
                      <p style="
                        margin:0 0 10px 0;
                        color:#c59d00;
                        font-weight:bold;
                        font-size:14px;
                        letter-spacing:2px;
                        text-transform:uppercase;
                      ">
                        Correo electrónico
                      </p>
      
                      <p style="
                        margin:0;
                        color:#111;
                        font-size:24px;
                      ">
                        ${email}
                      </p>
      
                    </div>
      
                  </td>
                </tr>
      
                <!-- CARD MENSAJE -->
                <tr>
                  <td style="padding:0 60px 40px 60px;">
      
                    <div style="
                      border:1px solid #e5e5e5;
                      border-radius:18px;
                      padding:30px;
                    ">
      
                      <p style="
                        margin:0 0 10px 0;
                        color:#c59d00;
                        font-weight:bold;
                        font-size:14px;
                        letter-spacing:2px;
                        text-transform:uppercase;
                      ">
                        Mensaje o comentario
                      </p>
      
                      <p style="
                        margin:0;
                        color:#444;
                        font-size:20px;
                        line-height:34px;
                      ">
                        ${mensaje}
                      </p>
      
                    </div>
      
                  </td>
                </tr>
      
                <!-- FOOTER -->
                <tr>
                  <td style="
                    background:#fafafa;
                    padding:40px;
                    text-align:center;
                    border-top:1px solid #eee;
                  ">
      
                    <p style="
                      margin:0;
                      color:#888;
                      font-size:16px;
                    ">
                      Aydee Orfebre · Joyería artesanal exclusiva
                    </p>
      
                  </td>
                </tr>
      
              </table>
      
            </td>
          </tr>
        </table>
      
      </body>
      </html>
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