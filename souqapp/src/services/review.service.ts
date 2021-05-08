import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IReview } from '@models/iproduct';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private db: AngularFirestore) { }

  getProductReviews(parentProductId): Observable<IReview[]> {
    return this.db.collection('reviews',
                      ref => ref.where('parentId', '==', parentProductId))
                  .get()
                  .pipe(
                    map(response => {
                      return response.docs.map(doc => {
                        return doc.data() as IReview;
                      })
                    })
                  )
  }

  updateReview(reviewDocId, edits) {
    return this.db.collection('reviews')
                    .doc(reviewDocId)
                    .update(edits);
  }

  createReview(review: IReview) {
    return this.db.collection('reviews')
                  .add(review);
  }

  deleteReview() {
    // to be implemented
  }
}