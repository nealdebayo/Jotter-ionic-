import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotesService } from './../notes.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.page.html',
  styleUrls: ['./viewnote.page.scss'],
})
export class ViewnotePage implements OnInit {
  public noteId: number;
  public currentNote: any = {title: '', noteContent: ''};
  public newTitle: any;
  public newContent: any;
  public allNotes: any;
  public shouldReadOnly: boolean = true;
  private readCounter: number = 0;

  constructor(private router: Router, 
  				private activatedRoute: ActivatedRoute,
  				private note: NotesService,
  				public navCtrl: NavController) { }

    ngOnInit() {
    }

	ionViewWillEnter(){
		this.noteId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')) - 1;
		this.note.getNotes().then(data => {
			this.allNotes = data
			this.currentNote = this.allNotes.filter(note => note.id === this.noteId + 1)[0];
		})
	}

	goBack(){
  		// this.navCtrl.pop();
  		// this.router.navigate(['/home'], { replaceUrl: true })
     	 window.history.back();

  	}

  	toggleReadOnly(){
  		this.readCounter++;
  		if (this.readCounter === 1){
  			this.shouldReadOnly = false;
  		}
  	}

  	updateChanges(){
  		this
  			.note
  				.updateChanges(this.allNotes, 
  									this.noteId + 1, 
  									{title: this.newTitle, content: this.newContent}).then(() => {
  										this.goBack();
  									});
  		
  	}

}
