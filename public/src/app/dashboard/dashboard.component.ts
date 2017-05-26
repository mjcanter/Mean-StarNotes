import { Input, Output, Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  

  ngOnInit() {
    this._starService.getAll()
    .then(stars => {this.stars = stars})
    .catch((err)=>{console.log("TEST ERROR")})
  }
}

