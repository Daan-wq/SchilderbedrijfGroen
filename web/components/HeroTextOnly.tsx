interface HeroTextOnlyProps {
    label?: string;
    title?: string;
    text?: string;
}

export default function HeroTextOnly({
    label = "Portfolio",
    title = "Ons werk spreekt voor zich",
    text = "Bekijk een selectie van onze recent opgeleverde projecten in Zwolle en omgeving. Van strak lakwerk tot hoogwaardige wandafwerking."
}: HeroTextOnlyProps) {
    return (
        <section className="w-full bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="block text-primary-500 font-bold uppercase tracking-wide text-sm mb-4">
                    {label}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-950 mb-8">
                    {title}
                </h1>
                <p className="text-lg text-primary-600 leading-relaxed">
                    {text}
                </p>
            </div>
        </section>
    );
}
