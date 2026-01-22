"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/utils/animations";

interface FeatureStackProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function FeatureStack({ backgroundColor = "primary-50" }: FeatureStackProps) {
    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 lg:gap-24 items-start">

                {/* Left Column (Sticky Anchor) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    className="sticky top-24"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-6">
                        Alles onder één dak voor uw woning of bedrijfspand.
                    </h2>
                    <p className="text-lg text-primary-700 mb-8 leading-relaxed">
                        Bij Schildersbedrijf Groen vindt u vakmanschap op elk gebied. Van strak lakwerk tot specialistische wandafwerking en glasherstel.
                    </p>
                    <Link
                        href="/diensten"
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors group"
                    >
                        Bekijk alle diensten
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="mt-12 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hidden md:block">
                        <Image
                            src="/images/139_3958.jpg"
                            alt="Schilderwerk detail"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Column (Stack) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-col gap-6"
                >

                    {/* Card 1: Schilderwerk */}
                    <motion.div variants={fadeInUp} className="bg-primary-900 text-white p-8 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-1">
                        <div className="h-12 w-12 bg-primary-800 rounded-lg flex items-center justify-center mb-6 text-primary-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" /><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" /><path d="M14.5 17.5 4.5 15" /><polyline points="12 3 21 12" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Schilderwerk Binnen & Buiten</h3>
                        <p className="text-primary-200 leading-relaxed mb-6">
                            Strak in de lak, beschermd tegen weer en wind. Wij gebruiken alleen de beste materialen voor een duurzaam resultaat.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-primary-300"><CheckCircle2 className="h-4 w-4 text-primary-400" /> Kozijnen en deuren</li>
                            <li className="flex items-center gap-2 text-sm text-primary-300"><CheckCircle2 className="h-4 w-4 text-primary-400" /> Gevelbetimmering</li>
                            <li className="flex items-center gap-2 text-sm text-primary-300"><CheckCircle2 className="h-4 w-4 text-primary-400" /> Trappen en vloeren</li>
                        </ul>
                    </motion.div>

                    {/* Card 2: Behangen */}
                    <motion.div variants={fadeInUp} className="bg-white text-primary-950 p-8 rounded-2xl shadow-md border border-primary-100 transform transition-transform hover:-translate-y-1">
                        <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Behangen & Wandafwerking</h3>
                        <p className="text-primary-600 leading-relaxed mb-6">
                            Van renovlies tot exclusief patroonbehang. Wij zorgen voor naadloze wanden als perfecte basis voor uw interieur.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-primary-700"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Renovlies en glasweefsel</li>
                            <li className="flex items-center gap-2 text-sm text-primary-700"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Patroonbehang</li>
                            <li className="flex items-center gap-2 text-sm text-primary-700"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Sauswerk</li>
                        </ul>
                    </motion.div>

                    {/* Card 3: Glas */}
                    <motion.div variants={fadeInUp} className="bg-primary-800 text-white p-8 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-1">
                        <div className="h-12 w-12 bg-primary-700 rounded-lg flex items-center justify-center mb-6 text-primary-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2h-1a6 6 0 0 0-6 6v14a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2Z" /><rect width="10" height="20" x="2" y="2" rx="2" /><path d="M12 2v20" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Glaszetten & Herstel</h3>
                        <p className="text-primary-200 leading-relaxed mb-6">
                            Kapotte ruit of betere isolatie nodig? Wij plaatsen dubbel glas, HR++ en herstellen glasschade vakkundig.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-primary-300"><CheckCircle2 className="h-4 w-4 text-primary-400" /> HR++ isolatieglas</li>
                            <li className="flex items-center gap-2 text-sm text-primary-300"><CheckCircle2 className="h-4 w-4 text-primary-400" /> Vervangen lekke ruiten</li>
                            <li className="flex items-center gap-2 text-sm text-primary-300"><CheckCircle2 className="h-4 w-4 text-primary-400" /> Glaslatten vervangen</li>
                        </ul>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
