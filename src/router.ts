import Vue from 'vue';
import Router from 'vue-router';
import UsersList from '@/views/users/UsersList.vue';
import MainControls from '@/components/MainControls.vue';
import UsersCreate from '@/views/users/UsersCreate.vue';
import CashFlowAdd from '@/views/cash-flow/CashFlowAdd.vue';
import CashFlowList from '@/views/cash-flow/CashFlowList.vue';
import CFCategoriesList from '@/views/cf-categories/CFCategoriesList.vue';
import CFCategoryForm from '@/views/cf-categories/CFCategoryForm.vue';

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
        controls: {
          render: (h) => h(MainControls, {
            props: {
              items: [{pathName: 'users.create', icon: 'create'}],
            },
          }),
        },
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
    },
    {
      path: '/cash-flow/add',
      name: 'cash-flow.add',
      component: {render: (h) => h(CashFlowAdd)},
    },
    {
      path: '/cf-categories',
      name: 'cf-categories.list',
      components: {
        default: {render: (h) => h(CFCategoriesList)},
        controls: {
          render: (h) => h(MainControls, {
            props: {
              items: [{pathName: 'cf-categories.create', icon: 'create'}],
            },
          }),
        },
      },
    },
    {
      path: '/cf-categories/create',
      name: 'cf-categories.create',
      component: {render: (h) => h(CFCategoryForm)},
    },
    {
      path: '/cf-categories/:id/edit',
      name: 'cf-categories.edit',
      components: {
        default: {render: (h) => h(CFCategoryForm)},
        controls: {
          render: (h) => h(MainControls, {
            props: {
              items: [{event: 'cf-categories.delete', icon: 'delete'}],
            },
          }),
        },
      },
    },
  ],
});
