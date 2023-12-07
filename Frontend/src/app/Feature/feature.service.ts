import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor(private httpClient: HttpClient) { }

  getOffersData() {
    return this.httpClient.get('../shared/sample_data.json');
  }
}
