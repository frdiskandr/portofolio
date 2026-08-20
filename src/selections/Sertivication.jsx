import React from 'react'
import { Suspense } from 'react'

const SertivicateComponent = React.lazy(() => import('../components/marque'))

const Sertivication = () => {
    return (
        <section className='my-20 cv-auto'>
            <Suspense fallback={<Spinner />}>
                <SertivicateComponent />
            </Suspense>
        </section>
    )
}

const Spinner = () => (
    <div className="flex items-center justify-center min-h-36">
        <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-lavender animate-spin" />
    </div>
)

export default Sertivication