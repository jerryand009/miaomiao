<template>
    <footer>
        <ul>
            <router-link to="/movie" tag="li">
                <span class="iconfont icon-dianying"></span>
                <p>电影</p>
            </router-link>
            <router-link to="/cinema" tag="li">
                <span class="iconfont icon-yingyuana"></span>
                <p>影院</p>
            </router-link>
            <router-link to="/mine" tag="li">
                <span class="iconfont icon-wode"></span>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name:"AppFooter",
}
</script>

<style scoped lang="scss">
footer{
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #ccc;
    ul {
        display: flex;
        li {
            margin-top: 5px;
            height: 40px;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span {
                margin-bottom: 2px;
                font-size: 18px;
            }
            p {
                font-size: 14px;
            }
        }
        .router-link-active {
            color: $baseColor;
        }
    }
}
</style>