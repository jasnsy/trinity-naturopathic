import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema/contact";
import { getEmailProvider } from "@/lib/mail/email-adapter";

export async function POST(request: Request) {
	try {
		const data = await request.json().catch(() => ({}));
		const { hp, _ts, ...rest } = data ?? {};

		if (typeof hp === "string" && hp.trim().length > 0) {
			return NextResponse.json({ ok: true });
		}

		const started = Number(_ts ?? 0);
		if (!Number.isNaN(started) && Date.now() - started < 2000) {
			return NextResponse.json({ ok: true });
		}

		const parsed = contactSchema.safeParse(rest);
		if (!parsed.success) {
			return NextResponse.json(
				{ ok: false, errors: parsed.error.flatten() },
				{ status: 400 }
			);
		}

		const provider = await getEmailProvider();
		const to = process.env.CONTACT_RECIPIENT || parsed.data.email;
		await provider.send({
			to,
			subject: `New inquiry from ${parsed.data.name}`,
			html: `<p><strong>Name:</strong> ${parsed.data.name}</p>
<p><strong>Email:</strong> ${parsed.data.email}</p>
<p><strong>Phone:</strong> ${parsed.data.phone}</p>
<p><strong>Service:</strong> ${parsed.data.service}</p>
<p><strong>Message:</strong><br/>${parsed.data.message.replace(
				/\n/g,
				"<br/>"
			)}</p>`,
		});

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json({ ok: false }, { status: 500 });
	}
}
