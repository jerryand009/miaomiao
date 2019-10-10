<template>
    <div class="movie">
        <AppHeader title="喵喵电影" class="appHeader"></AppHeader>
        <div class="content">
            <ul class="nav">
                <router-link to="/movie/city" tag="li">
                    <p>{{$store.state.city.nm}} <span class="iconfont icon-xiala"></span></p>
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
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
import { Msgbox } from '@/components/JS'

export default {
    name:'movie',
    components:{
        AppHeader,
        AppFooter
    },
    mounted(){
      this.axios.get("/api/getlocation").then((res)=>{
        if (res.data.msg==="ok"){
          if (this.$store.state.city.id!=res.data.data.id){ //如果拿到的定位城市与localstorage中不一致才弹窗
            let currentId = res.data.data.id;
            let currentNm = res.data.data.nm;
            let that = this
            Msgbox({
              title:"定位",
              content:currentNm,
              cancel:"取消",
              confirm:"确定定位",
              handleCancel(){
                console.log(this);
              },
              handleConfirm(){
                that.$store.commit('city/CITY_INFO',{id:currentId,nm:currentNm});
                localStorage.setItem('currentCity',JSON.stringify({id:currentId,nm:currentNm}));
              }
            })
          }
        }
      });
    }
}
</script>

<style scoped lang="scss">
.movie {
    display: flex;
    flex-direction: column;
    height: 100%;
    .appHeader {
        z-index: 999;
    }
    .content {
        padding-top: 50px;
        padding-bottom: 50px;
        height: 100%;
        .nav {
            z-index: 999;
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