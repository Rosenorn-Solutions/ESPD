import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: integrate an email provider (e.g. Resend, SendGrid, nodemailer)
    // For now, log the submission and return success.
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { success: true, message: "Besked modtaget" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Der opstod en teknisk fejl" },
      { status: 500 }
    );
  }
}
