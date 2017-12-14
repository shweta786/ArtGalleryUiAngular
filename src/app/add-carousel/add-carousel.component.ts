import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-carousel',
  templateUrl: './add-carousel.component.html',
  styleUrls: ['./add-carousel.component.css']
})
export class AddCarouselComponent implements OnInit {

  constructor() { }

  @Input() slide1src;
  @Input() slide2src;
  @Input() slide3src;

  ngOnInit() {
  }

}
