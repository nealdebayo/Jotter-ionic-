import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NotesService } from './../notes.service';


@Component({
  selector: 'app-writenote',
  templateUrl: './writenote.page.html',
  styleUrls: ['./writenote.page.scss'],
})
export class WritenotePage implements OnInit {
	public title: any = "";
	public noteContent : any = "";
  public allNotes: any = [];
  	constructor(
  		private notes: NotesService,
  		private router: Router,
  		public navCtrl: NavController) { }

  	ngOnInit() {
  	}

    ionViewWillEnter(){
      this.notes.getNotes().then(data => {
        if (data){
          this.allNotes = data
        }
      })
    }

  	goBack(){
  		// this.router.navigate(['/home'])
  		// this.navCtrl.pop();
      // this.router.navigate(['/home'], { replaceUrl: true })
      window.history.back();
      
  	}

    getId(){
      return parseInt(this.allNotes.length + 1);
    }

  	saveNote(){
      var d = new Date;
      var dformat = [d.getMonth()+1,
                     d.getDate(),
                     d.getFullYear()].join('/')
      var time = +' '+
                    [d.getHours() < 10? `0${d.getHours()}` : d.getHours(),
                     d.getMinutes() < 10? '0'+d.getMinutes() : d.getMinutes(),
                     d.getSeconds() < 10? `0${d.getSeconds()}` : d.getSeconds()].join(':');

      var notePreview : string = this.noteContent.toString();
      if (notePreview.length > 42) {
        notePreview = notePreview.slice(0, 42) + "..."
      }



      if(this.title.length > 0 || this.noteContent.length > 0) {
          this.notes
            .addNote(this.allNotes, 
                          { id: this.getId(),
                            title: this.title, 
                            note: notePreview,
                            noteContent: this.noteContent, 
                            time: dformat});
      }
		

		// this.navCtrl.pop();
      // this.router.navigate(['/home'], { replaceUrl: true })
      window.history.back();

  	}
}
