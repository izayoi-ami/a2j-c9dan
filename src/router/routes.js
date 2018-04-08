
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: '/result', component: () => import('pages/result') },
      { path: '/lossOfSociety', component: () => import('pages/lossOfSociety') },
      { path: '/medicalReport', component: () => import('pages/medicalReport') },
      { path: '/summary', component: () => import('pages/summary') }
    ]
  },

  {
    path: '/result',
    component: () => import('pages/result')
  },

  {
    path: '/lossOfSociety',
    component: () => import('pages/lossOfSociety')
  },

  {
    path: '/medicalReport',
    component: () => import('pages/medicalReport')
  },

  {
    path: '/summary',
    component: () => import('pages/summary')
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
