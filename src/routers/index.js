import Vue from "vue";
import Router from "vue-router";
import movieRouter from "@/routers/movie"
import cinemaRouter from "@/routers/cinema"
import mineRouter from "@/routers/mine"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
     path:'/*',
     redirect:'/movie'
    }
  ]
});
