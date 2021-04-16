import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProductCard } from 'src/viewModels/iproduct-card';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }


  getProductCards(categoryName: string): Observable<any> {
    return this.db
                .collection('products',
                            ref => ref.where('categoryName', '==', categoryName))
                .get()
                .pipe();
  }
}
