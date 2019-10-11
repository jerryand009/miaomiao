<template>
    <div class="movieDetail">
        <AppHeader title="电影详情" class="title">
            <span class="left" @touchstart="goBack">&lt;</span>
        </AppHeader>
        <div class="content">
            <div class="head">
                <div class="bgcImg" :style="bgImg"></div>
                <div class="filter"></div>
                <div class="front">
                    <div class="img">
                        <img :src="detailMovie.img|setWidthHeight('148.208')" alt="">
                    </div>
                    <div class="info">
                        <h2>{{detailMovie.nm}}</h2>
                        <p>{{detailMovie.enm}}</p>
                        <p>{{detailMovie.sc}}</p>
                        <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}} / {{detailMovie.dur}}分钟</p>
                        <p>{{detailMovie.pubDesc}}</p>
                    </div>
                </div>
            </div>
            <div class="discription">
                <p>{{detailMovie.dra}}</p>
            </div>
            <div class="swiper">
                <ul>
                    <li v-for="(item,index) in detailMovie.photos" :key="index">
                        <img :src="item|setWidthHeight('120.70')" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import AppHeader from '@/components/header'
  export default {
    name: "detail",
    components:{
      AppHeader
    },
    data(){
      return {
        detailMovie:{},
        bgImg:{
          backgroundImage:'url()'
        }
      }
    },
    props:['movieId'],
    mounted(){
        this.axios.get("/api/detailmovie?movieId="+this.movieId).then((res)=>{
          if (res.data.msg=="ok"){
            this.detailMovie = res.data.data.detailMovie;
            console.log(this.detailMovie);
            // 这个背景图片是个坑，注意要这么处理！！！ 过滤器不知道怎么用才对
            this.bgImg.backgroundImage = 'url('+this.detailMovie.img.replace(/w\.h/,'148.208')+')'
          }
        })
    },
    methods:{
      goBack(){
        this.$router.back();
      }
    }
  };
</script>

<style scoped lang="scss">
.movieDetail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    .title {
        z-index: 999;
    }
    .left {
        position: absolute;
        left: 10px;
        font-weight: bold;
        font-size: 1rem;
    }
    .content {
        padding-top: 50px;
        height: 100%;
        .head {
            height: 200px;
            position: relative;
            overflow: hidden;
            .filter {
                height: 100%;
                width: 100%;
                background-color: rgba(0,0,0,.5);
                opacity: .5;
                position: absolute;
                top: 0;
                left: 0;
            }
            .bgcImg {
                height: 100%;
                width: 100%;
                filter: blur(20px);
                background-size: cover;
                background-position: 0 40%;
                position: absolute;
                top: 0;
                left: 0;
            }
            .front {
                width: 100%;
                height: 100%;
                position: absolute;
                display: flex;
                .img {
                    width: 108px;
                    height: 150px;
                    margin: 25px;
                    border: 1px solid #f0f2f3;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    h2 {
                        font-size: 20px;
                        line-height: 40px;
                        padding-bottom: 10px;
                        color: #f0f2f3;
                    }
                    p {
                        font-size: 14px;
                        line-height: 20px;
                        color: #ccc;
                    }
                }
            }
        }
        .discription {
            padding: 15px 10px;
            p {
                line-height: 25px;
            }
        }
        .swiper {
            width: 100%;
            ul {
                display: flex;
                overflow: hidden;
                li {
                    flex-wrap: nowrap;
                    padding: 5px;
                    img {
                        width: 100px;
                    }
                }
            }
        }
    }
}
</style>