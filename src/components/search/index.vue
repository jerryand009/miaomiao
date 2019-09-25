<template>
    <div class="main">
        <div class="search">
            <span class="iconfont icon-sousuo"></span>
            <input type="text" value="">
        </div>
        <div class="result">
            <ul>
                <li>
                    <div class="movieItem">
                        <div class="pic">
                            <img src="http://p0.meituan.net/128.180/movie/dfaf2fc4169522642294fae240d35f522332427.jpg" alt="">
                        </div>
                        <div class="info">
                            <h2>友情至上</h2>
                            <p>Friend Zone</p>
                            <p>剧情 爱情</p>
                            <p>2019-9-20</p>
                        </div>
                        <div class="score">
                            <span>9.2</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="movieItem">
                        <div class="pic">
                            <img src="http://p0.meituan.net/128.180/movie/7c47821fcd6e0aadfe44d24a1fbf61ba2576528.jpg" alt="">
                        </div>
                        <div class="info">
                            <h2>徒手攀岩</h2>
                            <p>Free Solo</p>
                            <p>纪录片</p>
                            <p>2019-09-06</p>
                        </div>
                        <div class="score">
                            <span>8.7</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="scss">
    .main {
        .search {
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
                            }
                            p {
                                flex: auto;
                                color: #666;
                                font-size: 13px;
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