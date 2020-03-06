import { Component } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  number=10;
  arr=[1,2,3,4,5,6,7,8,9,10]; 
}
