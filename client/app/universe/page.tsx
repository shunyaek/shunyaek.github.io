"use client"

import styles from "../page.module.css"
import { useRef, useState } from 'react'
import * as THREE from "three";
import { Canvas, useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Porsche() {
  const gltf = useLoader(GLTFLoader, './assets/scene.gltf')
  // useFrame((state, delta) => (gltf.scene.rotateY(0.01)))
  return <primitive scale={[15, 15, 15]} object={gltf.scene} />
}


const Box = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.2 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[3, 6, 3]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "red"} />
    </mesh>
  );
}

const Sphere = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.1 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[3.4]} />
      <meshStandardMaterial color={hovered ? "blue" : "green"} />
    </mesh>
  );
}

export default function Universe() {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 10, 10] }}>
      <ambientLight intensity={1} />
      <pointLight position={[30, 0, 0]} intensity={0.6} />
      <pointLight position={[0, 30, 0]} intensity={0.6} />
      <pointLight position={[0, 0, 30]} intensity={0.6} />
      <spotLight position={[30, 0, 0]} intensity={0.6} />
      <spotLight position={[0, 30, 0]} intensity={0.6} />
      <spotLight position={[0, 0, 30]} intensity={0.6} />
      <axesHelper args={[50]} />
      <Box position={[3, 0, 0]} />
      <Sphere position={[-3, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}
