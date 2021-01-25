import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.mode';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail){
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId){
    if (confirm('Are you sure to delete this record?')){
      this.service.deletePaymentDetail(PMId).subscribe(
        res => {
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
          this.service.refreshList();
        },
        err => {
          this.toastr.error('Delete fail', 'Payment Detail Register', {
            timeOut: 3000,
          });
        }
      );
    }
  }
}
