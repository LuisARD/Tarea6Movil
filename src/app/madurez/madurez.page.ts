import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-madurez',
  templateUrl: './madurez.page.html',
  styleUrls: ['./madurez.page.scss'],
})
export class MadurezPage implements OnInit {
  name: string = '';
  ageInfo: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  getAgeInfo(name: string) {
    this.http.get(`https://api.agify.io/?name=${name}`).subscribe((response: any) => {
      this.ageInfo = response;
      console.log(this.ageInfo);
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
    });
  }
}
