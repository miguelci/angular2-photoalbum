"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DropComponent = (function () {
    function DropComponent() {
        this.images = [];
    }
    DropComponent.prototype.handleDrop = function (e) {
        var files = e.target.files || e.dataTransfer.files;
        // process all File objects
        for (var i = 0, f; f = files[i]; i++) {
            this.ParseFile(f);
        }
        return false;
    };
    DropComponent.prototype.ParseFile = function (file) {
        // display an image
        if (file.type.indexOf("image") == 0) {
            console.log('entra!');
            var reader = new FileReader();
            reader.readAsDataURL(file);
        }
    };
    DropComponent = __decorate([
        core_1.Component({
            selector: 'drop',
            template: "\n    <div\n      (dragover)=\"false\"\n      (dragend)=\"false\"\n      (drop)=\"handleDrop($event)\"\n      style=\"height: 100px; border: 5px dotted #ccc;\">\n      <p style=\"margin: 10px; text-align: center\">\n        <strong>Drop Your Images Here</strong>\n      </p>\n    </div>\n    <div class=\"media\" *ngFor=\"let image of images\">\n      <div class=\"media-left\">\n        <a href=\"#\">\n          <img class=\"media-object\" src=\"{{ image.path }}\" style=\"max-width:200px\">\n        </a>\n      </div>\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\">{{ image.name }}</h4>\n        <p>{{ image.size }} bytes</p>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DropComponent);
    return DropComponent;
}());
exports.DropComponent = DropComponent;
//# sourceMappingURL=app.drop.component.js.map