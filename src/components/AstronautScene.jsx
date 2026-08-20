import { Canvas, useFrame } from '@react-three/fiber'
import { Astronaut } from './Astronaut'
import { Float } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import { Suspense } from 'react'

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5, delta)
    })
}

const AstronautScene = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });

    return (
        <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={null}>
                <Float>
                    <Astronaut
                        scale={isMobile && (0.23)}
                        position={isMobile && ([0, -1.5, 0])} />
                </Float>
                <Rig />
            </Suspense>
        </Canvas>
    )
}

export default AstronautScene