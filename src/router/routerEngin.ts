import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import event from '@/infrastructure/core/globalEvent'
function routerBuilder(routes:Array<RouteRecordRaw>){

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  
  router.beforeEach((routeTo, routeFrom, next) => {
    // progress.start();
    event.route_before_each(routeTo, routeFrom,next)  

  });
  router.afterEach((routeTo, routeFrom) => {
    event.route_after_each(routeTo, routeFrom)
    // progress.done()

  });

  router.onError(error => {
    // services.log(error, 'Router')
  });

   

  return router
}

 
  


export default routerBuilder
