import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  house: FormGroup
  house_service: any;
  constructor(private fb: FormBuilder, ) {  //imported service 
    this.house = this.fb.group({
      amount: new FormControl('', Validators.required),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', Validators.required),
      acc_type: new FormControl('', Validators.required),
      landlord_name: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
      property_address: new FormControl('', Validators.required),
      landlord_address: new FormControl('', Validators.required), //all required validator will be here
      Council_Tax: new FormControl(''),
      Electricity_Bill: new FormControl(''),
      Water_Bill: new FormControl(''),
      Gas_Bill: new FormControl(''),
      agree: new FormControl('', Validators.requiredTrue)


    });
  }

  ngOnInit(): void {

  }


  submitprompt() {
    alert("ok")
  }
  //houseset(){
  //  console.log()
  //}
  //sending to the db by api
  public errorMessage: any;

  houseset() {
    if (this.house.invalid) {
      return;
    } else {
      let form = JSON.stringify(this.house.value);
      this.house_service.posthouse(form)
        .subscribe((response: any) => {
          //Next callback
          console.log(response)
          //this.repos = response;
        },
          (error: { message: any; }) => {                              //Error callback
            console.error(error)
            this.errorMessage = error.message;

          })
    }
  }

}