import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NotesService } from './notes.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
	  IonicModule.forRoot(), 
	  AppRoutingModule, 
	  IonicStorageModule.forRoot({
      	name: '__Nealdebayos',
		driverOrder: ['indexeddb', 'sqlite', 'websql']
    	})

	  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
