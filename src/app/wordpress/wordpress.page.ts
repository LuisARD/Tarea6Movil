import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {
  noticias: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://7dias.com.do/wp-json/wp/v2/posts').subscribe(
      data => {
        // Filtra y selecciona las primeras 3 noticias
        let noticiasSeleccionadas = [];
        let noticiasFiltradas = data.filter(noticia => noticia.title.rendered && noticia.excerpt.rendered && noticia.content.rendered);

        for (let i = 0; i < noticiasFiltradas.length; i++) {
          if (noticiasSeleccionadas.length === 3) break;
          noticiasSeleccionadas.push({
            titulo: noticiasFiltradas[i].title.rendered,
            subtitulo: noticiasFiltradas[i].excerpt.rendered,
            desarrollo: noticiasFiltradas[i].content.rendered
          });
        }

        this.noticias = noticiasSeleccionadas;
      },
      error => {
        console.error('Error al obtener las noticias:', error);
      }
    );
  }
}
