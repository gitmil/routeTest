import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  public myId: string = '';
  public lastCar: string = '';
  constructor(private dataService: DataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('testsetest')
    //console.log(this.dataService.cars);

    this.lastCar = this.dataService.cars[this.dataService.cars.length - 1];
    //const params = this.route.paramMap.source.getValue();


      this.route.paramMap.subscribe(
     params => this.myId = params.get('id')
     );
  //  myId = params.id;
     //this.route.paramMap
    //  .switchMap((params: ParamMap) =>
        //console.log('test:', params.get('id'))
      //  {console.log(params);
      //  });

  }
}
