import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import "./styles/global.css";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <CustomCursor />

      {/* 3D Background - Isolated ErrorBoundary ensures UI survives if 3D crashes */}
      <div className="canvas-container">
        <ErrorBoundary>
          {mounted && (
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          )}
        </ErrorBoundary>
      </div>

      {/* Loading Indicator */}
      <div className="loader-container">
        <Suspense fallback={<Loader />}>
        </Suspense>
      </div>

      {/* HTML UI - Wrapped in its own ErrorBoundary so we know if UI specifically crashes */}
      <div className="ui-layer">
        <ErrorBoundary>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}
