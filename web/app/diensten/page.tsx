import HeroVisual from "@/components/HeroVisual";
import ProcessContainer from "@/components/ProcessContainer";
import SplitContent from "@/components/SplitContent";

export const metadata = {
    title: "Onze Diensten"
};

export default function DienstenPage() {
    return (
        <main>
            {/* 2. hero-visual (Using reused component, but ideally needs content override props if reusing exactly. 
           However, Implementation Plan listed distinct 'HeroVisual' for Landing and Diensten.
           If reusing the same component file without props, it will duplicate Landing content.
           
           FIX: I need to update HeroVisual to accept props or create HeroVisualServices.
           Given "Modular Template Protocol", strict adherence implies reusing the PATTERN (template).
           But usually components are reused with props.
           
           I will check if I made HeroVisual reusable in previous step. 
           I wrote hardcoded content in HeroVisual.tsx.
           
           Action: I will refactor HeroVisual to accept props, with default values falling back to Landing content.
           Then use it here with Service content.
      */}
            <HeroVisual
                title="Onze Expertise"
                subtitle="Van totaalonderhoud tot specialistisch behangwerk. Ontdek wat wij voor uw woning of bedrijfspand kunnen betekenen."
                ctaLabel="Vraag offerte aan"
                ctaLink="/contact"
                image="/images/139_3958.jpg"
                secondaryCta={false}
            />

            {/* 3. process-container - Using off-white to contrast with HeroVisual/Default */}
            <ProcessContainer backgroundColor="off-white" />

            {/* 4. split-content */}
            <SplitContent
                title="Wandafwerking met precisie"
                text="Naast schilderwerk zijn wij gespecialiseerd in diverse vormen van wandafwerking. Van strak sauswerk tot exclusief behang. Wij zorgen voor de perfecte basis."
                image="/images/139_3962_r1.jpg"
                imagePosition="right"
                backgroundColor="primary-50"
                isServiceHighlight={true} /* Optional prop styling */
            />
        </main>
    );
}
