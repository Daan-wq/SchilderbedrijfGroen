import HeroTypographic from "@/components/HeroTypographic";
import TeamGrid from "@/components/TeamGrid";
import SplitContent from "@/components/SplitContent";
import PersonalCTA from "@/components/PersonalCTA";

export const metadata = {
    title: "Onze Aanpak"
};

export default function AanpakPage() {
    return (
        <main>
            {/* 2. hero-typographic */}
            <HeroTypographic />

            {/* 3. team-grid */}
            <TeamGrid backgroundColor="primary-50" />

            {/* 4. split-content (Story 1) */}
            <SplitContent
                title="Ontzorging van A tot Z"
                text="Wij nemen al het werk uit handen. Van het afdekken van uw meubels tot het netjes achterlaten van de werkplek. U heeft er geen omkijken naar."
                image="/images/139_3956.jpg"
                imagePosition="left"
                listItems={[
                    "Zorgvuldige voorbereiding en afdekken",
                    "Gebruik van professionele stofafzuiging",
                    "Opruimen en schoon opleveren"
                ]}
            />

            {/* 5. split-content (Story 2) */}
            <SplitContent
                title="Kwaliteit die blijft"
                text="Wij geloven niet in half werk. Door gebruik te maken van hoogwaardige verf en materialen garanderen wij een resultaat waar u jarenlang plezier van heeft."
                image="/images/139_3953.jpg"
                imagePosition="right"
                backgroundColor="off-white"
                listItems={[
                    "Sigma en Sikkens verfsystemen",
                    "Grondige ondergrondbehandeling",
                    "Garantie op uitgevoerd werk"
                ]}
            />

            {/* 6. personal-cta */}
            <PersonalCTA />
        </main>
    );
}
