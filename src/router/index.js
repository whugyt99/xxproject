import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import DefectDetectionPage from '../components/DefectDetectionPage'
import TrainingPage from '../components/TrainingPage'
import Introduction from "../components/Introduction";
import ContactUs from "../components/ContactUs";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
          path: '/components/DefectDetectionPage',
          name: 'DefectDetectionPage',
          component: DefectDetectionPage
        },
{
          path: '/components/TrainingPage',
          name: 'TrainingPage',
          component: TrainingPage
        },
    {
      path: '/components/Introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/components/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },

  ]
})
