"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "./Button";
import TextInput from "@/app/components/ui/TextInput";

export default function CreateNow() {
    const [link, setLink] = useState("");
    return (
        <div className="flex items-center gap-2 w-full mt-[10vh]">
            <span className="text-white text-xl w-full whitespace-nowrap">project-in-bio-eta.vercel.app/</span>
            <TextInput
                placeholder="Seu link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <Button
                onClick={() => {
                    signIn("google", {
                        redirectTo: `/criar?link=${link}`,
                    });
                }}
            >
                Criar agora
            </Button>
        </div>
    );
}