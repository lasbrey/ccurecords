import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Page404 = lazy(() => import('../pages/404'))
const Faculties = lazy(() => import('../pages/faculties'))
const Nonstaff = lazy(() => import('../pages/non-staff'))
const Departments = lazy(() => import('../pages/departments'))
const Activity = lazy(() => import('../pages/activity'))
const Staff = lazy(() => import('../pages/staff'))
const Importuser = lazy(() => import('../pages/import'))

const routes = [
  {
    path: '/', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/faculties',
    component: Faculties,
  },
  {
    path: '/departments',
    component: Departments,
  },
  {
    path: '/staff',
    component: Staff,
  },
  {
    path: '/nonstaff',
    component: Nonstaff,
  },
  {
    path: '/activitylog',
    component: Activity,
  }, 
  {
    path: '/import',
    component: Importuser,
  },
  {
    path: '/404',
    component: Page404,
  },
]

export default routes
