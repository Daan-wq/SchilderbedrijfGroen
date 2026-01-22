import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-950 text-primary-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand & Personal */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10">
                                <Image
                                    src="/logo.png"
                                    alt="Schildersbedrijf Groen"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-lg font-bold text-white">Schildersbedrijf Groen</span>
                        </div>
                        <p className="text-sm text-primary-200 leading-relaxed max-w-xs">
                            Vakmanschap en persoonlijke aandacht. Wij ontzorgen u van kleuradvies tot de laatste afwerking.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {/* Avatar Placeholder */}
                            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary-800">
                                <Image src="/placeholders/avatar.png" alt="Eigenaar" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Uw Vakman</p>
                                <p className="text-xs text-primary-400">Hoofdschilder</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Snel naar */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigatie</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/aanpak" className="text-sm hover:text-white transition-colors">Over Ons</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Diensten</Link></li>
                            <li><Link href="/impressies" className="text-sm hover:text-white transition-colors">Impressies</Link></li>
                            <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Diensten */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Diensten</h3>
                        <ul className="space-y-3">
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Binnenschilderwerk</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Buitenschilderwerk</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Wandafwerking</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Glaszetten</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex flex-col">
                                <span className="font-semibold text-primary-300">Locatie</span>
                                <span>Struweelstraat 23</span>
                                <span>8043 VN Zwolle</span>
                            </li>
                            <li className="flex flex-col pt-2">
                                <span className="font-semibold text-primary-300">E-mail</span>
                                <a href="mailto:info@schildersbedrijfgroen.net" className="hover:text-white">info@schildersbedrijfgroen.net</a>
                            </li>
                            {/* Phone if available, context implies 'direct bellen' desired action */}
                            <li className="pt-2">
                                <Link href="/contact" className="inline-block px-4 py-2 bg-primary-700 hover:bg-primary-600 rounded-md text-white md:bg-transparent md:border md:border-primary-700 md:hover:bg-primary-800">
                                    Direct Contact Opnemen
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-primary-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-primary-500">
                        &copy; {currentYear} Schildersbedrijf Groen. Alle rechten voorbehouden.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-primary-500 hover:text-primary-300">Privacyverklaring</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
