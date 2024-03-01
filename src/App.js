import './App.css';

import { GenerateCards } from './components/GenerateCards';

import { Experience } from './components/Experience';
import React, { Suspense } from 'react';

import { Canvas, useThree } from '@react-three/fiber';
import { Physics, RigidBody, CylinderCollider } from "@react-three/rapier";





function App() {
  return (
    
    <div className='world'>
       <div className='floorofworld'>
          <Canvas shadows camera={[0,0,0]} >
            <color attach="background" args={["#ececec"]} />
            
          <Suspense>  
            <Physics debug>
              <Experience />
            </Physics>
    
          </Suspense>
   
              </Canvas>
          </div>
    
      
      <footer>
        <div className='OrganizeCards'>
          <GenerateCards />
          

        </div>
      
      </footer>

    </div>
    
    
  );
}

export default App;