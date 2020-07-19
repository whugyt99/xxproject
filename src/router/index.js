import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import DefectDetectionPage from '../components/DefectDetectionPage'
import TrainingPage from '../components/TrainingPage'
import NewsPage from '../components/NewsPage'
import Introduction from "../components/Introduction";
import ContactUs from "../components/ContactUs";
import N0624 from "../components/newsInfo/N0624";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,

    },
    // {
    //   path: '/components/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
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
      path: '/components/NewsPage',
      name: 'NewsPage',
      component: NewsPage,

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
    {
      path: '/components/newsInfo/N0624',
      name: 'N0624',
      component: N0624
    },

  ]
})
