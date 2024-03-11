'use client';


import NavBar from "@/components/nav-bar";
import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";
import ToolSection from "@/components/sections/tool";
import PortfolioSection from "@/components/sections/portfolio";
import ContactSection from "@/components/sections/contact";
import FooterSection from "@/components/sections/footer";
//@ts-ignore
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import gsap from "gsap";
import { useLayoutEffect } from "react";


export default function Home() {
  
  useLayoutEffect(() => {
    const links = gsap.utils.toArray('li')
    
    let effect = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger,TextPlugin,ScrollToPlugin)
      const nav_link = ['home', 'about', 'tool', 'portfolio', 'contact']
      links.forEach((link,index) => {
        
        //@ts-ignore
        
        link.addEventListener('click', () => {
          
          gsap.to(window, {scrollTo: `#${nav_link[index]}`})
        })
      })
      gsap.to('.home-nav', {scrollTo: '#home'})
      let tl = gsap.timeline({defaults: {ease: 'back.out'}})
      tl
        .fromTo('.text1', {opacity: 0, y: 500},{opacity: 1, y: 0, duration: 1})
        .fromTo('.text2', {opacity: 0, y: -100},{opacity: 1, y: 0, duration: .7})
        .fromTo('.nav', {opacity: 0, y: -200},{opacity: 1, y: 0, duration: .7},'<')
  
  
      const sections = gsap.utils.toArray('section') 
      sections.forEach((section, index) => {
        //@ts-ignore
        let h4 = section.querySelector('h4')
        //@ts-ignore
        let h2 = section.querySelector('h2')
        //@ts-ignore
        let content = section.querySelector('.content')
        let tl = gsap.timeline({defaults: {duration: .4}})
          .fromTo(h4, {opacity: 0, y: -100}, {opacity: 1, y:0})
          .fromTo(h2, {opacity: 0, y: -100}, {opacity: 1, y:0})
          .fromTo(content, {opacity: 0, y: 100}, {opacity: 1, y:0})
        ScrollTrigger.create({
          //@ts-ignore
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          // markers: true,
          scrub: 1,
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(`.nav-list li:nth-child(${index+1})`, {color: 'white',duration: 0.5})
            }else {
              gsap.to(`.nav-list li:nth-child(${index+1})`, {color: '#535353',duration: 0.5})
            }
            
          }
        })
        
        ScrollTrigger.create({
          //@ts-ignore
          trigger: section,
          start: 'top 90%',
          end: '+=200',
          animation: tl
        })
      })
      
  
      ScrollTrigger.create({
        trigger: '.about',
        start: '40% center',
        end: '75% center',
        scrub: 1,
        // markers: true,
        pin: '.me',
        pinSpacing: false
        // animation: t
      })


    })   

    return () => effect.kill()

   
    
  } )

  return (
    //@ts-ignore
    <div className="bg-black min-h-screen text-white relative box pb-4">
      <NavBar />
      <HomeSection />
      <div className="flex flex-col gap-40">
        <AboutSection />
        <ToolSection />
        <PortfolioSection />
        <ContactSection />
      </div>
      
    </div>
  );
}
