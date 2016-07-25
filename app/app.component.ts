import { Component } from '@angular/core';
import { Image } from './image';
import { TagService } from './tag.service';
import { ImageService } from './image.service';
import { Tag } from './tag';
import { HTTP_PROVIDERS } from '@angular/http'

@Component({
  selector: 'album-app',
  templateUrl: 'app/html/app.component.html',
  providers: [TagService, ImageService, HTTP_PROVIDERS]
})

export class AppComponent{
  title = 'Album';
  tags : Tag[];
  images: Image[];
  currentTag = '';
  showAll : Tag = {"text" : "todas", "isSelected" : false};

  constructor(private tagService: TagService, private imageService: ImageService) {}

  ngOnInit(){
    this.tagService.getTags()
      .subscribe(data => this.tags = data);
    this.imageService.getImages()
      .subscribe(data => this.images = data);
  }

  clickedTag(tag){
    let that = this;
    this.currentTag = tag.text.toLowerCase();
    this.clearTagsSelected();
    tag.isSelected = true;
    this.images.forEach(function(image){
      image.isHidden = image.tags.indexOf(that.currentTag) >= 0 ? false : true;
    });
  }

  addTag(newTag : HTMLInputElement){
    let auxTag : Tag = {"text" : newTag.value.toLowerCase(), "isSelected" : false};
    if(auxTag.text != '' && this.tagCanBeAdded(auxTag.text)){
      this.tags.push(auxTag);
    }
    newTag.value = null;
  }

  tagCanBeAdded(newTag){
    let canBeAdded = true;
    this.tags.forEach(function(tag){
      if(tag.text == newTag){
        canBeAdded = false;
      }
    });
    return canBeAdded;
  }

  showAllImages(){
    this.clearTagsSelected();
    this.showAll.isSelected = true;
    this.images.forEach(function(image){
      image.isHidden = false;
    })
  }

  clearTagsSelected(){
    this.showAll.isSelected = false;
    this.tags.forEach(function(tag){
      tag.isSelected = false;
    })
  }

  removeTag(tagToRemove){
    let that = this;
    this.tags.forEach(function(tag, idx){
      if(tag.text === tagToRemove.text){
        that.tags.splice(idx, 1);
      }
    });
  }

}
