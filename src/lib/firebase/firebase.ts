import { clientConfig } from '@/lib/firebase/firebaseConfig';
import { getApp, getApps, initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const app = !getApps().length ? initializeApp(clientConfig) : getApp();