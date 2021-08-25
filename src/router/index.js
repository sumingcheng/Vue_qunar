import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 访问的根目录 http://localhost:8080/#/
      // 也就是说让跟路由展示我们的 HelloWorld
      path: '/',
      // 展示的组件内容
      name: 'HelloWorld',
      // 进行HelloWorld的组件注册
      component: HelloWorld
    }
  ]
})
