import Hero from "@/app/components/landing-page/Hero";
import Header from "@/app/components/landing-page/Header";
import VideoExplanation from "@/app/components/landing-page/VideoExplanation";
import Pricing from "@/app/components/landing-page/Princing";
import FAQ from "@/app/components/landing-page/FAQ";
import {trackServerEvent} from "@/app/lib/mixpanel";


export default function Home() {

    trackServerEvent("page-view", {
        page:"home"
    })

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
