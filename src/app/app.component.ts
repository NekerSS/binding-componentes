import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Neker';
  apellido: string = 'none';

  onChanged(apellidoHijo: string) {
    console.log('llegó el mensaje patrón');
    console.log(apellidoHijo);
    this.apellido = apellidoHijo;
  }
}
