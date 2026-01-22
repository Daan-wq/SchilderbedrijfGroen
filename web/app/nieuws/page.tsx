import HeroTextOnly from "@/components/HeroTextOnly";
import BlogGrid from "@/components/BlogGrid";

export const metadata = {
    title: "Nieuws & Advies | Schildersbedrijf Groen",
    description: "Lees onze laatste artikelen over schilderwerk, onderhoud en kleuradvies."
};

export default function NieuwsPage() {
    return (
        <main>
            <HeroTextOnly
                title="Nieuws & Advies"
                subtitle="Inspiratie, tips en wetenswaardigheden van de vakman."
            />

            <BlogGrid
                backgroundColor="white"
                itemLinkDestination="slug"
            />
        </main>
    );
}
