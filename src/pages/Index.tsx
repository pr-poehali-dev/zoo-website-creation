
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedAnimals />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
