"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Alexander Ames';
        this.street = '1385 S Claiborne Ave';
        this.city = 'Gilbert';
        this.region = 'Southwest';
        this.hideAddress = true;
    }
    AppComponent.prototype.addressClick = function () {
        this.hideAddress = !this.hideAddress;
    };
    AppComponent.prototype.regionChange = function (region) {
        this.region = region;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t<h1>{{name}}</h1>\n  \t<p> {{name}} is in the {{region}} region. </p>\n  \t<br/>\n\n  \t<input [value]=\"name\" (input)=\"name=$event.target.value\"><br/>\n\n  \t<input [value]=\"name\" (keyup.enter)=\"name=$event.target.value\"\n  \t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"name=$event.target.value\"><br/>\n\n  \t<button (click)=\"addressClick()\">Show/Hide Address</button>\n  \t<div [hidden]=\"hideAddress\">\n  \t\t<fieldset>\n  \t\t\t<label>Street: </label>{{street}}\n  \t\t</fieldset>\n\n  \t\t<fieldset>\n  \t\t\t<label>City: </label>{{city}}\n  \t\t</fieldset>\n\n  \t\t<fieldset>\n  \t\t\t<label>Region:</label>\n  \t\t\t<select (change)=\"regionChange($event.target.value)\">\n  \t\t\t\t<option>Northwest</option>\n  \t\t\t\t<option>Southwest</option>\n  \t\t\t\t<option>Southeast</option>\n  \t\t\t\t<option>Northeast</option>\n  \t\t\t</select>\n  \t\t</fieldset>\n  \t</div>\n  \t\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map