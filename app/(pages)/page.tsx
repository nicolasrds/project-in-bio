import Hero from "@/app/components/landing-page/Hero";
import Header from "@/app/components/landing-page/Header";
import VideoExplanation from "@/app/components/landing-page/VideoExplanation";
import Pricing from "@/app/components/landing-page/Princing";
import FAQ from "@/app/components/landing-page/FAQ";


export default function Home() {
  return (
      <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />
          <VideoExplanation />
          <Pricing />
          <FAQ />
      </div>
  );
}
