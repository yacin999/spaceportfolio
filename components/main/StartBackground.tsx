"use client"

import React, {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
//@ts-ignore
import * as random from "math/random/dist/math-random.esm"

type Props = {}

const StartBackground = (props: Props) => {
    const ref:any = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius : 1.2}))
    
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta/10
        ref.current.rotation.y -= delta/15
    })
    return (
    <group rotation={[0, 0, Math.PI / 4]}>
        
    </group>
  )
}

export default StartBackground