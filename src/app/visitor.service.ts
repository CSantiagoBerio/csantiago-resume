import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  visitor: AngularFirestoreCollection;

  writeVisitor() {
    this.visitor.add({
      date: new Date()
    });
  }

  constructor(private fs: AngularFirestore) {
    this.visitor = this.fs.collection('visitor');
   }
}
