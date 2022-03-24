
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'typeography', component: () => import('pages/typography.vue') },
      { path: 'spacing', component: () => import('pages/spacing.vue') },
      { path: 'shadow', component: () => import('pages/shadow.vue') },
      { path: 'visibility', component: () => import('pages/visibility.vue') },
      { path: 'Curd', component: () => import('pages/Curd.vue') },






    ]
  },
  {
    path: '/',
    component: () => import('layouts/GeneralLayout.vue'),
    children: [
      { path: 'Login', component: () => import('pages/Login.vue') },





    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
