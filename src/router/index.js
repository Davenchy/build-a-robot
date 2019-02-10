import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';
import PartInfo from '@/parts/PartInfo.vue';

import BrowseParts from '@/parts/browse/BrowseParts.vue';
import RobotArms from '@/parts/browse/RobotArms.vue';
import RobotBases from '@/parts/browse/RobotBases.vue';
import RobotHeads from '@/parts/browse/RobotHeads.vue';
import RobotTorsos from '@/parts/browse/RobotTorsos.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomePage,
    },
    {
      name: 'Builder',
      path: '/builder',
      component: RobotBuilder,
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
    },
  ],
});
