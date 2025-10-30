import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
// import Pricing from "./_components/Pricing";
import Cta from "./_components/Cta";
import ProductValue from "./_components/ProductValue";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-amber-50">
      <Header />
      <Hero />
      <Cta />
      <ProductValue />
      {/* <Pricing /> */}
      <Footer />
      </div>
  );
}
