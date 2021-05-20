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


  addToWishList(id) {
    id.createdAt = new Date();
    this.db.collection('user')
            .doc(this.userId)
            .collection('wishlist')
            .add(id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
  }

  checkIfWishListItemExists(id): Boolean {
    var isEmpty: boolean;
    this.db.collection('user')
                  .doc(this.userId)
                  .collection('wishlist')
                  .ref
                  .where('parentProductId', '==', id.parentProductId)
                  .where('variantId', '==', id.variantId)
                  .get()
                  .then(res => isEmpty = res.empty)
                  .catch(err => console.log(err))
    return isEmpty? true: false;
  }

  doesWishListExist(): Boolean {
    var isEmpty: boolean;
    this.db.collection('user')
                  .doc(this.userId)
                  .collection('wishlist')
                  .get()
                  .pipe(
                    map(resp => {
                      console.log(resp.empty)
                    })
                  )
    return isEmpty? true: false;
  }


  removeFromWishList(id: IWishListItemID) {

  }

  getOrders() {}



  getAddresses() {}

  addAddress() {}

  removeAddress() {}

  updateAddress() {}
}