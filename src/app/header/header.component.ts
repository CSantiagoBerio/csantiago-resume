import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inside: Boolean = false;

  in() {
    this.inside = this.log.goIn();
  }

  constructor(private log: AppService) { }

  ngOnInit() {
  }

}
