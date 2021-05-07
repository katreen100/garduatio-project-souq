import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { product, locale } from '@shared/localization';
import { IProduct, IProductCard, IRatingDetails } from '@models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.db.collection(product)
                  .get()
                  .pipe(
                    map(response => {
                      return response.docs.map(doc => {
                        return doc.data() as IProduct;
                      })
                    })
                  )
  }

  getAllProductCards(): Observable<IProductCard[]> {
    return this.db.collectionGroup('info', ref => ref.where('locale', '==', locale))
                    .get()
                    .pipe(
                      map(response => {
                        return response.docs.map(doc => {
                          return doc.data() as IProductCard;
                        })
                      })
                    )
  }

  getProductRatingDetails(productParentId): Observable<IRatingDetails> {
    return this.db.collection('ratingDetails')
                  .doc(productParentId)
                  .get()
                  .pipe(
                    map(response => {
                      return response.data() as IRatingDetails;
                    })
                  )
  }

  rateProduct(productParentId, stars: number, newValue: number) {
    // use a cloud function to update average rating
    let r = 'rating';
    switch(stars) {
      case 1: r = 'one'; break;
      case 2: r = 'two'; break;
      case 3: r = 'three'; break;
      case 4: r = 'four'; break;
      case 5: r = 'five'; break;
    }
    return this.db.collection('ratingDetails')
                  .doc(productParentId)
                  .update({'one': newValue})
  }
}
