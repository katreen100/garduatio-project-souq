import { Orders } from './../app/models/iproduct';
import { locale } from '@shared/localization/localization';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from './product.service';
import { IWishListItemID } from '@models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId: string;

  constructor(
    private db: AngularFirestore,
    private productService: ProductService
  ) {
    this.userId = 'CLXtuKipWfR4TTJgwfteCF1CcmG3';
  }

  addToWishList(id) {
    id.createdAt = new Date();
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('wishlist')
      .add(id)
      .then((res) => console.log(res))

      .catch((err) => console.log(err));
  }

  addToWishListIfNotExist(id) {
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('wishlist')
      .ref.where('parentProductId', '==', id.parentProductId)
      .where('variantId', '==', id.variantId)
      .get()
      .then((res) => {
        if (res.empty) {
          this.addToWishList(id);
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
<<<<<<< HEAD
  removeFromWishList(id) {
    this.db
      .collection('user')
      .doc(this.userId)
      .collection('wishlist')
      .ref.where('parentProductId', '==', id.parentProductId)
      .where('variantId', '==', id.variantId)
      .get()
      .then((res) => {
        res.docs[0].ref.delete();
      });
  }
  getOrders():Observable<any> {
    
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
          return doc.data() ;
        });
      })
    );
  }
=======
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

  getOrders() {}
>>>>>>> 7872bdf69337aa7ea6040a3c173f452c4fd627a9

  getAddresses() {}

  addAddress() {}

  removeAddress() {}

  updateAddress() {}
}