import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { category } from '@shared/localization';
import { ICategory } from '@models/icategory'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.db.collectionGroup(category)
                    .get()
                    .pipe(
                      map(response => {
                        return response.docs.map(doc => {
                          return doc.data() as ICategory;
                        })
                      })
                    )
  }

  getBrandByCategory(categoryId): Observable<ICategory> {
    return this.db.collection(category)
                    .doc(categoryId)
                    .get()
                    .pipe(
                      map(response => {
                        return response.data() as ICategory;
                      })
                    )
  }
}
