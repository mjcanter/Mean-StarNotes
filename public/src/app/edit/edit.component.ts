import { Input, Output, Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StarComponent } from '../star/star.component';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  star = new StarComponent();
  subscription: Subscription;
  user = null;
  param = null;
  constructor(private _starService: StarService, private _route: ActivatedRoute, private _redirect: Router ){this._route.params.subscribe((param)=>{
      this.param = param._id, this.subscription = _starService.observedUser.subscribe(
      (updatedUser) => {  this.user = updatedUser },
      (err) => { },
      () => { }
    )
    })
  }
  
  ngOnInit() {
    this._starService.getOne(this.param)
    .then(star => {this.star = star, this.star.id = this.param})
    .catch((err)=>{console.log("TEST ERROR");
    })
  }
  

  onSubmit(star){
    this.star.author = this.user;
    this._starService.updatenow(this.star)
    .then(star => {this.star = star, this._redirect.navigate(["/home"])})
    .catch((err)=>{console.log("Update ERROR");
    })
}
}
