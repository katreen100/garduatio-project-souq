import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IParentProduct, IProductSpecs, IProductVariant, IProductVariantImages, IRatingDetails } from '@models/iproduct';
import { LocalizeProduct, LocalizeProductSpecs, LocalizeProductVariant } from '@shared/localization/localization';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceNew {

  constructor(private db: AngularFirestore) { }

  // for product grid/cards
  getAllProducts(): Observable<IParentProduct[]> {
    return this.db.collection('ParentProduct')
                  .get()
                  .pipe(
                    map(response => {
                      return response.docs.map(doc => {
                        return LocalizeProduct(doc.data() as IParentProduct, doc.id);
                      })
                    })
                  )
  }


  getProductVariantNew(productId,variantId): Observable<IProductVariant> {
    return this.db.collection('ParentProduct')
                  .doc(productId)
                  .collection('ProductVariants')
                  .doc(variantId)
                  .get()
                  .pipe(
                    map(response => LocalizeProductVariant(response.data() as IProductVariant))
                  )
  }

  getProductmainVariantNew(productId): Observable<IProductVariant> {
    return this.db.collection('ParentProduct')
                  .doc(productId)
                  .collection('ProductVariants')
                  .doc(' mainVariant')
                  .get()
                  .pipe(
                    map(response => LocalizeProductVariant(response.data() as IProductVariant))
                  )
  }
  
  
getAllvariant(paroductid): Observable<IProductVariant[]>{
  return this.db.collection('ParentProduct').doc(paroductid)
                 .collection("ProductVariants")
                  .get()
                  .pipe(
                    map(response => {
                      return response.docs.map(doc => {
                        return LocalizeProductVariant(doc.data() as IProductVariant);
                      })
                    })
                  )
                  }
  getParentProduct(parentProductId): Observable<IParentProduct> {
    return this.db.collection('ParentProduct')
                    .doc(parentProductId)
                    .get()
                    .pipe(
                      map(response => {
                        return LocalizeProduct(response.data() as IParentProduct, response.id);
                      })
                    );
  }

 // TODO: specifiy observable type
  getFullProduct(parentProductId, mainVariantId): Observable<any> {
    return forkJoin([this.getParentProduct(parentProductId),
                     this.getProductmainVariantNew (mainVariantId),]);
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
