import { Slackside_One } from "next/font/google";
;

const Slack = Slackside_One({weight: ["400"], subsets: ["latin"]})

export default function HomeSection() {
    return (
        <section className="h-[100vh] flex flex-col gap-4 items-center justify-center section" id="home">
            <h1 className="font-black text-5xl md:text-7xl text1">hello, world</h1>
            <h3 className={`text-xl md:text-3xl ${Slack.className} text2`}>I'm Minh</h3>
            
        </section>
    )
}