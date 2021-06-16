import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{
  title = 'travel-expense-details';
  mode_of_transports = ['Bus', 'Train', 'Seaway','Airway'];
  modes = ['weekly', 'Monthly', 'yearly'];
  mode_of_transportHasError = true;
  modeHasError = true;
  dFrom =true;
  

  userModel = new User('','default','default'); 
  validatemode_of_transport(value: any){
    if (value === 'default') {
      this.mode_of_transportHasError = true;
    } else {
      this.mode_of_transportHasError = false;
    }
  }
  

validatemode(value: any){
  if (value === 'default') {
    this.modeHasError = true;
  } else {
    this.modeHasError = false;
  }
}
  
}

