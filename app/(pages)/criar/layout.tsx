import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import {getProfileId} from "@/app/actions/getProfileData";


export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) redirect("/");

    const profileId = await getProfileId(session.user?.id as string);

    if (profileId) redirect(`/${profileId}`);

    return (
        <>
        {children}
        </>
    );

}