import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandStatement from "@/components/BrandStatement";
import Categories from "@/components/Categories";
import FeaturedPieces from "@/components/FeaturedPieces";
import VisitStore from "@/components/VisitStore";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <BrandStatement />
        <Categories />
        <FeaturedPieces />
        <VisitStore />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
