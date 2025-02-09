import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Nav/Navbar";
import { getTokens, Tokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { filterStandardClaims } from "next-firebase-auth-edge/auth/claims";
import { User } from "@/components/Auth/AuthContext";
import { clientConfig, serverConfig } from "@/lib/firebase/firebaseConfig";
import { AuthProvider } from "@/components/Auth/AuthProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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

export const metadata: Metadata = {
    title: "Yojam",
    description: "Yojam is a platform for meditation, tarot readings, and yoga practices.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    console.log(clientConfig, serverConfig);
    const tokens = await getTokens(await cookies(), {
        apiKey: clientConfig.apiKey,
        cookieName: serverConfig.cookieName,
        cookieSignatureKeys: serverConfig.cookieSignatureKeys,
        serviceAccount: serverConfig.serviceAccount,
    });

    const user = tokens ? toUser(tokens) : null;

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                style={{
                    fontFamily: "var(--font-geist-sans), var(--font-geist-mono)",
                }}
            >
                <AuthProvider user={user}>
                    <Header />
                    <main>
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
