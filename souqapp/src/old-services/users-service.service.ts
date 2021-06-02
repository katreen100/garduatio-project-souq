import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserRegister } from 'src/app/view model/iuser-register';
import { MessageService } from 'src/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  checkUser: Subject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private message: MessageService,
    private router: Router) { this.isLogged() }

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
      console.log(result.user)
      this.message.updateUserData({
        name: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
      });
      localStorage.setItem('uid', result.user.uid);
      localStorage.setItem('displayName', result.user.displayName);
      localStorage.setItem('email', result.user.email);
      localStorage.setItem("Token", result.user.refreshToken)
      this.checkUser.next(true)
      this.router.navigate(['/home']);
    }).catch((err) => {
      return err;
    });


  }

  isLogged():boolean {
    this.checkUser.next(localStorage.Token ? true : false)
    return(localStorage.Token ? true : false)
  }

  SignOut() {
    this.checkUser.next(false)
    localStorage.removeItem('Token');
    this.router.navigate(["/home"])
  }
  Reset(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
  }
  signUp(userInfo: IUserRegister) {

    return this.afAuth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then((res) => {
      res.user.updateProfile({ displayName: userInfo.name })
      userInfo.userId = res.user.uid;
      this.db.collection('user').doc(res.user.uid).set(userInfo)
      console.log(userInfo)
      this.router.navigate(["/login"])
    });
  }
  getLoggedStatus(): Observable<boolean> {
    return this.checkUser.asObservable();
  }


}
