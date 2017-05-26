import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StarComponent } from '../star/star.component';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  star = new StarComponent();
  subscription: Subscription;
  user = null;
  stars = [];
  constructor(private _starService: StarService, private _redirect: Router){
    this.subscription = _starService.observedUser.subscribe(
      (updatedUser) => {  this.user = updatedUser },
      (err) => { },
      () => { }
    )
  }
  onSubmit(){
  this.star.author = this.user;

  this._starService.makenew(this.star)
    .then(stars => {this.stars.push(stars), this._redirect.navigate(["/home"])})
    .catch((err)=>{this._redirect.navigate(["/home"])})
}}

