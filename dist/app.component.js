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
var tag_service_1 = require('./tag.service');
var image_service_1 = require('./image.service');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(tagService, imageService) {
        this.tagService = tagService;
        this.imageService = imageService;
        this.title = 'Album';
        this.currentTag = '';
        this.showAll = { "text": "todas", "isSelected": false };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagService.getTags()
            .subscribe(function (data) { return _this.tags = data; });
        this.imageService.getImages()
            .subscribe(function (data) { return _this.images = data; });
    };
    AppComponent.prototype.clickedTag = function (tag) {
        var that = this;
        this.currentTag = tag.text.toLowerCase();
        this.clearTagsSelected();
        tag.isSelected = true;
        this.images.forEach(function (image) {
            image.isHidden = image.tags.indexOf(that.currentTag) >= 0 ? false : true;
        });
    };
    AppComponent.prototype.addTag = function (newTag) {
        var auxTag = { "text": newTag.value.toLowerCase(), "isSelected": false };
        if (auxTag.text != '' && this.tagCanBeAdded(auxTag.text)) {
            this.tags.push(auxTag);
        }
        newTag.value = null;
    };
    AppComponent.prototype.tagCanBeAdded = function (newTag) {
        var canBeAdded = true;
        this.tags.forEach(function (tag) {
            if (tag.text == newTag) {
                canBeAdded = false;
            }
        });
        return canBeAdded;
    };
    AppComponent.prototype.showAllImages = function () {
        this.clearTagsSelected();
        this.showAll.isSelected = true;
        this.images.forEach(function (image) {
            image.isHidden = false;
        });
    };
    AppComponent.prototype.clearTagsSelected = function () {
        this.showAll.isSelected = false;
        this.tags.forEach(function (tag) {
            tag.isSelected = false;
        });
    };
    AppComponent.prototype.removeTag = function (tagToRemove) {
        var that = this;
        this.tags.forEach(function (tag, idx) {
            if (tag.text === tagToRemove.text) {
                that.tags.splice(idx, 1);
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'album-app',
            templateUrl: 'app/html/app.component.html',
            providers: [tag_service_1.TagService, image_service_1.ImageService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [tag_service_1.TagService, image_service_1.ImageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map