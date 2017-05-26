import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StarService {

  

  constructor(private _http: Http) { }
  getfive(){
    return this._http.get('/stars5').map((notes) => notes.json()).toPromise();
  }
  getAll() {
  	return this._http.get('/stars').map((notes) => notes.json()).toPromise();
  }
  getOne(id) {
    return this._http.get('/show/'+id).map((notes) => notes.json()).toPromise();
  }
  makenew(star){
    console.log('services')
  	return this._http.post('/new', star).map((stars) => star.json()).toPromise();
  }
  updatenow(star){
    return this._http.post('/updatestar/'+star.id, star).map((stars) => stars.json()).toPromise();
  }
  deletenow(id) {
    return this._http.get('/destroy/'+id).map((stars) => stars.json()).toPromise();
  }
  deletecomment(id1, id2){
    return this._http.get('/note/'+id1+ '/destroy/'+id2).map((stars) => stars.json()).toPromise();
  }
  newcomment(id, note){
    console.log('services', note)
    return this._http.post('/newnote/'+ id, note).map((notes) => notes.json()).toPromise();
  }

  observedUser = new BehaviorSubject(null);

  updateUser(user: String){
    this.observedUser.next(user);
    console.log(user)
  }
}
