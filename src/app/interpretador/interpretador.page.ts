import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interpretador',
  templateUrl: './interpretador.page.html',
  styleUrls: ['./interpretador.page.scss'],
})
export class InterpretadorPage implements OnInit {
  genderInfo: any;
  name: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getGenderInfo(name: string) {
    this.http.get(`https://api.genderize.io/?name=${name}`).subscribe((response: any) => {
      this.genderInfo = response;
      console.log(this.genderInfo);
    });

}

}
