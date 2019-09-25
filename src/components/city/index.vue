<template>
    <div class="main">
        <div class="hot">
            <h2>热门城市</h2>
            <div>
                <ul>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>深圳</li>
                    <li>珠海</li>
                    <li>惠州</li>
                    <li>佛山</li>
                </ul>
            </div>
        </div>
        <div class="city">
            <div>
                <h2>A</h2>
                <ul>
                    <li>阿拉善盟</li>
                    <li>鞍山</li>
                    <li>安庆</li>
                    <li>安阳</li>
                    <li>阿坝</li>
                    <li>安顺</li>
                    <li>安康</li>
                    <li>阿勒泰</li>
                    <li>阿克苏</li>
                    <li>安吉</li>
                    <li>安丘</li>
                    <li>安岳</li>
                    <li>安平</li>
                    <li>安宁</li>
                    <li>安溪</li>
                    <li>安化</li>
                    <li>阿勒泰市</li>
                    <li>安福</li>
                    <li>阿荣旗</li>
                    <li>安陆市</li>
                    <li>安州区</li>
                    <li>阿城区</li>
                </ul>
            </div>
            <div>
                <h2>B</h2>
                <ul>
                    <li>北京</li>
                    <li>保定</li>
                    <li>蚌埠</li>
                    <li>包头</li>
                    <li>本溪</li>
                    <li>巴彦淖尔</li>
                    <li>白城</li>
                    <li>白山</li>
                    <li>亳州</li>
                    <li>滨州</li>
                    <li>巴中</li>
                    <li>北海</li>
                    <li>百色</li>
                    <li>毕节</li>
                    <li>保山</li>
                    <li>宝鸡</li>
                    <li>白银</li>
                    <li>巴州</li>
                    <li>博尔塔拉</li>
                    <li>滨海</li>
                    <li>宝应</li>
                    <li>北流</li>
                    <li>博爱</li>
                    <li>北碚</li>
                    <li>宝丰</li>
                    <li>泌阳</li>
                    <li>博兴</li>
                    <li>博山</li>
                    <li>璧山</li>
                    <li>彬县</li>
                    <li>宾阳</li>
                    <li>博白县</li>
                    <li>博罗县</li>
                    <li>北镇市</li>
                    <li>泊头市</li>
                    <li>北安市</li>
                    <li>巴彦县</li>
                </ul>
            </div>
        </div>
        <div class="sort">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>I</li>
                <li>J</li>
                <li>K</li>
                <li>L</li>
                <li>M</li>
                <li>N</li>
                <li>O</li>
                <li>P</li>
                <li>Q</li>
                <li>R</li>
                <li>S</li>
                <li>T</li>
                <li>U</li>
                <li>V</li>
                <li>W</li>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city"
    }
</script>

<style scoped lang="scss">
.main {
    background-color: #fff5f0;
    .hot {
        h2 {
            background-color: #f0f0f0;
            width: 100%;
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
            width: 100%;
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
    .sort {
        width: 20px;
        height: 100%;
        text-align: center;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
        background-color: rgba(255,255,255,0.4);
        display: flex;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            li {
                font-size: 14px;
            }
        }
    }
}
</style>