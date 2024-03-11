
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon,PersonIcon } from '@radix-ui/react-icons';

export default function ContactSection() {
    const form = useRef(null)
    const sendEmail = (e:any) => {
        e.preventDefault();
        const currentForm = form.current
        if (currentForm == null) return;
        emailjs
          .sendForm('service_vqb8jdh', 'template_x89zmll', currentForm, {
            publicKey: 'zt00GF6ALNQR_tA_H',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section className="min-h-[100vh] flex flex-col items-center justify-center gap-32 about" id='contact'>
            <div className="flex flex-col gap-4 items-center">
                <h4 className="text-lg md:text-2xl">get in touch</h4>
                <h2 className="font-black text-3xl md:text-5xl">contact me</h2>
            </div>
            
            <div className="min-h-max flex flex-col gap-10 lg:grid lg:grid-cols-3 content w-[80vw] md:gap-32">
                <div className="col-span-2">
                    <form action="" ref={form} className='flex flex-col gap-10' onSubmit={sendEmail}>
                      <div className='flex flex-col gap-2'>
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" id='name' name="name" placeholder='Your name' className='bg-transparent border border-[#535353]/35 rounded-lg p-4 placeholder:font-light placeholder:text-white focus:outline-none focus:placeholder:invisible ' required/>
                      </div>
                      
                      <div className='flex flex-col gap-2'>
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" id='email' name="email" placeholder='Your email' className='bg-transparent border border-[#535353]/35 rounded-lg p-4 placeholder:font-light placeholder:text-white focus:outline-none focus:placeholder:invisible' required/>
                      </div>
                      <textarea name="message" id="" rows={7} placeholder='Your message' className='bg-transparent border border-[#535353]/35 rounded-lg p-2 placeholder:font-light placeholder:text-white focus:outline-none focus:placeholder:invisible' required></textarea>
                      <button className='p-4 bg-[#535353]/25 max-w-max border border-black rounded-lg hover:opacity-85 cursor-pointer duration-150'>Send</button>
                    </form>
                </div>
                <div className="col-span-1 flex flex-col gap-10 ">
                    <div className='flex flex-col gap-1'>
                      <h3 className='text-3xl text-[#535353] '>contact details</h3>
                      <div className='flex flex-col gap-2'>
                        <p className='flex gap-2 items-center'><PersonIcon />+1 (309)-631-4521</p>
                        <p className='flex gap-2 items-center'><EnvelopeClosedIcon /> minhdnguyen1612@gmail.com</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h3 className='text-3xl text-[#535353] '>my digital space</h3>
                      <div className='flex flex-col gap-2'>
                        <a href='https://www.linkedin.com/in/minh-nguyen-818698256/' target='_blank' className='flex gap-2 items-center'><LinkedInLogoIcon /> LinkedIn</a>
                        <a href='https://github.com/menh161201' target='_blank' className='flex gap-2 items-center'><GitHubLogoIcon /> GitHub</a>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h3 className='text-3xl text-[#535353] '>location</h3>
                      <div className='flex flex-col gap-2'>
                        <p>Minneapolis, Minnesota, US</p>
                        
                      </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}