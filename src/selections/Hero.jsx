import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import HeroText from '../components/HeroText'
import ParalaxBackground from '../components/ParalaxBackground'

const AstronautScene = lazy(() => import('../components/AstronautScene'))

const useInView = (threshold = 0) => {
    const ref = useRef(null)
    const [inView, setInView] = useState(true)

    useEffect(() => {
        const el = ref.current
        if (!el || !('IntersectionObserver' in window)) return
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin: '50% 0px 50% 0px', threshold }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return [ref, inView]
}

const Hero = () => {
    const [sectionRef, inView] = useInView()

    return (
        <section ref={sectionRef} id='home' className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
            <HeroText />
            <ParalaxBackground />
            <figure className='absolute inset-0' style={{ width: "100vw", height: "100vh" }}>
                {inView && (
                    <Suspense fallback={<Loader />}>
                        <AstronautScene />
                    </Suspense>
                )}
            </figure>
        </section>
    )
}

const Loader = () => (
    <div className="flex items-center justify-center w-full h-full">
        <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-lavender animate-spin" />
    </div>
)

export default Hero