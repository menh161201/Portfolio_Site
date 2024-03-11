import { GitHubLogoIcon,RocketIcon } from "@radix-ui/react-icons";

interface PortfolioCardProps {
    year: string,
    stack: string,
    github: string,
    live: string,
    name: string,
    img: string
}

export default function PortfolioCard({year,stack,github,live,name,img}:PortfolioCardProps) {
    return (
        <div className="lg:max-w-[700px] md:max-w-screen flex flex-col gap-4">
            <div className="rounded-lg overflow-hidden">
                <img src={img} alt="" />
            </div>
            <div className="flex gap-4">
                <div className="border border-[#535353]/25 p-2 max-w-max text-[#535353] rounded-lg">{year}</div>
                <div className="border border-[#535353]/25 p-2 max-w-max text-[#535353] rounded-lg">{stack}</div>
                <a className="border border-[#535353]/25 p-2 max-w-max flex items-center gap-2 text-[#535353] rounded-lg" href={github} target="_blank"><GitHubLogoIcon /> GitHub</a>
                <a className="border border-[#535353]/25 p-2 max-w-max flex items-center gap-2 text-[#535353] rounded-lg" href={live} target="_blank"><RocketIcon /> Live Site</a>
            </div>
            <h3 className="text-3xl">{name}</h3>
        </div>
    )
}