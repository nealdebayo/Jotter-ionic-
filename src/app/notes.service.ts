import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public allNotes: any = []

  constructor(private storage: Storage) { }

  getNotes(){
  	return this.storage.get('Nealdebayos')
  }

  addNote(noteArr: any, note: any){
  		this.allNotes = [note, ...noteArr];
  		this.storage.set('Nealdebayos', this.allNotes);
  }

  deleteById(allNotes, $id){
  	 let newNotes = allNotes.filter(note => note.id !== $id);
  	 return this.storage.set('Nealdebayos', newNotes);
  }

  deleteByTitle($title){

  }

  updateChanges(noteArrr:any, $id:number, newNote: any){
      let newNotes = []
      noteArrr.forEach(note => {
        if (parseInt(note.id) === $id){
          var notePreview : string = newNote.content.toString();
          if (notePreview.length > 42) {
            notePreview = notePreview.slice(0, 42) + "..."
          }
          console.log($id)
          note = {id : $id, title: newNote.title, note: notePreview, noteContent: newNote.content, time: note.time}
        }
       newNotes.push(note)
      })
      return this.storage.set('Nealdebayos', newNotes);

  }

}
