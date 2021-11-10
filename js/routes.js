import appHome from './pages/app-home.cmp.js';
// import appAbout from './pages/app-about.cmp.js';
// import noteDetails from './apps/keep/pages/note-details.cmp.js';
import noteApp from './apps/keep/pages/keep-app.cmp.js'
import emailsApp from '../js/apps/email/pages/emails-app.cmp.js'

const routes = [
  {
    path: '/',
    component: appHome,
  },
  // {
  //   path: '/about',
  //   component: appAbout,
  // },
  {
    path: '/note',
    component: noteApp
  },
  // {
  // path: '/note/:noteId',
  // component: noteDetails
  // },
  {
    path: '/email',
    component: emailsApp
  }
 
]

export const router = new VueRouter({ routes });
