


export default function ToolSection() {
    return (
        <section className="min-h-[100vh] flex flex-col items-center justify-center gap-32" id="tool">
            <div className="flex flex-col gap-4 items-center">
                <h4 className="text-lg md:text-2xl">have a look at</h4>
                <h2 className="font-black text-3xl md:text-5xl">my digital tool box</h2>
            </div>
            
            <div className="min-h-max w-[80vw] content">
                
                <div className="flex flex-col gap-10 xl:grid xl:grid-cols-2 xl:gap-32">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-black text-2xl lg:text-3xl text-[#535353] mb-2">Programming Languages / Web Technologies</h3>
                        <div className="flex items-center gap-6 flex-wrap justify-center">
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">JavaScript</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">TypeScript</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Python</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Java</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">HTML</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">CSS</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-black text-xl md:text-3xl text-[#535353] mb-2">Frontend Development / Frameworks</h3>
                        <div className="flex items-center gap-6 flex-wrap justify-center">
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">React.js</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Next.js</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">NextUI</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">shadcn/ui</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Tailwind</p>
  
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-black text-xl md:text-3xl text-[#535353] mb-2">Backend Development / Databases</h3>
                        <div className="flex items-center gap-6 flex-wrap justify-center">
                        
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Node.js</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Supabase</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Postgresql</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Firebase</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">NextAuth.js</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Vercel</p>
                            
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-black text-xl md:text-3xl text-[#535353] mb-2">Development Tools / Version Control</h3>
                        <div className="flex items-center gap-6 flex-wrap justify-center">
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">VSCode</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Git</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">GitHub</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Figma</p>
                            <p className="text-lg md:text-xl font-light border border-[#535353]/25 p-2 rounded-lg">Adobe Suite</p>
                            
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}