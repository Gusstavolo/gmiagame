import { Player } from './Player';
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";
import { Physics, RigidBody, CylinderCollider, CuboidCollider } from "@react-three/rapier";
import { Box } from "@react-three/drei";
export const Experience = () => {
    return (
        <>
        <OrbitControls />
        <OrthographicCamera
                makeDefault
                zoom={200}
                position={[0, 100, 200]}
              />
        <ambientLight intensity={1} />
        <directionalLight 
            position={[5,5,5]}
            intensity={[0.8]}
            castShadow
            color={"#9e69da"}
            />
            
        <Player />

        {}
        <RigidBody colliders={false} type="fixed" position={[0,-0.65,0]}>
           
           <Box scale={[6,1,6]} receiveShadow>
           <meshStandardMaterial color="green" receiveShadow />
           </Box>
           
            <CuboidCollider args={[3, 0.5, 3]} /> 
        </RigidBody>
        
    
        
        </>
    )


}