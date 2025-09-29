import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

type EmailRequestBody = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const headers = req.headers;
    const authToken = headers.get('X-Auth-Token');
    
    if (authToken !== process.env.NEXT_PUBLIC_API_KEY) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = (await req.json()) as EmailRequestBody;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${body.name}" <${process.env.SMTP_USER}>`,
      to: '03.federico.gonzalez@gmail.com',
      subject: `Nuevo mensaje de contacto de ${body.name}`,
      html: `
        <style>
          p {
            margin: 0;
            padding: 0;
          }
        </style>

        <div style="font-family: 'Trebuchet MS', sans-serif; line-height: 1.6;">
          <p><strong>Nombre:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Mensaje:</strong><br/>${body.message}</p>

          <a href="mailto:${body.email}" style="display: inline-block; margin-top: 10px; padding: 10px 15px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
            <strong>Responder a:</strong> ${body.email}
          <a>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error enviando correo:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
