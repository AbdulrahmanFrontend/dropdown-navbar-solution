import ClientLogos from "./ClientLogos";
const HeroSection = () => {
  return (
    <div className="md:w-5/12 max-md:text-center max-md:w-10/12 text-black flex flex-col items-start max-md:mt-10 max-md:mx-auto md:gap-4 max-md:gap-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 max-md:mx-auto">Make remote work</h1>
      <p className="mb-8">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <a href="#" className="max-md:mx-auto text-white px-6 py-3 rounded-xl hover:bg-transparent border-2 border-almostBlack transition-all">
        Learn more
      </a>
      <div className="mt-5 max-md:mx-auto">
        <ClientLogos />
      </div>
    </div>
  );
};
export default HeroSection;
