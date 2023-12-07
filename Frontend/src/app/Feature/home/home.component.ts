import { Component } from '@angular/core';
import { product_data } from 'src/server/shared/test';
import { Carousel, Dropdown, initTE } from 'tw-elements';
import { FeatureService } from '../feature.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  product_data : product_data[] = [];

  constructor (private featureService:FeatureService,private httpClient:HttpClient){}

  ngOnInit(){
    // this.getOffers();
    initTE({ Carousel, Dropdown });
    this.httpClient.get('../../shared/sample_data.json').subscribe((res:any)=>{
      console.log("in init:",res);
      
    })
  }

getOffers(){
  this.featureService.getOffersData().subscribe((data:any)=>{
    console.log("response is:",data);
    
  })
}

}
