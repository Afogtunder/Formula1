import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp } from "firebase/app";
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';  // Firebase Storage hozzáadása, ha szükséges

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),  // Route konfigurálás
    provideFirebaseApp(() => initializeApp({
      projectId: "formula1-bf1f9",
      appId: "1:492670531310:web:4334da61818167b4b4e5ff",
      storageBucket: "formula1-bf1f9.firebasestorage.app",
      apiKey: "AIzaSyAxlbePa4XR3BdV1BctQgW9nLYGhTe6TmA",
      authDomain: "formula1-bf1f9.firebaseapp.com",
      messagingSenderId: "492670531310",
    })),
    provideAuth(() => getAuth()),  // Firebase Authentication hozzáadása
    provideFirestore(() => getFirestore()),  // Firestore adatbázis
    provideStorage(() => getStorage()),  // Firebase Storage (ha használod)
    provideAnimations()  // Angular Animációk
  ]
};
