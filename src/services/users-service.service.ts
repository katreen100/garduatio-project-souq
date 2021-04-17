import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  checkUser: BehaviorSubject<boolean>;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) { }

  getUser(id: number): Observable<any> {
    return this.db
      .collection('Users', ref => ref.where('id', '==', id))
      .get()
      .pipe(
        map(obs => {
          return obs.docs.map(doc => {
            let p = doc.data();
            return {
              id,
              userName: p['userName'],
              userEmail: p['userEmail'],
              userPassword: p['userPassword'],
              userAddress: p['userAddress'],
              userTelephone: p['userTelephone'],

            }
          })
        })
      )
  }

  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {

      localStorage.setItem("Token", result.user.refreshToken)
      // this.checkUser.next(true)
      this.router.navigate(['/home']);
    }).catch((err) => {
      return err;
    });

    
  }

  isLogged(): boolean {
    return (localStorage.Token ? true : false)
  }

  SignOut() {
    // this.checkUser.next(false)
    localStorage.removeItem('Token');
  }
  Reset(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
  }
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then((res) => {
      this.router.navigate(["Users/login"])
    });
  }
  getLoggedStatus(): Observable<boolean> {
    return this.checkUser.asObservable();
  }


}
