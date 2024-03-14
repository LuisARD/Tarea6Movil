import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {
  countryName: string = '';
  universities: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  searchUniversities() {
    const url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(this.countryName)}`;

    this.http.get<any[]>(url).subscribe((response: any[]) => { // Especificamos que esperamos recibir un array de tipo any[]
      this.universities = response;
    }, (error) => {
      console.error('Error fetching universities:', error);
    });
  }
}
