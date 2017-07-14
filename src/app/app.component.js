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
        this.image = 'favicon.ico';
        this.color = 'red';
    }
    AppComponent.prototype.clicked = function () {
        this.color = this.color == 'red' ? 'blue' : 'red';
    };
    AppComponent.prototype.colorChange = function (color) {
        this.color = color;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t<h1>{{name}}</h1>\n  \t<fieldset>\n  \t\t<img [src]=\"image\"/>\n  \t</fieldset>\n  \t<label [style.color]=\"color\">Favorite Color: </label>\n  \t<button (click)=\"clicked()\">Toggle Color</button>\n  \t<select (change)=\"colorChange($event.target.value)\">\n  \t\t<option>red</option>\n  \t\t<option>blue</option>\n  \t\t<option>green</option>\n  \t</select>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map