import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./App.css";
// import ClientLogos from "./components/ClientLogos";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsDesktop(innerWidth >= 768);
    addEventListener('resize', handleResize);
    return () => removeEventListener('resize', handleResize);
  }, [])
  return (
    <div className="min-h-screen">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="container -z-10 md:mt-28 mx-auto md:px-10 py-12 flex max-md:flex-col-reverse items-end justify-between">
        <HeroSection />
        {isDesktop ? (
          <img
            src="/images/image-hero-desktop.png"
            alt="image hero"
            className="w-1/2"
          />
        ) : (
          <img src="/images/image-hero-mobile.png" alt="image hero" />
        )}
      </main>
    </div>
  );
}
export default App;
