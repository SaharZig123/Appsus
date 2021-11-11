import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';


const EMAILS_KEY = 'emails'

_createEmails()

export const emailService = {
    query,
    _createEmail,
    _createEmails,
    getById,
    save,
    getEmptyEmail,

};

const loggedinUser = {
    email: 'naamaSahar@appsus.com',
    fullname: 'Mahatma Appsus'
}

function query() {
    return storageService.query(EMAILS_KEY)
        .then(emails => {
            return emails
        })
}




function _createEmail(subject, body, from) {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: new Date(),
        from,
        to:'naamaSahar@appsus.com',
        sent: false
    }
    return email
}

function getEmptyEmail() {
    const email = {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: '',
        sent: true,
        to: '',
        from:'naamaSahar@appsus.com'
    }
    return email
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = []
        emails.push(_createEmail('Hey you', 'sahar zigdon 123', 'sahar@gmail.com'))
        emails.push(_createEmail('LALA', 'Hey Lala papa', 'naama123@gmail.com'))
        emails.push(_createEmail('Popi Kiki', 'mama papa tata', 'mama2@wowo'))
        emails.push(_createEmail('Loko Pokom', 'Sak kimhita nana', 'lolog@what.com'))
        utilService.saveToStorage(EMAILS_KEY, emails);

    }
}




function getById(emailId) {
    return storageService.get(EMAILS_KEY, emailId);
}


function save(email) {
    if (email.id) return storageService.put(EMAILS_KEY, email);
    else return storageService.post(EMAILS_KEY, email);
}
