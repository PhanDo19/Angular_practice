import { Component } from '@angular/core';
import { IProduct } from 'src/entities/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: IProduct[]=[{
    name: "string",
    price : 12000,
    imageUrl : "p.url",
    description : " hang viet nam chat luong cao"
  }] 
  title :string = 'New app angular';
  student = {
    name: 'Le van Luyen',
    age: '18',
    gender: 'Name',
    imageUrl:
      'https://i1-vnexpress.vnecdn.net/2015/02/19/le-van-luyen-250-1343-1424282506.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bbmnhgnyYJAx7eP1YsJ2oQ',
    subject: 'GDCD',
  };
}
