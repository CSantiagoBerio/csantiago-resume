import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inside: Observable<boolean>;

  constructor(private log: AppService, private auth: AuthService) { }

  ngOnInit() {
    this.inside = this.auth.isLoggedIn;
  }

}
