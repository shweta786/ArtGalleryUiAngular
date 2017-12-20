import { Component, OnInit } from '@angular/core';
import { paintingService } from '../painting.service'
import { JsonResponse } from '../JsonResponse';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  constructor(private paintingService: paintingService) { }

  result: JsonResponse[];
  ngOnInit() {
    this.paintingService.getAllPainting().subscribe(
      result => this.result = result,
      error => console.log("Error :: " + error)
    )
  }

}