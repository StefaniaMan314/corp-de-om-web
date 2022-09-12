import { Component, OnInit } from '@angular/core';
import poems from '../../assets/poems.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  poems: { route: string; image: string; chapter: string; title: string; text: string; }[];

  constructor() {
    this.poems = poems.poems;
  }

  ngOnInit(): void {
  }

}
