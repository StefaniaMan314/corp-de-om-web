import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  @Input()
  poemTitle: string;

  @Input()
  poemText: string;

  @Input()
  poemImage: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.poemTitle = this.route.snapshot.data['poemTitle'];
    this.poemText = this.route.snapshot.data['poemText'];
    this.poemImage = this.route.snapshot.data['poemImage'];
  }

  ngOnInit(): void {
  }

}
