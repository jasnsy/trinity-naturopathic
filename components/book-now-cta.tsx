import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { business } from "@/config/business";

type BookNowCtaProps = {
	title: string;
	description: string;
	primaryButtonText?: string;
	showPhoneButton?: boolean;
};

export const BookNowCta: React.FC<BookNowCtaProps> = ({
	title,
	description,
	primaryButtonText = "Book Your Appointment",
	showPhoneButton = true,
}) => {
	return (
		<Card className="p-6 md:p-8 bg-accent/10 border-accent/20">
			<div className="max-w-3xl mx-auto text-center space-y-4">
				<h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
				<p className="text-muted-foreground">{description}</p>
				<div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
					<Button asChild size="lg">
						<a
							href="https://trinitynaturopathic.janeapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{primaryButtonText}
						</a>
					</Button>
					{showPhoneButton && (
						<Button asChild variant="outline" size="lg">
							<a href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}>
								Call {business.phone}
							</a>
						</Button>
					)}
				</div>
			</div>
		</Card>
	);
};
