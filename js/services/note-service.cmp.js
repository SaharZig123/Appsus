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
    changeNoteColor
};

function query() {
    return storageService.query(NOTES_KEY);
}

function changeNoteColor(note) {
    let currNote = getById(note.id)
    currNote.style.color = note.color;
    save(currNote);
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
        id: '',
        vendor: '',
        maxSpeed: 0
    };
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            _createNote('Buy pens'),
            _createNote('Do yoga'),
            _createNote('Dont forget to breath'),
            _createNote('Go on the light road')
        ]
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function _createNote(txt) {
    const note = {
        id: 'n' + gId++,
        type: "note-txt",
        isPinned: false,
        info: {
            txt: txt
        },
        style: {
            color: 'red'
        }
    }
    return note;
}