import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getCategories(): Observable<any> {
    return this.db.collection('categories')
                  .get()
                  .pipe(
                    map(resp => {
                      return resp.docs.map(doc => {
                        return doc.data();
                      })
                    })
                  )
  }
}
