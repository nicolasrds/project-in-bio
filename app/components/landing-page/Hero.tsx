import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import UserCard from "@/app/components/commons/user-card/UserCard";
import TotalVisits from "@/app/components/commons/TotalVisits";
import ProjectCard from "../commons/ProjectCard";
import CreateNow from "@/app/components/ui/CreateNow";


export default function Hero({ texts } : {texts?: {title: string, description: string}}) {
    return (
        <div className="flex h-screen mt-12">
            <div className="w-full flex flex-col gap-2 mt-[35vh]">
                <h1 className="text-5xl font-bold text-white leading-[64px]">
                    {texts?.title || "Seus projetos e redes sociais em um único link"}
                </h1>
                <h2 className="text-xl leading-6">
                    {texts?.description ||
                        "Crie sua própria página de projetos e compartilhe eles com mundo."}
                    <br />
                    Acompanhe o engajamento com Analytics de cliques
                </h2>
                <CreateNow />
            </div>

            <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
                <div className="relative">
                    <UserCard />
                    <div className="absolute -bottom-[7%] -right-[45%]">
                        <TotalVisits totalVisits={1342} />
                    </div>
                    <div className="absolute top-[20%] -left-[45%] -z-10">
                         <ProjectCard name='AgendaPet' description="Um sistema de agendamento online para pet shops e clínicas veterinárias, permitindo marcações, lembretes automáticos e gestão de clientes em um único lugar." img="/project1.jpg"/>
                    </div>
                    <div className="absolute -top-[5%] -left-[55%] -z-10">
                        <ProjectCard name='InvoiceSync' description="Uma plataforma Micro SaaS que automatiza a sincronização de notas fiscais entre marketplaces e ERPs, reduzindo erros e melhorando a conformidade fiscal." img="/project2.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}