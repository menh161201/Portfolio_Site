import { SewingPinIcon,SewingPinFilledIcon, DotsVerticalIcon, LightningBoltIcon, DesktopIcon, Pencil2Icon } from "@radix-ui/react-icons";

export default function AboutSection() {
    return (
        <section className="min-h-[100vh] flex flex-col items-center justify-center gap-32 about" id="about">
            <div className="flex flex-col gap-4 items-center">
                <h4 className="text-lg md:text-2xl">get to know</h4>
                <h2 className="font-black text-3xl md:text-5xl">about me</h2>
            </div>
            
            <div className="min-h-max flex flex-col gap-10 xl:grid xl:grid-cols-2 about w-[80vw]">
                <div className="flex flex-col items-center justify-center gap-6 lg:me">
                    <div className="rounded-lg  border border-[#535353]/25 h-[18rem] w-max flex items-end bg-[#535353]/25">
                        <img src="/me.png" alt="" className="h-[20rem] object-cover rounded-lg"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2 items-center">
                            <SewingPinFilledIcon />
                            <h5>Hanoi, Vietnam</h5>
                        </div>
                        <div>
                            <DotsVerticalIcon />
                        </div>
                        <div className="flex gap-2 items-center">
                            <SewingPinIcon />
                            <h5>Minneapolis, Minnesota, US</h5>
                        </div>
                        <a download href={'./Resume.pdf'} className="border border-[#535353]/25 p-2 rounded-lg font-light mt-4 text-center hover:border-[#535353] duration-200">Download CV</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="font-black text-xl md:text-3xl text-[#535353] mb-2">A brief intro, who am I?</h3>
                        <p className="text-lg md:text-xl font-light leading-loose text-justify">
                        Hello, I'm Minh Nguyen. A dedicated <span className="font-medium">frontend developer</span> and <span className="font-medium">UI designer</span>, I strive to craft <span className="font-medium">visually appealing</span> and <span className="font-medium">user-friendly</span> websites. <span className="font-medium">Motivated</span> and <span className="font-medium">detail-oriented</span>, I tackle each task with <span className="font-medium">efficiency</span> and a keen eye for <span className="font-medium">quality</span>. Whether <span className="font-medium">collaborating</span> within a team or working <span className="font-medium">independently</span>, my commitment is to deliver exceptional results and consistently exceeding expectations.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-3xl font-black text-[#535353] mb-2">What do I do?</h3>
                        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 ">
                            <div className="p-4 border border-[#535353]/25 rounded-lg lg:max-w-[47%] flex flex-col items-center gap-2 text-center hover:scale-105 duration-300">
                                <LightningBoltIcon />
                                <p className="text-xl">Development</p>
                                <small className="text-lg font-light">Bringing your vision to life with the latest technology and design trends.</small>
                            </div>
                            <div className="p-4 border border-[#535353]/25 rounded-lg lg:max-w-[47%] flex flex-col items-center gap-2 text-center hover:scale-105 duration-300">
                                <Pencil2Icon />
                                <p className="text-xl">UI Design</p>
                                <small className="text-lg font-light">Designing interfaces that are intuitive, efficient, and enjoyable to use.</small>
                            </div>
                            <div className="p-4 border border-[#535353]/25 rounded-lg lg:max-w-[47%] flex flex-col items-center gap-2 text-center hover:scale-105 duration-300">
                                <DesktopIcon />
                                <p className="text-xl">Web App</p>
                                <small className="text-lg font-light">Transforming ideas into exceptional web app experiences.</small>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="p-4 bg-[#535353]/25 max-w-max border border-black rounded-lg hover:opacity-85 cursor-pointer duration-150">
                        Let's talk
                    </div>
                    
                </div>
            </div>
        </section>
    )
}