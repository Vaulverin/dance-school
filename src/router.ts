import Vue from 'vue';
import Router from 'vue-router';
import Today from '@/views/Today.vue';
import UsersList from '@/views/users/UsersList.vue';
import UsersListControls from '@/views/users/UsersListControls.vue';
import UsersCreate from '@/views/users/UsersCreate.vue';
import TransfersAdd from '@/views/transfers/TransfersAdd.vue';
import Lesson from '@/views/Lesson.vue';
import App from '@/App.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users.list',
      components: {
        default: {render: (h) => h(UsersList)},
        controls: {render: (h) => h(UsersListControls)},
      },
    },
    {
      path: '/users/create',
      name: 'users.create',
      component: {render: (h) => h(UsersCreate)},
    },
    {
      path: '/transfers/add',
      name: 'transfers.add',
      component: {render: (h) => h(TransfersAdd)},
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: {render: (h) => h(Today)},
    // },
    // {path: 'lesson', name: 'lesson', component: {render: (h) => h(Lesson)},},
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
