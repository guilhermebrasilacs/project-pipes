import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Guilherme Brasil';
  dataAniversario = new Date(2002, 10, 6);
  preco = 12566.90;
  troco = 0.4567;
}
