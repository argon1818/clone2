import {Component, OnInit} from '@angular/core';
import {Chart } from 'chart.js';
import { lookupService } from 'src/app/service/lookup.service';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public loading = false;
  config: INgxLoadingConfig = {};

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1400);
  }

  constructor(private lookupService:lookupService,private toastr: ToastrService) {
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;

  }
  num_doctor:any=0;
  num_office:any=0;
  num_user:any=0;
  num_secretary:any=0;

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: [ 'چشم', 'گوش و حلق و بینی', 'عمومی', 'مغز و اعصاب','قلب'],
        datasets: [{
          label: '# تخصص ها',
          data: [12, 18, 3, 5, 2],
          backgroundColor: [
            'rgba(255,0,57,0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgb(210,8,50)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          // y: {
          //   beginAtZero: true
          // }
        }
      }
    });

    var myChart = new Chart("TurnsStatistic", {
      type: 'line',
      data: {
        labels: ['14 مهر', '15 مهر', '16 مهر', '17 مهر', '18 مهر', '19 مهر','20 مهر'],
        datasets: [{
          label: 'تعداد کاربران ثبت نام شده',
          data: [12, 18, 3, 5, 2, 3,25],
          backgroundColor: [
            'rgba(0,89,255,0.2)',
            'rgba(0,89,255,0.2)',
            'rgba(0,89,255,0.2)',
            'rgba(0,89,255,0.2)',
            'rgba(0,89,255,0.2)',
            'rgba(0,89,255,0.2)'
          ],
          borderColor: [
            'rgba(0,89,255,0.8)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,

        scales: {
          // y: {
          //   beginAtZero: true
          // }
        }
      }
    });
    var myChart = new Chart("BarChart1", {
      type: 'bar',
      data: {
        labels: ['14 مهر', '15 مهر', '16 مهر', '17 مهر', '18 مهر', '19 مهر','20 مهر'],
        datasets: [{
          label: 'تعداد نوبت های دریافت شده',
          data: [12, 19, 9, 10, 11, 15 , 18],
          hoverBackgroundColor:[
            'rgba(229,30,30,0.8)',
            'rgba(30,147,229,0.8)',
            'rgba(255,206,86,0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(108, 18, 162, 0.8)'
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(108, 18, 162, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(164,58,227,1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          // y: {
          //   beginAtZero: true
          // }
        }
      }
    });
    var myChart = new Chart("HorizontalBarChart1", {
      type: 'horizontalBar',
      data: {
        labels: ['آنفولانزا', 'کرونا', 'سرماخوردگی', 'سرطلان', 'سکته قلبی', 'سکته مغزی'],
        datasets: [{
          label: 'نمودار شماره 4',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          // y: {
          //   beginAtZero: true
          // }
        }
      }
    });
  }



}
