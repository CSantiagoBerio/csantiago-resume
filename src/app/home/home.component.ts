import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { RecruiterService } from '../recruiter.service';
import { VisitorService } from '../visitor.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  studentForm: FormGroup;
  recruiterForm: FormGroup;
  dateForm: FormGroup;

  today: number = Date.now();

  students() {
    this.accept.writeStudent(this.studentForm.value);
    console.log(this.studentForm.value);
  }

  recruiter() {
    this.recruit.writeRecruiter(this.recruiterForm.value);
    console.log(this.recruiterForm.value);
  }

  visitor() {
    // this.visit.writeVisitor();
    this.router.navigate(['/about-me']);
  }


  constructor(private router: Router, private fb: FormBuilder, private accept: StudentsService,
     private recruit: RecruiterService, private visit: VisitorService, private auth: AuthService) {
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      bachelor: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.recruiterForm = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.dateForm = this.fb.group({
      date: Date.now()
    });
  }

}
