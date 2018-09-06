import Vue from 'vue'
//路由模块
import Router from 'vue-router'
//引入组件
import Index from '@/components/Index';
import NewHand from '@/components/NewHand';
import API from '@/components/API';
import About from '@/components/About';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Loading from '@/components/Loading';
//引入主题组件
import All from '@/components/topics/All';
import Good from '@/components/topics/Good';
import Share from '@/components/topics/Share';
import Ask from '@/components/topics/Ask';
import Job from '@/components/topics/Job';
import ClientTest from '@/components/topics/ClientTest';
import Article from '@/components/topics/Article';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          component:All
        },
        {
          path:'good',
          component:Good
        },
        {
          path:'share',
          component:Share
        },
        {
          path:'ask',
          component:Ask
        },
        {
          path:'job',
          component:Job
        },
        {
          path:'client_test',
          component:ClientTest
        },
        {
          path:'article/:id/:brfore_route',
          component:Article
        }
      ]
    },
    {
      path:'/nh',
      name:'NewHand',
      component:NewHand
    },
    {
      path:'/api',
      name:'API',
      component:API
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/loading',
      component:Loading
    },
    // 首页和全部两个页面路由一样，需要重定向
    {
      path:'/*',
      redirect:'/index'
    }
    
  ]
})
