"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/utils/animations";

interface LocationInfoSplitProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function LocationInfoSplit({ backgroundColor = "white" }: LocationInfoSplitProps) {
    // Encoded address for Google Maps iframe
    const address = "Struweelstraat 23, 8043 VN Zwolle";

    // Using a simpler embed approach that doesn't strictly require an API key for basic view if needed, 
    // but the standard way often uses the share embed link.
    const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.18562340331!2d6.068211377045719!3d52.53911593450518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7df336c1a1795%3A0x6e9a0c0e7b8c8d8c!2sStruweelstraat%2023%2C%208043%20VN%20Zwolle!5e0!3m2!1snl!2snl!4v1710000000000!5m2!1snl!2snl";

    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column (Map) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-primary-100 shadow-inner bg-primary-50"
                >
                    <iframe
                        src={mapEmbedSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Locatie van Schildersbedrijf Groen"
                    ></iframe>
                </motion.div>

                {/* Right Column (Info) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-primary-950 mb-8">Onze Gegegevens</motion.h2>

                    <div className="space-y-6">
                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">Bezoekadres</h3>
                                <p className="text-primary-600">Struweelstraat 23</p>
                                <p className="text-primary-600">8043 VN Zwolle</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">E-mail</h3>
                                <a href="mailto:info@schildersbedrijfgroen.net" className="text-primary-600 hover:text-primary-800 transition-colors">
                                    info@schildersbedrijfgroen.net
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">Telefoon</h3>
                                <a href="tel:0612345678" className="text-primary-600 hover:text-primary-800 transition-colors">
                                    06 1234 5678
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">Bereikbaarheid</h3>
                                <p className="text-primary-600">Maandag t/m Vrijdag: 08:00 - 17:00</p>
                            </div>
                        </motion.div>

                    </div>

                    <motion.div variants={fadeInUp} className="mt-8">
                        <Link
                            href="https://maps.google.com"
                            target="_blank"
                            className="inline-flex items-center justify-center px-6 py-2 border border-primary-200 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                        >
                            Route plannen
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
