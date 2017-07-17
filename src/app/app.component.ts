import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{name}}</h1>

  	<p> {{name}} is at {{street}} in {{city}} in the {{region}} region. </p>
  	<br/>

  	<fieldset>
  		<label>Name: <input [(ngModel)]="name"></label>
  	</fieldset>

  	<label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address</label>

  	<div [hidden]="hideAddress">
  		<fieldset>
  			<label>Street: <input [(ngModel)]="street"></label>
  		</fieldset>

  		<fieldset>
  			<label>City: <input [(ngModel)]="city"></label>
  		</fieldset>

  		<fieldset>
  			<label>Region:</label>
  			<select [(ngModel)]="region">
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
	hideAddress = false;

}
