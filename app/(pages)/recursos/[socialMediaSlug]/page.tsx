import { getTextBySlug } from "@/app/actions/getTextBySlug";
import {notFound} from "next/navigation";
import Header from "@/app/components/landing-page/Header";
import Hero from "@/app/components/landing-page/Hero";
import VideoExplanation from "@/app/components/landing-page/VideoExplanation";
import Pricing from "@/app/components/landing-page/Princing";
import FAQ from "@/app/components/landing-page/FAQ";

export default async function LinkInBio({
                                            params,
                                        }: {
    params: Promise<{ socialMediaSlug: string }>;
}) {
    const { socialMediaSlug } = await params;
    const texts = await getTextBySlug(socialMediaSlug);
    if (!texts) {
        return notFound();
    }
    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            <Hero texts={texts} />
            {/*<VideoExplanation /> */ }
            <Pricing />
            <FAQ />
        </div>
    );
}