import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalizeCategory} from '@shared/localization';
import { ICategory } from '@models/icategory'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.db.collection('categoryEnglish')
                    .get()
                    .pipe(
                      map(response => {
                        return response.docs.map(doc => {
                          return LocalizeCategory(doc.data() as ICategory);
                        })
                      })
                    )
  }

  getBrandByCategory(categoryId): Observable<ICategory> {
    return this.db.collection('categoryEnglish')
                    .doc(categoryId)
                    .get()
                    .pipe(
                      map(response => {
                        return LocalizeCategory(response.data() as ICategory);
                      })
                    )
  }
}
