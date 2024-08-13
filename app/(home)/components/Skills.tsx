"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiElectron, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {

    const skills = [
        {
            text:"React",
            Icon: SiReact,
        },

        {
            text:"Next.Js",
            Icon: SiNextdotjs,
        },

        {
            text:"Tailwind",
            Icon: SiTailwindcss,
        },

        {
            text:"Node.Js",
            Icon: SiNodedotjs,
        },

        {
            text:"Python",
            Icon: SiPython,
        },

        {
            text:"Electron",
            Icon: SiElectron
        }
    ]




    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text='Skills 🧠' className='flex flex-col items-center justify-between -rotate-3'/>
            <HoverEffect items={skills}/>
        </div>
)
}
