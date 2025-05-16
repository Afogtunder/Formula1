import { Injectable } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
  User,
  UserCredential 
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, collection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface CustomUser {
  id?: string;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  password?: string;
  tasks?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  currentUser: Observable<User | null>;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {
    this.currentUser = authState(this.auth);
    this.currentUser.subscribe(user => {
      const isLoggedIn = !!user;
      this.isLoggedInSubject.next(isLoggedIn);
      localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    });
  }

  // ✅ Regisztráció metódus
  async signUp(email: string, password: string, userData: CustomUser): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Sikeres regisztráció:', userCredential.user.uid);

      await this.createUserData(userCredential.user.uid, userData);

      this.isLoggedInSubject.next(true);
      localStorage.setItem('isLoggedIn', 'true');

      return userCredential;
    } catch (error) {
      console.error('Hiba a regisztráció során:', error);
      throw error;
    }
  }

  // 🔄 Felhasználói adatok létrehozása a Firestore-ban
  private async createUserData(userId: string, userData: CustomUser): Promise<void> {
    const userRef = doc(collection(this.firestore, 'Users'), userId);
    await setDoc(userRef, {
      id: userId,
      name: {
        firstname: userData.name.firstname,
        lastname: userData.name.lastname,
      },
      email: userData.email,
      tasks: userData.tasks || [],  // Kezdetben üres feladatlista
    });
  }

  // 🔑 Bejelentkezés metódus
  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
      this.isLoggedInSubject.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      return userCredential;
    });
  }

  // 🚪 Kijelentkezés metódus
  signOut(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.isLoggedInSubject.next(false);
      localStorage.setItem('isLoggedIn', 'false');
      this.router.navigateByUrl('/home');
    });
  }
}
