import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: `<h1>Hello World!</h1> `, Adding html directly into app.component.ts
  styleUrls: ['./app.component.scss'],
  //styles: [`h1 {color: blue; background-color: red} p {color: red}`] in line styling
})
export class AppComponent {
  title = 'hotaliventoryapp';
}
