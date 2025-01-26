import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import {firebaseCert} from "@/app/lib/firebase";
import Google from "@auth/core/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Google],
    adapter: FirestoreAdapter({
        credential: firebaseCert
    }),
    events: {},
    callbacks: {}
})