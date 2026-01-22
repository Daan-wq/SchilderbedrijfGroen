import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
    return (
        <section className="w-full bg-white pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">

                <button disabled className="p-2 text-primary-300 cursor-not-allowed">
                    <ChevronLeft className="h-5 w-5" />
                </button>

                <Link
                    href="/impressies"
                    className="h-10 w-10 flex items-center justify-center rounded-md bg-primary-900 text-white font-medium"
                >
                    1
                </Link>
                <Link
                    href="/impressies"
                    className="h-10 w-10 flex items-center justify-center rounded-md text-primary-600 hover:bg-primary-50 font-medium transition-colors"
                >
                    2
                </Link>
                <Link
                    href="/impressies"
                    className="h-10 w-10 flex items-center justify-center rounded-md text-primary-600 hover:bg-primary-50 font-medium transition-colors"
                >
                    3
                </Link>

                <button className="p-2 text-primary-600 hover:text-primary-900 transition-colors">
                    <ChevronRight className="h-5 w-5" />
                </button>

            </div>
        </section>
    );
}
