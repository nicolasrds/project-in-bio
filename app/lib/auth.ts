import NextAuth, { DefaultSession } from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import {db, firebaseCert} from "@/app/lib/firebase";
import Google from "@auth/core/providers/google";
import {Timestamp} from "firebase-admin/firestore";
import {TRIAL_DAYS} from "@/app/lib/config";

declare module "next-auth" {
    interface Session {
        user: {
            createdAt: number;
            isTrial: boolean;
        } & DefaultSession["user"];
    }
    interface User {
        createdAt: number;
        isTrial?: boolean;
        isSubscribed?: boolean;
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Google],
    adapter: FirestoreAdapter({
        credential: firebaseCert
    }),
    events: {
        createUser: async ({user}) => {
            if (!user.id) return;
            await db.collection("users").doc(user.id).update({
                createdAt: Timestamp.now().toMillis(),
            });
        },
    },
    callbacks: {
        session({session, user}) {
            return {
                ...session,
                user: {
                    ...session.user,
                    isTrial:
                        new Date(user.createdAt).getTime() >
                        new Date().getTime() - 1000 * 60 * 60 * 24 * TRIAL_DAYS || false,
                },
            };
        },
    },
})