import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  default: Document;
  show = false;

  constructor() { }

  ngOnInit() {
    document.getElementById('default').click();
  }

  onClick(evt, content, arrow) {
    let i: number;
    let tabcontent;
    let tablinks;
    let arrows;

    // Hide all the elements of class 'tabcontent'
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    arrows = document.getElementsByClassName('arrow');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
      arrows[i].style.display = 'none';
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(content).style.display = 'block';
    document.getElementById(evt).style.backgroundColor = '#1565c0';
    document.getElementById(arrow).style.display = 'block';

  }

  uncollapse(card) {
    let content;

    content = document.getElementById(card);
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }

}
