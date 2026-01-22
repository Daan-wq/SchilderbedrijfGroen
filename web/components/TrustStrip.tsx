
export default function TrustStrip() {
    return (
        <section className="w-full bg-white py-12 border-b border-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-primary-400 mb-8 uppercase tracking-widest">
                    Wij werken met topmerken
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Brand 1: Sigma */}
                    <div className="h-8 relative w-32">
                        {/* Text Fallback for logo */}
                        <span className="text-2xl font-bold font-display text-primary-800">SIGMA</span>
                    </div>

                    {/* Brand 2: Sikkens */}
                    <div className="h-8 relative w-32">
                        <span className="text-2xl font-bold font-display text-primary-800">Sikkens</span>
                    </div>

                    {/* Brand 3: Wijzonol */}
                    <div className="h-8 relative w-32">
                        <span className="text-2xl font-bold font-display text-primary-800">Wijzonol</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
