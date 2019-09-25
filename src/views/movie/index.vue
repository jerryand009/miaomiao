<template>
    <div class="main">
        <AppHeader title="喵喵电影"></AppHeader>
        <div class="content">
            <ul class="nav">
                <router-link to="/movie/city" tag="li">
                    <p>北京 <span class="iconfont icon-xiala"></span></p>
                </router-link>
                <router-link to="/movie/playing" tag="li">
                    <p>正在热映</p>
                </router-link>
                <router-link to="/movie/comming" tag="li">
                    <p>即将上线</p>
                </router-link>
                <router-link to="/movie/search" tag="li">
                    <p class="iconfont icon-sousuo"></p>
                </router-link>
            </ul>
            <keep-alive>
                <router-view class="body"/>
            </keep-alive>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppHeader from '@/components/header/index.vue'
import AppFooter from '@/components/footer/index.vue'
export default {
    name:'movie',
    components:{
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped lang="scss">
.main {
    .content {
        padding-top: 50px;
        padding-bottom: 50px;
        .nav {
            line-height: 46px;
            display: flex;
            border-bottom: 1px solid #ccc;
            position: fixed;
            width: 100%;
            background-color: #fff;
            li {
                flex:1;
                justify-content: center;
                text-align: center;
            }
            .router-link-active {
                color: $baseColor;
                border-bottom: 2px solid $baseColor;
            }
        }
        .body {
            padding-top: 46px;
        }
    }
}
</style>