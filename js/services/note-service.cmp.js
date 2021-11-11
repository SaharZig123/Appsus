import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

let gId = 101;
const notes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#00d"
        }
    }
];

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
    markDoneTodo
};

function query() {
    return storageService.query(NOTES_KEY);
}

function changeNoteColor(note) {
    console.log(note)
    let currNote = getById(note.id)
    currNote.then(currNote => {
        currNote.style.color = note.style.color
        save(currNote)
    });
}

function markDoneTodo(note) {
    let currNote = getById(note.id);
    currNote.then(note => {
        note.info.todos.map(todo => {
            if (todo.doneAt !== currNote.info.todos.doneAt) currNote.info.todos.doneAt = todo.doneAt;
        })
        })
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

function getEmptyNote() {
    return {
    };
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            _createNote('note-txt', 'do something'),
            _createNote('note-img', 'img/test.png', 'Hello World'),
            _createNote('note-video', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
            _createNote('note-todos','i am a label', ['first todo','second todo']),
            _createNote('note-todos','My list:', ['todo1','todo2','todo3']),
            _createNote('note-img', 'img/test.png', 'Hello World')

        ]
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function _createNote(type,...restInfo) {
    let note = {
        id: 'n' + gId++,
        type: type,
        isPinned: false,
        style: {
            color: 'lightblue'
        },
        info: {}
        }
    if (type === 'note-txt') {
        const [txt] = restInfo;
        note.info = {txt: txt};
    }
    else if (type === 'note-img') {
        const [URL,txt] = restInfo;
        note.info = {URL: URL, txt: txt};
    }
    else if (type === 'note-video') {
        const [URL] = restInfo;
        note.info = {URL: URL};
    }
    else if (type === 'note-todos') {
        let [label,todos] = restInfo;
        let currTodos = todos.map(todo => todo={
            txt: todo,
            doneAt: null
        })
        note.info = {label: label, todos: currTodos};
    }
    
    return note;
}