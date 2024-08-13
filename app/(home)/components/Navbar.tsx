import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar({className}: {className?:string}) {

  const socials = [
    {
      link: "https://www.linkedin.com/in/rishabhdubeyyy/",
      lable: "LinkedIn",
      icon: SiLinkedin,
    },

    {
      link: "https://github.com/rishabhdubeyy",
      lable: "GitHub",
      icon: SiGithub,
    }
  ]


  return (
    <nav className={cn(' py-10 flex justify-between items-center animate-move-down', className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-purple-600 -rotate-2 hover:scale-125 transition duration-700 ease-in-out'>
        Rexer.Dev 👾
      </h1>
      <div className='flex items-center gap-5'>

        {socials.map((social,index)=>{
          const Icon = social.icon

          return <Link href={social.link} key={index} aria-label={social.lable}>
            
            <Icon className='w-5 h-5 hover:scale-125 transition-all'/>

          </Link>
        })}

      </div>
    </nav>
  )
}
