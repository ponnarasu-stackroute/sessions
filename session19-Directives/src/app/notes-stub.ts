import {Note} from './note';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


export class NotesStub {

    addNote(note:Note) : Observable<Note>{
        if(note.title === "invalid" && note.text ==='invalid'){
            return Observable.throw({message:" your values are invalid"})
        }
        return Observable.of(note);
    }
}
