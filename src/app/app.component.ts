import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{name}}</h1>
  	<p> {{name}} is in the {{region}} region. </p>
  	<br/>

  	<input [value]="name" (input)="name=$event.target.value"><br/>

  	<input [value]="name" (keyup.enter)="name=$event.target.value"
  												(blur)="name=$event.target.value"><br/>

  	<button (click)="addressClick()">Show/Hide Address</button>
  	<div [hidden]="hideAddress">
  		<fieldset>
  			<label>Street: </label>{{street}}
  		</fieldset>

  		<fieldset>
  			<label>City: </label>{{city}}
  		</fieldset>

  		<fieldset>
  			<label>Region:</label>
  			<select (change)="regionChange($event.target.value)">
  				<option>Northwest</option>
  				<option>Southwest</option>
  				<option>Southeast</option>
  				<option>Northeast</option>
  			</select>
  		</fieldset>
  	</div>
  	
  `,
})
export class AppComponent  {
	name = 'Alexander Ames';
	street = '1385 S Claiborne Ave';
	city = 'Gilbert';
	region = 'Southwest';
	hideAddress = true;

	addressClick() {
		this.hideAddress = !this.hideAddress;
	}

	regionChange(region: string) {
		this.region = region;
	}

}
