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
        path:'',
        redirect:'playing'
    }
    ]
}