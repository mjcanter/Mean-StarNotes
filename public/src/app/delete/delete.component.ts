import { Input, Output, Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StarComponent } from '../star/star.component';
import { SessionuserComponent } from '../sessionuser/sessionuser.component';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  star = new StarComponent();
  param = null;
  constructor(private _starService: StarService, private _route: ActivatedRoute, private _redirect: Router ){this._route.params.subscribe((param)=>{
      this.param = param._id;
    })
  }
  ngOnInit() {
  this._starService.deletenow(this.param)
    .then(star => {this.star = star, this._redirect.navigate(["/dashboard"])})
    .catch((err)=>{console.log("Add(2) ERROR");
    })
	}
  }

