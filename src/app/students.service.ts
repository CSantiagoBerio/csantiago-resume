import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: AngularFirestoreCollection;

  writeStudent(form) {
    this.students.add(form).then(
      response => console.log(response)
    );
  }

  constructor(private firestore: AngularFirestore) {
    this.students = this.firestore.collection('students');
   }
}
