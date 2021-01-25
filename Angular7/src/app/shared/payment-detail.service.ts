import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.mode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  readonly rootURL = 'http://localhost:61082/api';

  formData: PaymentDetail;
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }

  postPaymentDetail(){
    this.formData.PMId = 0;
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }

  putPaymentDetail(){
    return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(PMId){
    return this.http.delete(this.rootURL + '/PaymentDetail/' + PMId);
  }

}
