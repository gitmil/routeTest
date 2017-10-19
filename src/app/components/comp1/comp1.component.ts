import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  public id:number = 1;
  public lastCar:string = '';
  constructor(private dataService:DataService) { }

  ngOnInit() {
    //console.log(this.dataService.cars);

    this.lastCar = this.dataService.cars[this.dataService.cars.length-1];
  }

  myEvent(event) {
    this.dataService.cars.push('newCar');
    this.lastCar = this.dataService.cars[this.dataService.cars.length-1];
}

}
