import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component:()=> import('@/components/todolist'),
    beforeEnter:(to,from,next)=>{
      Vue.axios.get('list.json').then(da=>{
        // console.log(da.data[0].list)
        store.commit('listInit',da.data[0].list)
      }).catch(da=>{
        console.log(da)
      })
      next()
    }
  }

   
];

const router = new VueRouter({
  routes,
});

export default router;
