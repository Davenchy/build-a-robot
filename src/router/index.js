import Vue from 'vue';
import Router from 'vue-router';

// pages
import HomePage from '@/home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';
import PartInfo from '@/parts/PartInfo.vue';
import CartPage from '@/cart/CartPage.vue';

// manual browser pages
import BrowseParts from '@/parts/browse/BrowseParts.vue';
import RobotArms from '@/parts/browse/RobotArms.vue';
import RobotBases from '@/parts/browse/RobotBases.vue';
import RobotHeads from '@/parts/browse/RobotHeads.vue';
import RobotTorsos from '@/parts/browse/RobotTorsos.vue';

// sidebar
import StandardSidebar from '@/sidebar/SidebarStandard.vue';
import CartSidebar from '@/sidebar/SidebarCart.vue';
import BuildSidebar from '@/sidebar/SidebarBuild.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      components: {
        default: HomePage,
        sidebar: StandardSidebar,
      },
    },
    {
      name: 'Builder',
      path: '/builder',
      components: {
        default: RobotBuilder,
        sidebar: BuildSidebar,
      },
    },
    {
      name: 'Cart',
      path: '/cart',
      components: {
        default: CartPage,
        sidebar: CartSidebar,
      },
    },
    {
      name: 'Browse',
      path: '/parts/browse',
      component: BrowseParts,
      children: [
        {
          name: 'RobotHeads',
          path: 'heads',
          component: RobotHeads,
        },
        {
          name: 'RobotArms',
          path: 'arms',
          component: RobotArms,
        },
        {
          name: 'RobotTorsos',
          path: 'torsos',
          component: RobotTorsos,
        },
        {
          name: 'RobotBases',
          path: 'Bases',
          component: RobotBases,
        },
      ],
    },
    {
      name: 'Parts',
      path: '/parts/:partType/:id',
      component: PartInfo,
      props: true,
      beforeEnter: (to, from, next) => {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
  ],
});
