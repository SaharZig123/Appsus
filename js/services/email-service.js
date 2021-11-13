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
    remove

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
        sentAt: new Date().toDateString(),
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
        emails.push(_createEmail('Hey you', utilService.makeLorem(70), 'sahar@gmail.com'))
        emails.push(_createEmail('LALA', utilService.makeLorem(70), 'naama123@gmail.com'))
        emails.push(_createEmail('WAWe',utilService.makeLorem(70), 'mama2@wowo'))
        emails.push(_createEmail('Paku ta', utilService.makeLorem(70), 'lolog@what.com'))
        emails.push(_createEmail('Loko Pokom', utilService.makeLorem(70), 'Yossi'))
        emails.push(_createEmail('Mama', utilService.makeLorem(70), 'Moshe'))
        emails.push(_createEmail('Alifutt', utilService.makeLorem(70), 'xzdz@what.com'))
        emails.push(_createEmail('Ca ku', utilService.makeLorem(70), 'ebtvxcb@what.com'))
        emails.push(_createEmail('Loko Pokom', utilService.makeLorem(70), 'Dudu'))
        emails.push(_createEmail('Loko Pokom sd', utilService.makeLorem(70), 'qazxc@what.com'))
        emails.push(_createEmail('Kante Motek', utilService.makeLorem(70), 'Noan'))
        emails.push(_createEmail('Mize', utilService.makeLorem(70), 'Marcelito'))
        emails.push(_createEmail('Loko Pokom', utilService.makeLorem(70), 'rertv@what.com'))
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


function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}
