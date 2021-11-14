import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes()


export const noteService = {
    query,
    remove,
    save,
    getEmptyNote,
    getById,
    _createNotes,
    _createNote,
    changeNoteColor,
    updateTxt,
    duplicate,
    setPinnedNote
};

function query() {
    return storageService.query(NOTES_KEY);
}

function changeNoteColor(note) {
    let currNote = getById(note.id)
    currNote.then(currNote => {
        currNote.style.color = note.style.color
        save(currNote)
    });
}

function updateTxt(note) {
    console.log(note)
    let currNote = getById(note.id)
    currNote.then(currNote => {
        currNote = note;
        save(currNote)
    });
}

function duplicate(note) {
    note.id = '';
    save(note);
}

function setPinnedNote(note) {
    return storageService.addToStart(NOTES_KEY, note);
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.post(NOTES_KEY, note);
}

function getById(noteId) {
    return storageService.get(NOTES_KEY, noteId);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            _createNote('note-txt', 'do something'),
            _createNote('note-img', {label: 'Hello World',url:'../img/test.png'}),
            _createNote('note-video', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
            _createNote('note-todos', {label:'i am a label',todos: ['first todo', 'second todo']}),
            _createNote('note-todos', {label:'My list:', todos:['todo1', 'todo2', 'todo3']}),

        ]
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function _createNote(type, ...restInfo) {
    let note = {
        id: utilService.makeId(),
        type: type,
        isPinned: false,
        style: {
            color: '#fdfdc9'
        },
        info: {}
    }
    createNoteInfo(note, ...restInfo);


    return note;
}

function getEmptyNote(type, ...restInfo) {
    let note = {
        id: '',
        type: type,
        isPinned: false,
        style: {
            color: '#fdfdc9'
        },
        info: {}
    }
    createNoteInfo(note, ...restInfo);

    return note;
}

function createNoteInfo(note, ...restInfo) {
    if (note.type === 'note-txt') {
        const [txt] = restInfo;
        note.info = { txt: txt };
    }
    else if (note.type === 'note-img') {
        const [info] = restInfo;
        note.info = info;
    }
    else if (note.type === 'note-video') {
        const [URL] = restInfo;
        note.info = { URL: URL };
    }
    else if (note.type === 'note-todos') {
        let [info] = restInfo;        
        let currTodos = info.todos.map(todo => todo = {
            txt: todo,
            doneAt: null
        })
        note.info = { label: info.label, todos: currTodos };
    }
}
