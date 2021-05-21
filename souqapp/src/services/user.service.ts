import { locale } from '@shared/localization/localization';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { IWishListItemData, IWishListItemID } from '@models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId: string;

  constructor(
    private db: AngularFirestore,
    private productService: ProductService
  )
  {
    // Todo: get userid dynamically from firebase.auth.currentUser.uid
    this.userId = 'CLXtuKipWfR4TTJgwfteCF1CcmG3';
  }

  addToWishList(id, wishListItem) {
    wishListItem.createdAt = new Date();
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('wishlist')
      .add(wishListItem)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  addToWishListIfNotExist(id, wishListItem) {
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('wishlist')
      .ref.where('parentProductId', '==', id.parentProductId)
      .where('variantId', '==', id.variantId)
      .get()
      .then((res) => {
        if (res.empty) {
          this.addToWishList(id, wishListItem);
        }
      });
  }
  checkIfToWishListIfNotExist(id) {
    return from(
      this.db
        .collection('user')
        .doc(this.userId)
        .collection('wishlist')
        .ref.where('parentProductId', '==', id.parentProductId)
        .where('variantId', '==', id.variantId)
        .get()
        .then((res) => {
          console.log(res.docs.length);
          if (res.docs.length > 0) return true;
          if (res.docs.length < 0) return false;
        })
    );
    // .pipe(map(res =>console.log(res) )
    // );
  }
  getWishListIds(): Observable<IWishListItemID[]> {
    return from(
      this.db
        .collection('user')
        .doc(this.userId)
        .collection('wishlist')
        .ref.orderBy('createdAt')
        .get()
    ).pipe(
      map((response) => {
        return response.docs.map((doc) => {
          let d = doc.data();
          return {
            parentProductId: d.parentProductId,
            variantId: d.variantId,
          };
        });
      })
    );
  }
 removeFromWishList(id){
  this.db
  .collection('user')
  .doc(this.userId)
  .collection('wishlist')
  .ref.where('parentProductId', '==', id.parentProductId)
  .where('variantId', '==', id.variantId)
  .get()
  .then((res) => {
  res.docs[0].ref.delete()
  })
 
}
  getWishListItems(): Observable<IWishListItemData[]> {
    return from(
      this.db
        .collection('user')
        .doc(this.userId)
        .collection('wishlist')
        .ref.orderBy('createdAt')
        .get()
    ).pipe(
      map((response) => {
        return response.docs.map((doc) => {
          return doc.data() as IWishListItemData;
        });
      })
    );
  }


  // Cart crud
  getCartItems(): Observable<IWishListItemData[]> {
    return this.db.collection('user')
                    .doc(this.userId)
                    .collection('cart')
                    .get()
                    .pipe(
                      map(response => {
                        return response.docs.map(doc => {
                          return doc.data() as IWishListItemData;
                        })
                      })
                    );
  }

  addToCart(item: IWishListItemData) {
    this.db.collection('user')
            .doc(this.userId)
            .collection('cart')
            .add(item)
            .then(console.log)
            .catch(console.log);
  }

  removeFromCart(itemId) {

  }

  updateCartItemQuantity(itemId) {

  }

  incrementCartItemQuantity(itemId) {

  }

  decrementCartItemQuantity(itemId) {

  }

  // end of cart methods

  getOrders() {}

  getAddresses() {}

  addAddress() {}

  removeAddress() {}

  updateAddress() {}
}