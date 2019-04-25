import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from './../notes.service';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	//maxlength is 42
	public allNotes : [] = []
	
	constructor(private router: Router, private notes: NotesService, public platform: Platform, public nav: NavController){}


	ionViewWillEnter(){
		this.notes.getNotes().then(data => {
			this.allNotes = data
		})
	}

	writeNote(){
		this.router.navigate(['/writenote']);
	}

	viewNote(id: any){
		this.router.navigate([`/viewnote`, id]);
	}

	deleteNote($event, id, title){
		if (!id){
			this.notes.deleteByTitle(title)
		} else {
			this.notes.deleteById(this.allNotes, id).then( _ => {
				this.ionViewWillEnter();
			})
		}
		
		$event.stopPropagation()
	}


}
