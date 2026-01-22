import Link from "next/link";

export default function HeroTypographic() {
    return (
        <section className="w-full bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-end">

                {/* Left Column (Heading) */}
                <div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-950 leading-tight">
                        Meer dan alleen een schildersbedrijf.
                    </h1>
                </div>

                {/* Right Column (Body) */}
                <div className="md:border-l md:border-primary-100 md:pl-8">
                    <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                        Betrouwbaarheid en vakmanschap staan bij ons centraal. Wij denken met u mee van kleuradvies tot de laatste kwaststreek, zodat u zorgeloos kunt genieten van het resultaat.
                    </p>
                    <Link
                        href="/contact"
                        className="text-primary-900 font-bold border-b-2 border-primary-300 hover:border-primary-600 transition-all"
                    >
                        Maak kennis met ons
                    </Link>
                </div>

            </div>
        </section>
    );
}
