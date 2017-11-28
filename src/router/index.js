import Vue from 'vue'
import Router from 'vue-router'
import Start from '../pages/start'
import Swiper from '../pages/swiper'
import Index from '../pages/layout/index'
import Finds from '../pages/layout/finds'
import Classfiy from '../pages/layout/classfiy'
import Mine from '../pages/layout/mine'
import Article from '../pages/layout/detail-active/article'
import Recommend from '../pages/layout/detail-active/recommend'
import Sign from '../pages/layout/detail-active/sign'
import Intelligent from '../pages/layout/find-second/intelligent'
import Shop from '../pages/layout/find-second/shop'
import Topic from '../pages/layout/find-second/topic'
import Blusher from '../pages/layout/classfiy-second/blusher'
import Shopdetail from '../pages/layout/classfiy-second/shopdetail'
import Fans from '../pages/layout/mine-second/fans'
import Attention from '../pages/layout/mine-second/attention'
import News from '../pages/layout/mine-second/news'
import Collect from '../pages/layout/mine-second/collect'
import Articles from '../pages/layout/detail-active/articles'
import Comments from '../pages/layout/detail-active/comments'
import Video from '../pages/layout/detail-active/video'
//search
import SearchTo from '../pages/layout/detail-active/search/searchTo'
import Search2 from '../pages/layout/detail-active/search/search2'
import Topics from '../pages/layout/detail-active/search/topics'
import Product from '../pages/layout/detail-active/search/product'
import Users from '../pages/layout/detail-active/search/users'
//shopdetail
import Remark from '../pages/layout/classfiy-second/class-three/remark'
import Theme from '../pages/layout/classfiy-second/class-three/theme'
import Products from '../pages/layout/classfiy-second/class-three/product'
// 收藏
import Collectshop from '../pages/layout/mine-second/mine-three/collectshop'
import Collectmovie from '../pages/layout/mine-second/mine-three/collectmovie'
import Collecttopic from '../pages/layout/mine-second/mine-three/collecttopic'
// 消息
import Word from '../pages/layout/mine-second/mine-three/word'
import Coze from '../pages/layout/mine-second/mine-three/coze'
import Inform from '../pages/layout/mine-second/mine-three/inform'
import Topicz from '../pages/layout/mine-second/mine-three/topic'

//设置
import Setting from '../pages/layout/mine-second/setting'
import Airlines from '../pages/layout/mine-second/mine-three/airlines'
//登录
import Logins from '../pages/layout/mine-second/mine-three/logins'
//注册
import Reg from '../pages/layout/mine-second/mine-three/reg'
//设置
import Material from '../pages/layout/mine-second/mine-three/material'
import Bindphone from '../pages/layout/mine-second/mine-three/bindphone'
import Address from '../pages/layout/mine-second/mine-three/address'
import Abouts from '../pages/layout/mine-second/mine-three/abouts'
import Help from '../pages/layout/mine-second/mine-three/help'
//我发起的
import Author from '../pages/layout/find-second/find-common/author'

import Public from '../pages/layout/public/public'
import Join from '../pages/layout/public/join'
import Launch from '../pages/layout/public/launch'
import Build from '../pages/layout/public/build'
import Articlez from '../pages/layout/public/articlez'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/build',
      name: 'build',
      component: Build,
    },{
      path:'/articlez',
      name:'articlez',
      component:Articlez
    },{
      path:'/inform',
      name:'inform',
      component:Inform
    },{
      path:'/topic',
      name:'topic',
      component:Topic
    },{
      path: '/airlines',
      name: 'airlines',
      component: Airlines,
    },{
      path: '/public',
      name: 'Public',
      component: Public,
      redirect: "/public/launch",
      children: [{
        path: "launch",
        component: Launch
    },{
        path: "join",
        component: Join
      }]
     
    },{
    	path:'/swipes',
    	name:'lunbo',
    	component:Swiper
    },{
        path:'/index',
        name:'index',
        component:Index
     },{
        path:'/finds',
        name:'finds',
        component:Finds
     },{
        path:'/classfiy',
        name:'classfiy',
        component:Classfiy
     },{
        path:'/mine',
        name:'mine',
        component:Mine
     },{
       path:'/recommend',
       name:'recommend',
       component:Recommend
     },{
       path:'/article',
       name:'article',
       component:Article
     },{
      path:'/articles',
      name:'articles',
      component:Articles
     },{
       path:'/sign',
       name:'sign',
       component:Sign 
     },{
      path:'/intelligent',
      name:'intelligent',
      component:Intelligent
     },{
      path:'/shop',
      name:'shop',
      component:Shop
     },{
      path:'/topic',
      name:'topic',
      component:Topic
     },{
      path:'/blusher',
      name:'blusher',
      component:Blusher
     },{
      path:'/shopdetail',
      name:'shopdetail',
      component:Shopdetail,
      redirect:'/shopdetail/remark',
      children:[{
        path:'remark',
        name:'remark',
        component:Remark
      },{
        path:'theme',
        name:'theme',
        component:Theme
      },{
        path:'products',
        name:'products',
        component:Products
      }]
     },{
      path:'/attention',
      name:'attention',
      component:Attention
     },{
      path:'/fans',
      name:'fans',
      component:Fans
     },{
      path:'/news',
      name:'news',
      component:News,
      redirect:'/news/word',
      children:[{
        path:'word',
        name:'word',
        component:Word
      },{
        path:'coze',
        name:'coze',
        component:Coze
      }]
     },{
      path:'/collect',
      name:'collect',
      component:Collect,
      redirect:'/Collect/collecttopic',
      children:[{
        path:'collecttopic',
        name:'collecttopic',
        component:Collecttopic
      },{
        path:'collectshop',
        name:'collectshop',
        component:Collectshop
      },{
        path:'collectmovie',
        name:'collectmovie',
        component:Collectmovie
      }]
     },{
      path:'/comments',
      name:'comments',
      component:Comments
     },{
      path:'/video',
      name:'video',
      component:Video
     },{
      path: '/search2',
      name: 'search2',
      component: Search2,
      redirect: "/search2/topics",
      children: [{
        path: "topics",
        component: Topics
      }, 
      {
        path: "product",
        component: Product
      }, {
        path: "users",
        component: Users
      }]
    },{
      path: '/searchTo',
      name: 'SearchTo',
      component: SearchTo
     
    },{
      path:'/setting',
      name:'setting',
      component:Setting
    },{
      path:'/logins',
      name:'logins',
      component:Logins
    },{
      path:'/reg',
      name:'reg',
      component:Reg
     },{
      path:'/material',
      name:'material',
      component:Material
     },{
      path:'/bindphone',
      name:'bindphone',
      component:Bindphone
     },{
      path:'/address',
      name:'address',
      component:Address
     },{
      path:'/abouts',
      name:'abouts',
      component:Abouts
     },{
      path:'/help',
      name:'help',
      component:Help
     },{
      path:'/author',
      name:'author',
      component:Author
     }


  ]
})
