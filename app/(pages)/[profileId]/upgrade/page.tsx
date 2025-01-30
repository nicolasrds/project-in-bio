import Header from "@/app/components/landing-page/Header";
import Button from "@/app/components/ui/Button";
import PlanButtons from "@/app/(pages)/[profileId]/upgrade/PlanButtons";

export default async function UpgradePage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
            <Header />
            <h2 className="text-2xl font-bold">Escolha o plano</h2>
            <div className="flex gap-4">
                <PlanButtons />
            </div>
        </div>
    );
}