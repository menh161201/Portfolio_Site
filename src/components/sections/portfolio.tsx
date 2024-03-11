import { GitHubLogoIcon,RocketIcon } from "@radix-ui/react-icons";
import PortfolioCard from "../portfolio-card";

export default function PortfolioSection() {
    return (
        <section className="min-h-[100vh] flex flex-col items-center justify-center gap-32 about" id="portfolio">
            <div className="flex flex-col gap-4 items-center">
                <h4 className="text-lg md:text-2xl">what do i have</h4>
                <h2 className="font-black text-3xl md:text-5xl">my portfolio</h2>
            </div>
            
            <div className="min-h-max w-[80vw] flex flex-col items-center xl:flex-row xl:justify-between xl:flex-wrap gap-20 content">
                <PortfolioCard img="/portfolio/fitnessWebsite.png" year="2023" stack="React / Firebase / CSS" github="https://github.com/AugustanaCSC490Spring23/Nighthawk-Fitness" live="https://fitness-dev-2.web.app/" name="Fitness Web App"/>
                <PortfolioCard img="/portfolio/natours.PNG" year="2023" stack="HTML / CSS / SaSS" github="https://github.com/menh161201/Natours" live="https://natours-980a4.web.app/" name="Tours Landing Page"/>
                <PortfolioCard img="/portfolio/nexter.PNG" year="2023" stack="HTML / CSS / SaSS" github="https://github.com/menh161201/Nexter" live="https://nexter-a7eb5.web.app/" name="Property Landing Page"/>
                <PortfolioCard img="/portfolio/trillo.PNG" year="2023" stack="HTML / CSS / SaSS" github="https://github.com/menh161201/Trillo" live="https://trillo-3aa42.web.app/" name="Booking Landing Page"/>
                <PortfolioCard img="/portfolio/reminiscer.PNG" year="2024" stack="Next / Supabase / Tailwind" github="https://github.com/menh161201/Reminiscer" live="https://reminiscer-a09f6.web.app/" name="Photo Sharing App"/>
                <PortfolioCard img="/portfolio/note.PNG" year="2024" stack="Next / Supabase / Tailwind / Vercel" github="https://github.com/menh161201/BetaNote" live="https://beta-note.vercel.app/" name="Note Taking App"/>
                
            </div>
        </section>
    )
}