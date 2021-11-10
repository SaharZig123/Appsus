import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';


const EMAILS_KEY = 'emails'
_createEmails()

export const emailService = {
    query,
};



function query() {
    return storageService.query(EMAILS_KEY)
        .then(emails => {
            return emails
        })
}

function _createEmail(subject, body, to) {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: new Date(),
        to
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
    }
}


const loggedinUser = {
    email: 'naamaSahar@appsus.com',
    fullname: 'Mahatma Appsus'
}