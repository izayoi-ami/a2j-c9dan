export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    path: '/date',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/DateOfAccident') }
    ]
  },

  {
    path: '/basic',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/basic') }
    ]
  },

  {
    path: '/employment',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/employment') }
    ]
  },

  {
    path: '/expenses',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/expenses') }
    ]
  },

  {
    path: '/anywork',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/AnyWork') }
    ]
  },

  {
    path: '/summary',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/summary') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
