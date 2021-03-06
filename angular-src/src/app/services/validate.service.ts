import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable()
export class ValidateService {

  constructor() { }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  validateLogin(user){
    if((user.username == undefined || user.username === '') || 
        (user.password == undefined || user.password === '')){
      return false;
  }
  else{
    return true;
  }
}

  validateCreatePost(post){
    if((!post.title) || 
    (!post.body) ||
    (!post.authorUsername)){
      return false;
    }
    else{
      return true;
    }
  }
}