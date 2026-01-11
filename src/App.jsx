import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import Scene from './components/Scene';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './styles/global.css';

function App() {
  return (
    <>
      <CustomCursor />

      {/* 3D Background & Scrollable Scene */}
      <div id="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <color attach="background" args={['#0a0a0a']} />

            {/* Ambient & Spot Lights for the scene */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <ScrollControls pages={5} damping={0.2}>
              {/* 3D Content that scrolls/moves */}
              <Scene />

              {/* HTML Content Overlay */}
              <Scroll html style={{ width: '100vw' }}>
                <main className="w-full">
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                  <Footer />
                </main>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>

      {/* Fallback / Overlay UI if needed (e.g. fixed nav) */}
      <nav style={{ position: 'fixed', top: 0, right: 0, padding: '2rem', zIndex: 50 }}>
        {/* Simple Nav can go here */}
      </nav>
    </>
  );
}

export default App;
