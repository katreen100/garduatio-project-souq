import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private db: AngularFirestore) { }

   getBrands(): Observable<any> {
    return this.db.collection('brands')
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
