<template>
    <div class="main">
        <AppHeader title="喵喵影院" class="appHeader"></AppHeader>
        <div class="content">
            <ul class="nav clearfix">
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
            <div class="body">
                <Scroller>
                    <ul>
                        <li v-for="item in cinemaList" :key="item.id">
                            <div>
                                <p class="title">{{item.nm}}<span class="price">{{item.sellPrice}}</span><span>元起</span></p>
                                <p class="address">{{item.addr}}</p>
                                <p class="card">
                                <span>
                                    <i v-for="(value,key) in item.tag" v-if="value==1">{{key|tagFilter}}</i>
                                </span>
                                    <span>{{item.distance}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </Scroller>
            </div>
        </div>
        <AppFooter class="appFooter"></AppFooter>
    </div>
</template>

<script>
    import AppHeader from '@/components/header'
    import AppFooter from '@/components/footer'
    export default {
        name:'cinema',
        components:{
            AppHeader,
            AppFooter
        },
        data(){
            return {
              cinemaList:[],
              prevCity:-1
            }
        },
        activated(){
          let currentCity = this.$store.state.city.id;
          if (this.prevCity!=currentCity){
            this.axios.get('/api/cinemaList?cityId='+currentCity).then((res)=>{
              // console.log(res.data.data.cinemas);
              if (res.data.msg==='ok'){
                this.cinemaList = res.data.data.cinemas
              }
            })
            this.prevCity = currentCity;
          }
        },
        filters:{
            tagFilter:function(k) {
              let obj={allowRefund:"退",buyout:"售罄",cityCardTag:"city",endorse:"en",sell:"热卖",snack:'零食',vipTag:'折扣卡',deal:"deal"}
              return obj[k]
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        height: 100%;
        .appHeader {
            z-index: 99;
        }
        .content {
            height: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
            .nav {
                line-height: 46px;
                display: flex;
                border-bottom: 1px solid #ccc;
                position: fixed;
                width: 100%;
                background-color: #fff;
                z-index: 99;
                li {
                    flex:1;
                    justify-content: center;
                    text-align: center;
                    background-color: #fff;
                }
                .router-link-active {
                    color: $baseColor;
                    border-bottom: 2px solid $baseColor;
                }
            }
            .body {
                padding-top: 50px;
                height: 100%;
                ul {
                    padding: 20px 20px 0;
                    li {

                        margin-bottom: 20px;
                        div {
                            border-bottom: 1px solid #ccc;
                            padding-bottom: 5px;
                            display: flex;
                            flex-direction: column;
                            p {
                                margin-bottom: 10px;
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
                                        &:nth-child(1n){
                                            border: 1px solid #589daf;
                                            border-radius: 2px;
                                            color: #589daf;
                                        }
                                        &:nth-child(2n){
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