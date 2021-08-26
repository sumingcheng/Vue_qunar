//引入Vue
import Vue from 'vue'
//引入vue-router  
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import List from '@/pages/list/list'
// Vue全局使用Router
Vue.use(Router)

export default new Router({
  // 配置路由，这里是个数组,所以说路由的本质其实是个数组。
  routes: [
    {
      // 访问的根目录 http://localhost:8080/#/
      // 也就是说让跟路由展示我们的 HelloWorld
      path: '/',
      // 展示的组件内容
      name: 'Home',
      // 对应的组件模板,进行HelloWorld的组件注册
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 导入新的list单文件组件,名称保持和import List from 中的 List 一致
      path: '/List',
      name: 'List',
      component: List
    }
  ]
})
