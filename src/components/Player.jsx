import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Player(props) {
  const { nodes, materials } = useGLTF('./models/Player.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes['Player-Mesh'].geometry} material={materials['Player-Material']} position={[0,0,0]} scale={[-0.01, 0.01, 0.01]} />
    </group>
  )
}

useGLTF.preload('./models/Player.gltf')
