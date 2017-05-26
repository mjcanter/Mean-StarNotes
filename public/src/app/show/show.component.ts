import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { noteComponent } from '../note/note.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  stars = [];
  param = null;
  note = new noteComponent;
  user = null;

  constructor(private _starService: StarService, private _route: ActivatedRoute ){this._route.params.subscribe((param)=>{
      this.param = param._id;
    }), _starService.observedUser.subscribe(
      (updatedUser) => {  this.user = updatedUser },
      (err) => { },
      () => { }
    )
  }
  
  ngOnInit() {
    this._starService.getOne(this.param)
    .then(stars => {this.stars = stars})
    .catch((err)=>{console.log("TEST ERROR");
    })
  }
  onNewnote(note){
    console.log('button works')
    this.note.author = this.user;
    this._starService.newcomment(this.param, this.note)
    .then(stars => {this.stars = stars})
    .catch((err)=>{console.log("Add(2) ERROR");
    })
  }
}