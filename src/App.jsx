import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
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

      {/* 3D Background - Fixed & Non-Blocking */}
      <div id="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <color attach="background" args={['#0a0a0a']} />

            {/* Ambient & Spot Lights for the scene */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Content Scrolled Normally - On Top */}
      <main className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
