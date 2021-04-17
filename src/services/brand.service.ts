import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private db: AngularFirestore) { }

   getBrands(categoryID: number): Observable<any> {
    return this.db.collection('brands', ref => ref.where('categoryID', '==', categoryID))
                  .get()
                  .pipe(
                    map(resp => {
                      return resp.docs.map(doc => {
                        return doc.data();
                      })
                    })
                  );
}
}
