import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  year: string;
  author: string;
  copy: string;

  constructor() {
    this.year = '2018';
    this.author = 'Simao Nziaka';
    this.copy = `${this.year} ${this.author}`;
  }

  ngOnInit() {
  }

}
