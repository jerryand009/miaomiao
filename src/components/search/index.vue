<template>
    <div class="main">
        <div class="search">
            <span class="iconfont icon-sousuo"></span>
            <input type="text" value="" v-model="searchKey">
        </div>
        <Scroller>
            <div class="result">
                <ul>
                    <li v-for="item in movieResult" :key="item.id">
                        <div class="movieItem">
                            <div class="pic">
                                <img :src="item.img|setWidthHeight('120.80')" alt="">
                            </div>
                            <div class="info">
                                <h2>{{item.nm}}</h2>
                                <p>{{item.enm}}</p>
                                <p>{{item.cat}}</p>
                                <p>{{item.rt}}</p>
                            </div>
                            <div class="score">
                                <span>{{item.sc}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </Scroller>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
          return {
            searchKey:'',
            movieResult:[],
            timeId:null,
          }
        },
        methods:{
            searchMovie(){
                clearInterval(this.timeId);
                this.timeId = setInterval(()=>{
                  this.axios.get('/api/searchList?cityId='+this.$store.state.city.id+'&kw='+this.searchKey).then((res)=>{
                    if (res.data.msg==='ok'&&res.data.data.movies){
                      this.movieResult = res.data.data.movies.list;
                    }
                  });
                  clearInterval(this.timeId);
                },500);
            }
        },
        watch:{
            searchKey: function(newVal) {
              this.searchMovie()
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        padding-bottom: 50px;
        height: 100%;
        .search {
            z-index: 99;
            border: 10px solid #f5f5f5;
            position: relative;
            span {
                position: absolute;
                left: 10px;
                top: 8px;
            }
            input {
                height: 28px;
                border: 1px solid #e6e6e6;
                border-radius: 5px;
                width: 100%;
                text-indent: 30px;
            }
        }
        .result {
            margin: 0 10px;

            ul {
                display: flex;
                flex-wrap: wrap;
                li {
                    width: 100%;
                    .movieItem {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid #ccc;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        .pic {
                            width:64px;
                            img {
                                width: 100%;
                            }
                        }
                        .info {
                            flex:auto;
                            text-indent: 10px;
                            display: flex;
                            flex-direction: column;
                            h2 {
                                flex: auto;
                                font-weight: bold;
                                width: 200px;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                            p {
                                flex: auto;
                                color: #666;
                                font-size: 13px;
                                width: 200px;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                        }
                        .score {
                            span {
                                font-weight: bold;
                                color: #faaf00;
                            }
                        }
                    }
                }
            }
        }
    }
</style>