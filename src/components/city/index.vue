<template>
    <div class="main">
        <div class="city-left">
            <Scroller ref="citylist">
                <div>
                    <div class="hot">
                        <h2>热门城市</h2>
                        <div>
                            <ul>
                                <li v-for="item in hotcities" :key="item.id" @tap="changeLocation(item.id,item.nm)">{{item.nm}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="city">
                        <div  v-for="item in citiesList" :key="item.index" ref="city">
                            <h2>{{item.index}}</h2>
                            <ul>
                                <li v-for="city in item.list" :key="city.id" @tap="changeLocation(city.id,city.nm)">{{city.nm}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Scroller>
        </div>
        <div class="city-right">
            <div class="sort">
                <ul>
                    <li v-for="(item,index) in citiesList" :key="item.index" @touchstart="goToIndex(index)">{{item.index}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "city",
    data(){
      return {
        citiesList: [],
        hotcities:[]
      }
    },
    mounted() {
      let citiesList = JSON.parse(localStorage.getItem("citiesList"));
      let hotcities = JSON.parse(localStorage.getItem("hotcities"));
      if (citiesList&&hotcities){
        this.citiesList = citiesList;
        this.hotcities = hotcities;
      }else{
        this.axios.get("/api/cityList").then((res) => {
          if (res.data.msg === "ok") {
            let cities = res.data.data.cities;
            let citiesList = this.formatCitesList(cities);
            console.log(citiesList);
            this.citiesList = citiesList.citiesList;
            this.hotcities = citiesList.hotCites;
            localStorage.setItem("citiesList",JSON.stringify(citiesList.citiesList));
            localStorage.setItem("hotcities",JSON.stringify(citiesList.hotCites));
          }
        });
      }
    },
    methods:{
      formatCitesList(cities){
        let citiesList=[];
        let hotCites=[];
        // 整理后的城市列表格式[{index:'B',list:[{id:1,nm:'北京',py:'beijing',isHot:1},{id:2，nm:'包头',py:'baotou',isHot:0}...]}]
        for (var i=0;i<cities.length;i++){
          let firstLetter = cities[i].py.substring(0,1).toUpperCase();
          if (needToAdd(firstLetter)){ // 首字母在citiesList中不存在，所以新增
            citiesList.push({index:cities[i].py.substring(0,1).toUpperCase(),list:[cities[i]]})
          }else{ // 首字母在citiesList中已存在，所以要遍历到一项，并添加上去
            for (var j=0;j<citiesList.length;j++){
              if (citiesList[j].index===firstLetter){
                citiesList[j].list.push(cities[i])
              }
            }
          }
          function needToAdd(firstLetter){ // citiesList中是否有首字母已存在的
            for (var j=0;j<citiesList.length;j++){
              if (citiesList[j].index===firstLetter){
                return false
              }
            }
            return true
          }
        }
        // index按A-Z排序
        citiesList.sort((x1,x2)=>{
          if (x1.index>x2.index){
            return 1
          }else if(x1.index<x2.index){
            return -1
          }else{
            return 0
          }
        });
        // list中按城市拼音A-Z排序
        citiesList.forEach((item)=>{
          item.list.sort((x1,x2)=>{
            if (x1.py>x2.py){
              return 1
            }else if(x1.py<x2.py){
              return -1
            }else{
              return 0
            }
          })
        });
        // 热门城市
        for (var index=0;index<cities.length;index++){
          if (cities[index].isHot===1){
            hotCites.push(cities[index])
          }
        }
        return {
          citiesList,
          hotCites
        }
      },
      goToIndex(index){
        let dis = this.$refs.city[index].offsetTop-46-50;
        console.log(dis);
        this.$refs.citylist.toScrollTop(-dis);

      },
      changeLocation(id,nm){
        this.$store.commit('city/CITY_INFO',{id:id,nm:nm});
        localStorage.setItem('currentCity',JSON.stringify({id:id,nm:nm}));
        this.$router.push('movie/playing');
      }
    }
  };
</script>

<style scoped lang="scss">
    .main {
        background-color: #fff5f0;
        display: flex;
        height: 100%;
        .city-left {
            overflow: auto;
            .hot {
                h2 {
                    background-color: #f0f0f0;
                    line-height: 30px;
                    font-size: 14px;
                    text-indent: 5px;
                }
                div {
                    ul {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        padding: 10px;
                        li {
                            width: 27%;
                            line-height: 33px;
                            background-color: #fff;
                            text-align: center;
                            border: 1px solid #e6e6e6;
                            margin: 10px;
                        }
                    }

                }
            }
            .city {
                h2 {
                    background-color: #f0f0f0;
                    line-height: 30px;
                    font-size: 14px;
                    text-indent: 5px;
                }
                ul {
                    li {
                        line-height: 33px;
                        font-size: 14px;
                        text-indent: 5px;
                    }
                }
            }
        }
        .city-right {
            height: 100%;
            .sort {
                height: 100%;
                text-align: center;
                right: 0;
                background-color: rgba(255, 255, 255, 0.4);
                ul {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 10px 0;
                    li {
                        font-size: 14px;
                        margin-bottom: 2px;
                    }
                }
            }
        }
    }
</style>