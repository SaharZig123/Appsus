import appHome from './pages/app-home.cmp.js';
import appAbout from './pages/app-about.cmp.js';
import noteApp from './apps/keep/pages/keep-app.cmp.js'
import emailsApp from '../js/apps/email/pages/emails-app.cmp.js'
import emailsReading from './apps/email/pages/emails-reading.cmp.js'
import emailCompose from './apps/email/pages/email-compose.cmp.js'
import sentEmails from './apps/email/pages/sent-folder.cmp.js'
import bookApp from './apps/books/pages/book-app.cmp.js'
import bookDetails from './apps/books/pages/book-details.cmp.js'


const routes = [
  {
    path: '/',
    component: appHome,
  },
  {
    path: '/about',
    component: appAbout,
  },
  {
    path: '/note',
    component: noteApp,
  },
  {
    path: '/email',
    component: emailsApp,
    children: [
      {
        path: 'new',
        component: emailCompose,
      },
      {
        path: 'sent',
        component: sentEmails,
      },
    ],
  },
  {
    path: '/book',
    component: bookApp
  },

  {
    path: '/book/:bookId',
    component: bookDetails
  },


  {
    path: '/email/:emailId',
    component: emailsReading
  },


]

export const router = new VueRouter({ routes });


// {
//   path: '/about',
//   component: aboutPage,
//   children: [
//     {
//       path: 'team',
//       component: aboutTeam,
//     },
//     {
//       path: 'service',
//       component: aboutService,
//     },
//   ],
// },