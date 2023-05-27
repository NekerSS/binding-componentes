import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class NavComponent {
  @Input() title: string = 'Mi pagina xd';
  @Output() changed = new EventEmitter<string>();
  lastName: string = '';

  onClick() {
    console.log('Me dieron click puto, soy el hijo');
    this.changed.emit(this.lastName);
  }
}
