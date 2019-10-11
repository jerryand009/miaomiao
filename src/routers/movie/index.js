export default {
    path: '/movie',
    component: () => import("@/views/movie"),
    children: [{
        path: 'city',
        component: () => import("@/components/city")
    }, {
        path: 'playing',
        component: () => import("@/components/playing")
    }, {
        path: 'comming',
        component: () => import("@/components/comming")
    }, {
        path: 'search',
        component: () => import("@/components/search")
    },{
        path:'detail/:movieId',
        components:{
            default: () => import("@/components/playing"),
            detail: () => import("@/views/movie/detail")
        },
        props:{
            detail:true,
        }
    },{
        path:'',
        redirect:'playing'
    }
    ]
}