import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  recruiters: AngularFirestoreCollection;

  writeRecruiter(form) {
    this.recruiters.add(form).then(
      response => console.log(response)
    );
  }

  constructor(private firestore: AngularFirestore) {
    this.recruiters = this.firestore.collection('recruiters');
   }
}
