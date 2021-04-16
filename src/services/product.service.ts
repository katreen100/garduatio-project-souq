import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProductCard } from 'src/viewModels/iproduct-card';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  getProduct(sku: number): Observable<any> {
    return this.db
              .collection('products', ref => ref.where('sku', '==', sku))
              .get()
              .pipe(
                map(obs => {
                  return obs.docs.map(doc => {
                    let p = doc.data();
                    return {
                      sku,
                      title: p['title'],
                      brandName: p['brandName'],
                      categoryName: p['categoryName'],
                      averageRating: p['ratings']['averageRating'],
                      price: p['price']['currentPrice'],
                      discount: p['discount']['currentDiscount'],
                      shipping: p['shipping'],
                      fullfilledBySouq: p['fullfilledBySouq'],
                      condition: p['condition'],
                      quantity: p['quantity'],
                      eligibleForCoupons: p['eligibleForCoupons'],
                      description: p['description'],
                      productVarieties: p['productVarieties'],
                      sellerNote: p['sellerNote'],
                      features: p['features'],
                      defaultImage: p['defaultImage']
                    }
                  })
                })
              )
  }

  getProductCards(categoryName: string): Observable<IProductCard[]> {
    return this.db
                .collection('products', ref => ref.where('categoryName', '==', categoryName))
                .get()
                .pipe(
                  map(response => {
                    return response.docs.map(doc => {
                      let p = doc.data();
                      return {
                        title: p['title'],
                        price: p['price']['currentPrice'],
                        discount: p['discount']['currentDiscount'],
                        shipping: p['shipping'],
                        averageRating: p['ratings']['averageRating'],
                        fullfilledBySouq: p['fullfilledBySouq'],
                      }
                    })
                  })
                );
  }


  getProductSpecifications(sku: number): Observable<any> {
    return this.db
                .collection('products', ref => ref.where('sku', '==', sku))
                .get()
                .pipe(
                  map(resp => {
                    return resp.docs.map(doc => {
                      let p = doc.data();
                      return doc.data()['specifications'];
                    })
                  })
                )
  }


  getProductDescription(sku: number): Observable<any> {
    return this.db.collection('products', ref => ref.where('sku', '==', sku))
                .get()
                .pipe(
                  map(resp => {
                    return resp.docs.map(doc => {
                      let p = doc.data();
                      return {
                        desription: p['description'],
                        features: p['features'],
                      }
                    })
                  })
                )
  }

  getProductRatingBreakdown(sku: number): Observable<any> {
    return this.db.collection('products', ref => ref.where('sku', '==', sku))
                  .get()
                  .pipe(
                    map(resp => {
                      return resp.docs.map(doc => {
                        let p = doc.data();
                        let r = p['ratings'];
                        return {
                          averageRating: r['averageRating'],
                          fiveStars: r['fiveStars']['totalRatings'],
                          fourStars: r['fourStars']['totalRatings'],
                          threeStars: r['threeStars']['totalRatings'],
                          twoStars: r['twoStars']['totalRatings'],
                          oneStar: r['oneStar']['totalRatings'],
                        }
                      })
                    })
                  )
  }

  
  getProductReviews(sku: number): Observable<any> {
    return this.db.collection('products', ref => ref.where('sku', '==', sku))
                  .get()
                  .pipe(
                    map(resp => {
                      return resp.docs.map(doc => {
                        let reviews = doc.data()['reviews'];
                        console.table(reviews);
                        return reviews.map(p => {
                                console.table(p);
                                return {
                                  negatives: p['negatives'],
                                  positives: p['positives'], 
                                  purchasesOn: p['purchasedOn'],
                                  rating: p['rating'],
                                  reviewBody: p['reviewBody'],
                                  reviewDate: p['reviewDate'],
                                  reviewerName: p['reviewerName'],
                                }
                        })
                      })
                    })
                  )
  }
}
