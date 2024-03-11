import gsap from "gsap";

export default function NavBar() {
  
    return (
        <div className="fixed top-0 w-[100%] flex justify-center pt-10 nav z-50 bg-black">
            <div className="flex gap-7 md:gap-28 text-[#535353] nav-list p-2 border border-[#535353]/25 rounded-lg">
                <li className="home-nav">home</li>
                <li className="text-[#535353]">about</li>
                <li className="text-[#535353]">tools</li>
                <li className="text-[#535353]">portfolio</li>
                <li className="text-[#535353]">contact</li>
            </div>
        </div>
    )
}