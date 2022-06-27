
const routes = [
  {
    path: '/', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/faculties',
    icon: 'FormsIcon',
    name: 'Faculties',
  },
  {
    path: '/departments',
    icon: 'CardsIcon',
    name: 'Departments',
  },
  {
    path: '/units',
    icon: 'CardsIcon',
    name: 'Units',
  },
  {
    path: '/staff',
    icon: 'ChartsIcon',
    name: 'Academic Staff',
  },
  {
    path: '/nonstaff',
    icon: 'ChartsIcon',
    name: 'Non-Academic Staff',
  },
  {
    path: '/activitylog',
    icon: 'TablesIcon',
    name: 'Activity Log',
  },
]

export default routes
