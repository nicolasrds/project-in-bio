import Header from "@/app/components/landing-page/Header";
import { Rocket } from "lucide-react";
import CreateLinkForm from "@/app/(pages)/criar/CreateLinkForm";
import {trackServerEvent} from "@/app/lib/mixpanel";

export default function CriarPage() {

    trackServerEvent("page-view", {
        page:"create"
    })

    return (
        <div>
            <Header />
            <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
                    <Rocket className="size-10" />
                </div>
                <CreateLinkForm />
            </div>
        </div>
    );
}