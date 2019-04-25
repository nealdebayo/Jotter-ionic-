import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

 public introClasses = {
 	"intro-div": true,
 	"intro-left": false
 }

  constructor(private router: Router) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
  	this.introClasses = {
	 	"intro-div": true,
	 	"intro-left": false
	 }
  }

  ionViewDidEnter(){

  	setTimeout(() => {
  		this.introClasses = {
  			...this.introClasses,
  			"intro-left": true
  		}
  	}, 3500)

  	setTimeout(() => {
  		this.router.navigate(['/home'], { replaceUrl: true })
  	}, 4000)
    }

  ionViewWillLeave(){
  	
  	
  }

  ionViewDidLeave(){

  }

  ngOnDestroy(){

  }

}
