import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IParentProduct, IProductSpecs, IProductVariant, IProductVariantImages, IRatingDetails } from '@models/iproduct';
import { LocalizeProduct, LocalizeProductSpecs, LocalizeProductVariant } from '@shared/localization';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  // for product grid/cards
  getAllProducts(): Observable<IParentProduct[]> {
    return this.db.collection('ParentProduct')
                  .get()
                  .pipe(
                    map(response => {
                      return response.docs.map(doc => {
                        return LocalizeProduct(doc.data() as IParentProduct);
                      })
                    })
                  )
  }

  getProductVariantImages(productId): Observable<IProductVariantImages[]> {
    return this.db.collection('ProductVariants')
                    .doc(productId)
                    .collection('images')
                    .get()
                    .pipe(
                      map(response => {
                        return response.docs.map(doc => {
                          return doc.data() as IProductVariantImages;
                        })
                      })
                    )
  }

  getProductVariant(productId): Observable<IProductVariant> {
    return this.db.collection('ProductVariants')
                  .doc(productId)
                  .get()
                  .pipe(
                    map(response => LocalizeProductVariant(response.data() as IProductVariant))
                  )
  }

  getProductVariantDetails(productId): Observable<[IProductVariant, IProductVariantImages[]]> {
    return forkJoin([this.getProductVariant(productId),
                      this.getProductVariantImages(productId)]);
  }

  getParentProduct(parentProductId): Observable<IParentProduct> {
    return this.db.collection('ParentProduct')
                    .doc(parentProductId)
                    .get()
                    .pipe(
                      map(response => {
                        return LocalizeProduct(response.data() as IParentProduct);
                      })
                    );
  }

  // TODO: specifiy observable type
  getFullProduct(parentProductId, mainVariantId): Observable<any> {
    return forkJoin([this.getParentProduct(parentProductId),
                     this.getProductVariant(mainVariantId),
                     this.getProductVariantImages(mainVariantId)]);
  }

  getProductRatingDetails(parentProductId): Observable<IRatingDetails> {
    return this.db.collection('ratingDetails')
                    .doc(parentProductId)
                    .get()
                    .pipe(
                      map(response => response.data() as IRatingDetails)
                    );
  }


  getProductSpecs(parentProductId): Observable<IProductSpecs[]> {
    return this.db.collection('ParentProduct')
                  .doc(parentProductId)
                  .collection('specs')
                  .get()
                  .pipe(
                    map(response => {
                      return response.docs.map(doc => {
                        return LocalizeProductSpecs(doc.data() as IProductSpecs);
                      })
                    })
                  )
  }


}
