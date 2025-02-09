"use server";

import { User } from "@/components/Auth/AuthContext";
import { clientConfig, serverConfig } from "@/lib/firebase/firebaseConfig";
import { getTokens, Tokens } from "next-firebase-auth-edge";
import { filterStandardClaims } from "next-firebase-auth-edge/auth/claims";
import { cookies } from "next/headers";

export async function GetUser() {
    const tokens = await getTokens(await cookies(), {
        apiKey: clientConfig.apiKey,
        cookieName: serverConfig.cookieName,
        cookieSignatureKeys: serverConfig.cookieSignatureKeys,
        serviceAccount: serverConfig.serviceAccount,
    });

    const user = tokens ? toUser(tokens) : null;

    return user;
}



const toUser = ({ decodedToken }: Tokens): User => {
    const {
        uid,
        email,
        picture: photoURL,
        email_verified: emailVerified,
        phone_number: phoneNumber,
        name: displayName,
        source_sign_in_provider: signInProvider,
    } = decodedToken;

    const customClaims = filterStandardClaims(decodedToken);

    return {
        uid,
        email: email ?? null,
        displayName: displayName ?? null,
        photoURL: photoURL ?? null,
        phoneNumber: phoneNumber ?? null,
        emailVerified: emailVerified ?? false,
        providerId: signInProvider,
        customClaims,
    };
};