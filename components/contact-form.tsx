"use client";

import { useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/schema/contact";
import { services } from "@/content/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const ContactForm: React.FC = () => {
	const [isPending, startTransition] = useTransition();
	const [submitted, setSubmitted] = useState(false);
	const form = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
	const startedAtRef = useRef<number>(Date.now());

	const handleSubmit = form.handleSubmit((values) => {
		const startedAt = startedAtRef.current;
		startTransition(async () => {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...values, _ts: startedAt }),
			});
			if (res.ok) setSubmitted(true);
		});
	});

	if (submitted) {
		return (
			<p className="text-green-600">Thanks! Your message has been sent.</p>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="grid gap-4"
			aria-label="Contact form"
		>
			<input
				type="text"
				className="hidden"
				tabIndex={-1}
				aria-hidden
				{...form.register("hp")}
			/>
			<div className="grid sm:grid-cols-2 gap-4">
				<div>
					<label className="text-sm" htmlFor="name">
						Name
					</label>
					<Input
						id="name"
						aria-invalid={!!form.formState.errors.name}
						{...form.register("name")}
					/>
				</div>
				<div>
					<label className="text-sm" htmlFor="email">
						Email
					</label>
					<Input
						id="email"
						type="email"
						aria-invalid={!!form.formState.errors.email}
						{...form.register("email")}
					/>
				</div>
			</div>
			<div className="grid sm:grid-cols-2 gap-4">
				<div>
					<label className="text-sm" htmlFor="phone">
						Phone
					</label>
					<Input
						id="phone"
						aria-invalid={!!form.formState.errors.phone}
						{...form.register("phone")}
					/>
				</div>
				<div>
					<label className="text-sm">Service</label>
					<Select onValueChange={(v) => form.setValue("service", v)}>
						<SelectTrigger>
							<SelectValue placeholder="Select a service" />
						</SelectTrigger>
						<SelectContent>
							{services.map((s) => (
								<SelectItem key={s.slug} value={s.title}>
									{s.title}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			<div>
				<label className="text-sm" htmlFor="message">
					Message
				</label>
				<Textarea
					id="message"
					rows={5}
					aria-invalid={!!form.formState.errors.message}
					{...form.register("message")}
				/>
			</div>
			<div className="flex items-center gap-2">
				<input
					id="consent"
					type="checkbox"
					aria-invalid={!!form.formState.errors.consent}
					{...form.register("consent")}
				/>
				<label htmlFor="consent" className="text-sm">
					I consent to be contacted about my inquiry.
				</label>
			</div>
			<Button type="submit" disabled={isPending}>
				Send
			</Button>
		</form>
	);
};
