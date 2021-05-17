import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { IWishListItemID } from "@models/iproduct";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId: string;

  constructor(private db: AngularFirestore, private productService: ProductService) {
    this.userId = 'CLXtuKipWfR4TTJgwfteCF1CcmG3';
  }

  getWishListIds(): Observable<IWishListItemID[]> {
    return from(this.db.collection('user')
                    .doc(this.userId)
                    .collection('wishlist')
                    .ref
                    .orderBy('createdAt')
                    .get())
                    .pipe(
                      map(response => {
                        return response.docs.map(doc => {
                          let d = doc.data();
                          return {
                            parentProductId: d.parentProductId,
                            variantId: d.variantId
                          };
                        })
                      })
                    )
                      
  }


  getOrders() {}



  getAddresses() {}

  addAddress() {}

  removeAddress() {}

  updateAddress() {}
}
