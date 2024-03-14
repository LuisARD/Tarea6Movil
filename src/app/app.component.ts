import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'hammer' },
    { title: 'Interpretador', url: '/interpretador', icon: 'chatbubbles' },
    { title: 'Madurez', url: '/madurez', icon: 'body' },
    { title: 'Universidades', url: '/universidades', icon: 'business' },
    { title: 'Clima', url: '/clima', icon: 'cloud' },
    { title: 'Web WorldPress', url: '/wordpress', icon: 'earth' },
    { title: 'Contacto', url: '/contacto', icon: 'person' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
