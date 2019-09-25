<template>
    <div class="main">
        <AppHeader title="喵喵影院"></AppHeader>
        <div class="content">
            <header>
                <ul class="nav">
                    <li class="router-link-active">
                        <p>全城 <span class="iconfont icon-xiala"></span></p>
                    </li>
                    <li>
                        <p>品牌 <span class="iconfont icon-xiala"></span></p>
                    </li>
                    <li>
                        <p>特色 <span class="iconfont icon-xiala"></span></p>
                    </li>
                </ul>
            </header>
            <div class="body">
                <ul>
                    <li>
                        <div>
                            <p class="title">哈艺时尚影城（同德围店）<span class="price">18</span><span>元起</span></p>
                            <p class="address">白云区西槎路221号凯升广场首层（上步牌坊对面）</p>
                            <p class="card">
                                <span>
                                    <i>退</i>
                                    <i>折扣卡</i>
                                    <i>小吃</i>
                                </span>
                                <span>1183.6km</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p class="title">哈艺时尚影城（同德围店）<span class="price">18</span><span>元起</span></p>
                            <p class="address">白云区西槎路221号凯升广场首层（上步牌坊对面）</p>
                            <p class="card">
                                <span>
                                    <i>退</i>
                                    <i>折扣卡</i>
                                    <i>小吃</i>
                                </span>
                                <span>1183.6km</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p class="title">哈艺时尚影城（同德围店）<span class="price">18</span><span>元起</span></p>
                            <p class="address">白云区西槎路221号凯升广场首层（上步牌坊对面）</p>
                            <p class="card">
                                <span>
                                    <i>退</i>
                                    <i>折扣卡</i>
                                    <i>小吃</i>
                                </span>
                                <span>1183.6km</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p class="title">哈艺时尚影城（同德围店）<span class="price">18</span><span>元起</span></p>
                            <p class="address">白云区西槎路221号凯升广场首层（上步牌坊对面）</p>
                            <p class="card">
                                <span>
                                    <i>退</i>
                                    <i>折扣卡</i>
                                    <i>小吃</i>
                                </span>
                                <span>1183.6km</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p class="title">哈艺时尚影城（同德围店）<span class="price">18</span><span>元起</span></p>
                            <p class="address">白云区西槎路221号凯升广场首层（上步牌坊对面）</p>
                            <p class="card">
                                <span>
                                    <i>退</i>
                                    <i>折扣卡</i>
                                    <i>小吃</i>
                                </span>
                                <span>1183.6km</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from '@/components/header/index.vue'
    import AppFooter from '@/components/footer/index.vue'
    export default {
        name:'cinema',
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
                padding-top: 50px;
                ul {
                    padding: 20px 20px 0;
                    li {
                        height: 100px;
                        margin-bottom: 20px;
                        div {
                            border-bottom: 1px solid #ccc;
                            padding-bottom: 5px;
                            p {
                                height: 30px;
                            }
                            .title {
                                font-size: 16px;
                                span {
                                    color: $baseColor;
                                }
                                .price {
                                    font-weight: bold;
                                }
                            }
                            .address {
                                font-size: 14px;
                            }
                            .card {
                                display: flex;
                                justify-content: space-between;
                                span {
                                    i {
                                        margin-right: 2px;
                                        padding:0 2px;
                                        &:nth-child(1){
                                            border: 1px solid #589daf;
                                            border-radius: 2px;
                                            color: #589daf;
                                        }
                                        &:nth-child(2){
                                            border: 1px solid #F90;
                                            border-radius: 2px;
                                            color: #F90;
                                        }
                                        &:nth-child(3){
                                            border: 1px solid #F90;
                                            border-radius: 2px;
                                            color: #F90;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>