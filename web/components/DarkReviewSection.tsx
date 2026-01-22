"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/utils/animations";

interface DarkReviewSectionProps {
    backgroundColor?: string;
    textColor?: string;
}

export default function DarkReviewSection({
    backgroundColor = "bg-primary-950",
    textColor = "text-white"
}: DarkReviewSectionProps) {
    return (
        <section className={clsx("w-full py-16 md:py-24", backgroundColor)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column: Visual/Reviews */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                    className="relative max-w-md mx-auto md:ml-0 md:mr-auto mb-12 md:mb-0"
                >

                    {/* Background Card (Second Review - Exact duplicate structure) */}
                    <div className="bg-white p-6 rounded-xl shadow-xl absolute -top-4 -right-4 md:-top-8 md:-right-8 z-0 transform rotate-6 hidden sm:block opacity-40">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-xs font-bold text-primary-400">10/10</span>
                        </div>
                        <p className="text-primary-800 text-base md:text-lg font-medium italic mb-6">
                            "Fijn contact en snel geschakeld. Het schilderwerk is superstrak opgeleverd. Wij zijn erg blij met het resultaat!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden bg-primary-100">
                                <Image src="/placeholders/avatar.png" alt="Klant" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary-900">M. de Boer</p>
                                <p className="text-xs text-primary-500">Aa-landen, Zwolle</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-white p-6 rounded-xl shadow-2xl relative z-10 transform md:-rotate-2"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-primary-600">10 / 10</span>
                        </div>
                        <p className={clsx("text-lg font-medium italic mb-6", textColor === "text-white" ? "text-primary-800" : "text-primary-900")}>
                            "Zeer tevreden over het buitenschilderwerk. Duidelijke afspraken en vakmensen over de vloer. Het huis ziet er weer als nieuw uit."
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-primary-100">
                                    <Image src="/placeholders/avatar.png" alt="Klant" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary-900">Fam. Jansen</p>
                                    <p className="text-xs text-primary-500">Stadshagen, Zwolle</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] uppercase tracking-wider text-primary-300 font-bold">Bron</p>
                                <p className="text-xs font-bold text-primary-400">offertesonline.nl</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Text */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center md:text-left"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
                        Een 10/10 op offertesonline.nl
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg text-primary-200 mb-8 leading-relaxed">
                        Klanttevredenheid staat bij ons op nummer één. Met een perfecte score op offertesonline.nl laten we zien dat we onze beloftes nakomen: vakwerk, heldere communicatie en een resultaat waar u jarenlang plezier van heeft.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-900 font-bold rounded-full hover:bg-primary-50 transition-colors"
                        >
                            Bekijk alle reviews
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
