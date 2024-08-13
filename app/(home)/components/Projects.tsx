import React from 'react'
import { SiBootstrap, SiHtml5, SiJavascript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { cn } from '@/lib/utils'
import { Icon } from 'lucide-react'

export default function Projects() {

    const projects = [
        {
            title: "Chess with Ai",
            tech: [SiHtml5, SiJavascript, SiBootstrap],
            link: "https://rishabhdubeyy.github.io/chess_with_ai/",
            cover: "/ChessWithAi.png",
            background: "bg-blue-500",
            
        },

        {
            title: "Chess with Ai",
            tech: [SiHtml5, SiJavascript, SiBootstrap],
            link: "https://rishabhdubeyy.github.io/chess_with_ai/",
            cover: "/ChessWithAi.png",
            background: "bg-purple-500",
            
        },

    ]

    return <div className='py-10 p-5 sm:p-0'>
        <Title text='Projects 🛠️' className='flex flex-col items-center justify-between rotate-3'/>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project, index) => {
                return (
                    <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className=' flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className='w-6 h-6' key={index} />;
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
}
