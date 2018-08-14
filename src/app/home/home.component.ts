import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allList: any = [];
  currentTime: number;
  dateFormat: any = {
    hr:0,
    min:0,
    sec: 0
  };

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getCurrentTime();
    setInterval(() => {
      this.getCurrentTime();
    }, 1000)
    this.getList();
  }

  getCurrentTime(): void {
    const time = new Date();
    this.currentTime = Date.parse(time);
  }

  timeDiff(compareTime)  {
    // debugger
    // var h = Math.floor(d / 3600);
    // var m = Math.floor(d % 3600 / 60);
    // var s = Math.floor(d % 3600 % 60);
    // let diffTime = Math.abs(this.currentTime-compareTime);
    // this.dateFormat.hr = Math.floor(diffTime / 3600)
    // diffTime %= 3600;
    // this.dateFormat.min = Math.floor(diffTime% 3600 / 60);
    // this.dateFormat.sec = Math.floor(diffTime  % 3600 % 60);
    // return this.dateFormat.hr+'hrs :' + this.dateFormat.min + 'minutes :'+ this.dateFormat.sec + 'seconds'
  }

  getList(): void {
    this.apiService.getAllItems().subscribe(result => {
      for (let val of result) {
        val.endTime = Date.parse(val.endTime);
        val.startTime = Date.parse(val.startTime);
        this.allList.push(val);
      }
      //  this.allList = result;
      console.log(result);
    })
  }

}
