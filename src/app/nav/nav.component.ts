import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  menu = [{
    name: 'Discussões',
    title: 'Pergunte e ajude',
    link: '/discussoes'
  }, {
    name: 'Projectos',
    title: 'Siga e acompanhe projectos',
    link: '/projectos'
  }, {
    name: 'Artigos',
    title: 'Aprende e ensine',
    link: '/artigos'
  }];

  constructor() { }

  ngOnInit() {
    // split the text of the logo
    this.splitText(document.querySelector('span.logo a'));
  }

  /**
   * splitText
   * Split the text of an HTML element into <span>s containing each character of the original text
   * Adding a class of  type 'char[the position of the char in the original text][the char]' e.g char-1-A, to each new element generated
   * @param {Element} original The element to split
   */
  splitText(original: Element) {
    // grab the original content
    const originalContent = original.innerHTML;
    // erase the original content
    original.innerHTML = '';
    // create a span for each character in the original content
    let pos = 1;
    for (const char of originalContent) {
      const charElem = document.createElement('span');
      charElem.innerHTML = char;
      charElem.classList.add(`char${pos}${char}`);
      pos++;
      // append new element containing each letter to the original element
      original.appendChild(charElem);
    }
  }
}
