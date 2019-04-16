import Vue from 'vue';
import Router from 'vue-router';
import UsersList from '@/views/users/UsersList.vue';
import UsersListControls from '@/views/users/UsersListControls.vue';
import UsersCreate from '@/views/users/UsersCreate.vue';
import CashFlowAdd from '@/views/cash-flow/CashFlowAdd.vue';
import CashFlowList from '@/views/cash-flow/CashFlowList.vue';
import CFCategoriesList from '@/views/cf-categories/CFCategoriesList.vue';

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
      path: '/cash-flow',
      name: 'cash-flow.list',
      component: {render: (h) => h(CashFlowList)},
      children: [
        {
          path: '/add',
          name: 'cash-flow.add',
          component: {render: (h) => h(CashFlowAdd)},
        },
      ],
    },
    {
      path: '/cf-categories',
      name: 'cf-categories.list',
      component: {render: (h) => h(CFCategoriesList)},
      children: [

      ],
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
