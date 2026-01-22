import Link from "next/link";
import Image from "next/image";

interface HeroVisualProps {
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    ctaLink?: string;
    image?: string;
    secondaryCta?: boolean;
}

export default function HeroVisual({
    title = "Vakmanschap in Zwolle en omgeving",
    subtitle = "Wij verzorgen uw binnenschilderwerk, buitenschilderwerk en wandafwerking met persoonlijke aandacht en oog voor kwaliteit.",
    ctaLabel = "Start uw project",
    ctaLink = "/contact",
    image = "/images/139_3962_r1.jpg",
    secondaryCta = true
}: HeroVisualProps) {
    return (
        <section className="w-full bg-white py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Text Block */}
                <div className="max-w-3xl mb-12 sm:mb-16">
                    <span className="block text-primary-600 font-bold uppercase tracking-wide text-sm mb-4">
                        Schildersbedrijf Groen
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-950 mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl text-primary-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
                        >
                            {ctaLabel}
                        </Link>
                        {secondaryCta && (
                            <Link
                                href="/diensten"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary-700 bg-primary-50 rounded-full hover:bg-primary-100 transition-colors"
                            >
                                Bekijk onze diensten
                            </Link>
                        )}
                    </div>
                </div>

                {/* Media Block */}
                <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={image}
                        alt="Hero image"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Optional Overlay Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                        <div className="bg-primary-100 p-2 rounded-full text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </div>
                        <div>
                            <p className="text-xs text-primary-500 font-semibold uppercase">Klanttevredenheid</p>
                            <p className="text-sm font-bold text-primary-900">100% Garantie</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
