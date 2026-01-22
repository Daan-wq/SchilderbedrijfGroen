import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";

interface SplitContentProps {
    title: string;
    text: string;
    image: string;
    imagePosition?: "left" | "right";
    listItems?: string[];
    ctaLabel?: string;
    ctaLink?: string;
    isServiceHighlight?: boolean;
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function SplitContent({
    title,
    text,
    image,
    imagePosition = "left",
    listItems,
    ctaLabel,
    ctaLink,
    isServiceHighlight,
    backgroundColor = "white"
}: SplitContentProps) {
    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Image Column */}
                <div className={clsx("relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl", {
                    "md:order-last": imagePosition === "right"
                })}>
                    <Image src={image} alt={title} fill className="object-cover" />
                </div>

                {/* Text Column */}
                <div>
                    {isServiceHighlight && (
                        <span className="block text-primary-600 font-bold uppercase tracking-wide text-sm mb-4">
                            Dienst Uitgelicht
                        </span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">{title}</h2>
                    <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                        {text}
                    </p>

                    {listItems && listItems.length > 0 && (
                        <ul className="space-y-4 mb-8">
                            {listItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-primary-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {ctaLabel && ctaLink && (
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary-900 text-white font-semibold rounded-full hover:bg-primary-800 transition-colors"
                        >
                            {ctaLabel}
                        </Link>
                    )}
                </div>

            </div>
        </section>
    );
}
