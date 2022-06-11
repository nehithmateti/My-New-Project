import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My directives page';

  paratext1="This is first paragraph."
  paratext2="This is second paragraph."
  paratext3 ="This is third paragraph."
  
  public showPara1 = true;
  public showPara2 = true;
  public showPara3 = true;
  public btnText = "click to hide para"
  public cars = ['Audi', 'BMW', 'Corvette', 'Honda'];
  public choice = '';


  hidePara() {
    this.showPara1 = false;
    this.showPara2 = false;
    this.showPara3 = false;
    this.btnText="para was hidden"
  }
  selectCar(c: any) {
    this.choice = c;
  }
  constructor() { }
  ngOnInit(): void{
  }
  
  public username = "nehith";
  public value = true;

  public cities = ["Tirupathi", "Bangalore", "Pune", "Mumbai", "Delhi"];

  public Choice = "three";

}



