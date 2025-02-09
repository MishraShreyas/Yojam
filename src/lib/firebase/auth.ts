"use client";

import { app } from '@/lib/firebase/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
        const credential = await signInWithPopup(auth, provider);
        const idToken = await credential.user.getIdToken();
        await fetch('/api/login', {
            headers: {
                Authorization: `Bearer ${idToken}`,
            }
        });
    } catch (error) {
        console.error('Error signing in with Google', error);
        throw error;
    }
};

export const signOutUser = async () => {
    const auth = getAuth(app);
    try {
        await signOut(auth);
        await fetch('/api/logout');
    } catch (error) {
        console.error('Error signing out', error);
        throw error;
    }
};
