import { Orders } from './../app/models/iproduct';
import { locale } from '@shared/localization/localization';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { IWishListItemData, IWishListItemID } from '@models/iproduct';
import { Router } from '@angular/router';
import { IAddress } from 'src/app/view model/iaddress';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId: string;
  userName: string;
  user;

  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private message: MessageService,
    private router: Router
  ) {
    // Todo: get userid dynamically from firebase.auth.currentUser.uid
    // this.user = this.auth.user.subscribe(u => {
    //   this.userName = u.displayName;
    //   this.userId = u.uid;
    //   console.log(this.userId);
    // });
    this.message.currentUserData.subscribe(res => this.userId = res.uid);
    // this.userId = '36g9WUVZTFcfcxgriOr1dqYAxVt1';
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
    this.message.updateWishlist(1);
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
  // removeFromWishList(id) {
  //   this.db
  //     .collection('user')
  //     .doc(this.userId)
  //     .collection('wishlist')
  //     .ref.where('parentProductId', '==', id.parentProductId)
  //     .where('variantId', '==', id.variantId)
  //     .get()
  //     .then((res) => {
  //       res.docs[0].ref.delete();
  //     });
  // }

  removeFromWishList(id) {
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('wishlist')
      .ref.where('parentProductId', '==', id.parentProductId)
      .where('variantId', '==', id.variantId)
      .get()
      .then((res) => {
        res.docs[0].ref.delete()
        this.message.updateWishlist(-1);
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

  addToCartIfNotExist(id, item: IWishListItemData) {
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('cart')
      .ref.where('parentProductId', '==', id.parentProductId)
      .where('variantId', '==', id.variantId)
      .get()
      .then((res) => {
        if (res.empty) {
          this.addToCart(item);
        }
      });

  }

  addToCart(item: IWishListItemData) {
    item.cartQuantity = 1;
    this.db.collection('user')
      .doc(this.userId)
      .collection('cart')
      .add(item)
      .then(console.log)
      .catch(console.log);
    this.message.updateCart(1);
  }

  removeFromCart(itemId) {
    console.log('removeFromCart');
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('cart')
      .ref.where('parentProductId', '==', itemId.parentProductId)
      .where('variantId', '==', itemId.variantId)
      .get()
      .then((res) => {
        res.docs[0].ref.delete()
      });
    this.message.updateCart(-1);
  }

  emptyCart() {
    this.db.collection('user')
      .doc(this.userId)
      .collection('cart')
      .get()
      .toPromise()
      .then(res => {
        res.forEach(doc => {
          this.message.updateCart(-1);
          console.log('empty cart iteration')
          doc.ref.delete();
        })
      });
  }

  // end of cart methods
  //orders methods

  getOrders(): Observable<any> {

    return from(
      this.db
        .collection('user')
        .doc(this.userId)
        .collection('orders')
        .get()
    ).pipe(
      map((response) => {

        return response.docs.map((doc) => {
          console.log(doc.data());
          return doc.data();
        });
      })
    );
  }


  getAllOrders() {
    return this.db.collectionGroup('orders')
      .get();
  }

  updateOrderId(orderId) {
    this.db.collection('user')
      .doc(this.userId)
      .collection('orders')
      .doc(orderId)
      .update({
        orderId,
        userId: this.userId,
        updatedAt: new Date()
      });
  }

  addOrderItems(orderId, items) {
    // for multiple document writes
    let batch = this.db.firestore.batch();

    items.forEach(item => {
      let docRef = this.db.firestore.collection('user')
        .doc(this.userId)
        .collection('orders')
        .doc(orderId)
        .collection('items')
        .doc();

      batch.set(docRef, item)
    });

    batch.commit();
  }

  proceedToCheckout(items, orderData) {
    let id = '';
    this.db.collection('user')
      .doc(this.userId)
      .collection('orders')
      .add(orderData)
      .then(res => {
        // second step
        id = res.id;
        this.updateOrderId(id);
        console.log('second step');
      })
      .then(() => {
        // third step
        this.addOrderItems(id, items);
        console.log('third step');
      })
      .then(() => {
        // fourth step
        this.emptyCart();
        console.log('third step');
      })
      .catch(res => console.log(res))
  }
  getOrdrsItem(){
    return from(
      this.db
        .collection('user')
        .doc(this.userId)
        .collection('orders')
        .doc("TZbmti8TwTrnVdpBVzZC")
        .collection('items')
        .get()
    ).pipe(
      map((response) => {
  
        return response.docs.map((doc) => {
          console.log("test");
          console.log(doc.data());
          return doc.data();
        });
      })
    );
    
    
  
   }

  getAddresses(): Observable<any> {
    return this.db.collection('user')
      .doc(this.userId)
      .collection('addresses').get();
  }

  addAddress(address: IAddress) {
    console.log(address)
    this.db.collection('user')
      .doc(this.userId)
      .collection('addresses').add(address)
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard/addresses'])
    })
  }

  removeAddress(id) {
    this.db.collection('user')
      .doc(this.userId)
      .collection('addresses')
      .doc(id).delete().then(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/dashboard/addresses'])
        })
      })

  }

  updateAddress(address: IAddress) {
    this.db.collection('user')
      .doc(this.userId)
      .collection('addresses')
      .doc(address.id).update(address).then(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/dashboard/addresses'])
        })
      })

  }

  getSettings() {
    return from(
      this.db
        .collection('user')
        .doc(this.userId).get()
      // .doc(this.userId).get()
    )
  }

  updateSettings(userData) {
    this.auth.currentUser.then(res => {
      res.updateEmail(userData.email).then(result => {
        res.updatePassword(userData.password).then(console.log)
        console.log(res.email, userData, res.uid)
        this.db.collection('user')
          .doc(this.userId)
          // .doc(this.userId)
          .update(userData).then(()=>{
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/dashboard/settings'])
            })
          })

      }).catch(err => {
        console.log(err)
      })
    })
  }
}