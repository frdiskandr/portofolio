import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/FrameWorks'
import { PixelateCanvas } from '../components/PixeledCanvas'


const About = () => {
    const grid2Container = useRef()
    const YearNow = new Date().getFullYear()
    const experience = YearNow - 2023
    return (
        <section id='about' className='c-space section-spacing'>
            <h2 className='text-heading'>About Me</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/* grid */}
                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.webp" alt="coding-img" width={1200} height={700} loading="lazy" decoding="async" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' />
                    <div className="z-10">
                        <p className='headtext'>Hi, I'm Faried Iskandar</p>
                        <p className='subtext'>Full-Stack Developer with {experience} years of experience building scalable web applications. Skilled in Golang, Node.Js/Typescript, and Python</p>
                    </div>
                    <div className='absolute inset-x-0 pointer-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'></div>
                </div>
                {/* grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className='flex items-end text-5xl text-gray-500'>
                            CODE IS ELEGANT
                        </p>
                        <Card
                            style={{ rotate: '75deg', top: '40%', left: '60%' }}
                            text={"Node Js"}
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '45deg', top: '20%', left: '70%' }}
                            text={"Golang"}
                            containerRef={grid2Container} />
                    </div>
                </div>
                {/* grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="w-[50%] relative  z-10">
                        <p className="headtext">Location</p>
                        <p className='subtext'>I'm From Bogor. <br/> West java, Indonesia.</p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%] z-0'>
                        {/* <Globe/> */}
                        <PixelateCanvas image={"/assets/personal/WhatsApp Image 2025-09-12 at 10.36.32_bb3b048a.jpg"} className={" z-0 absolute top-5 left-1"} height={240} width={400}/>
                    </figure>
                </div>
                {/* grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            DO you want start a project together?
                        </p>
                        <CopyEmailButton/>
                    </div>
                </div>
                {/* grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About