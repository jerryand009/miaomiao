<template>
    <div class="movieList">
        <ul>
            <li>
                <div class="movieItem">
                    <div class="pic">
                        <img src="http://p0.meituan.net/128.180/movie/d5bc40a51534c26acbafd49c1dc484e24634457.jpg"
                             alt="">
                    </div>
                    <div class="info">
                        <h2>决胜时刻</h2>
                        <p>观众评分&nbsp;<span>9.2</span></p>
                        <p>主演: 唐国强,刘劲,黄景瑜</p>
                        <p>今天222家影院放映1648场</p>
                    </div>
                    <div class="btnBuy">
                        <input type="button" value="预告"/>
                    </div>
                </div>
            </li>
            <li>
                <div class="movieItem">
                    <div class="pic">
                        <img src="http://p0.meituan.net/128.180/movie/c5975d98fc484027ff55d813ab3b2daa427032.jpg"
                             alt="">
                    </div>
                    <div class="info">
                        <h2>小Q</h2>
                        <p>观众评分&nbsp;<span>9.2</span></p>
                        <p>主演: 任达华,梁咏琪,罗仲谦</p>
                        <p>今天217家影院放映1146场</p>
                    </div>
                    <div class="btnBuy">
                        <input type="button" value="预告"/>
                    </div>
                </div>
            </li>
            <li>
                <div class="movieItem">
                    <div class="pic">
                        <img src="http://p0.meituan.net/128.180/moviemachine/b2c5c74d33e45745fd3462e44b3698e18336620.jpg"
                             alt="">
                    </div>
                    <div class="info">
                        <h2>我和我的祖国<img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAcCAYAAAD7lUj9AAAAAXNSR0IArs4c6QAABqJJREFUaAXtWmlMVFcUPrMCMjigDCM6CkpRiqDWfW2sodpi2mpImjZN1ajdTJrYP60/2vRXTZp0t2l/dYmJtWqtTdxSBRXXigpYFUU2hWGQdUB2mKXnu/Kmj8dsFIhtnZNMuO++e8+997tn+c4wKmLJ2pk/1+1y7He7yeImtxp9IRkcAnqNuoln5Ljdunf2rZ9VrQKoLqfj4sMG9MCG+YM7yb9stL2zl06UNvTuvWprc7u06VphqSErHfI1xUToKCs9XseKDHsLqz9Xw/2HrDWkwIPAisdidSqVKkP9sEOAZ0f/kwYst9vhjAklqhG60BCwIWBHCIERUqsNpFerVhEHZEocM4qcLjdVNHXQ6fJGcnAbkhJnoCn8ThJ017Z1k7W5k+rbe6TuIf3N5fVcnGWfSooVek6WNVBnr4vmT4ym2Ei9T905pQ0c71y0KCGGEPvkUtPaTQXVLWQM19KSxDHyV1TS0C4+E43hlB4/ut+7HqeLsksaiGGhp6eaSKPihhfxCywW3Z6ZSuNHh/NBnEKJXqumtWnx9N7hIurgvgWTYmgNP3uTQlsLfXOuYsgA77tqIxxIAnZ3QTXVi8sz0+sLE7wtLYD5+my5eJcQEzEA2F/+tNGJknrSMEJp40YLgCVFcYYw+ij7NnXxpXzxQhqNiwqTXtHOy1V0+GYtZc0Y7xNUDPYbY19bmChA/fZ8Ba3/OZ/W8efAtRqyREfQc9PHeRZD4/2jN+mVn67Qxj0FtI1Bx8anm6Po0+fTKCrM7/310zOYB1huR4/T65RDRfe89qMTgJ2/0yTOBi88yZYtFxjUliWTkd3pK76cB75JdP1eKx25VUdJYyPp5ScmyKcMaPsEFqaeym5e0tBGx27XU6/TLdzqaHGtUBIvu0V0wKJxSFQgxfVttCvfSp/klgpQA21iwK6C6ICldfGax9nqlII9nL9jF9aofIfnsxWNYu6GeZMonr0xp3SgDoSZjGQT3axtpYM37onL2HGunPQaFW19MsmvtWINn8AiVm7cW0jvHirCOI/MjDeKdhEvGEjyKpvprr1DhItAYwf73hQZRlNNBjrCbtkX7j0qjrJVOTkmL1bETmlANl+GMVxHsy1GWs5xG/kAxqCUTQsSyMwGtKvASp/lllEdx+V1cyeRhWNvIPEJrHLiZl7k49Wp9MaiBPrteg3BDYMRa0sXjRml55sOeqlg1Ioxqx83Ux3H2rxKu2cOPOv34jqayUnHYozw9EsN7Ke4ro2WTRkrrA7AQrLZK5USzvlk67IkcrDOS1V2vohoykyJUw7z+hz0aeMMepGB1ZwFARLYQjDS3u0QwwxhmmCGD2oMLDKGL+2gLJ6eZje/39VLq1PNXnXBWiESoDhXKueCcxxzEXuVEs1sQtdnFCY/DEQ5L2hgt+eU0CYODV+eKadMtpQXZ/oP3tJCJs6wPbzhpo5eqWvY/uJyVzHlQVgqZxoIOcwgI27OYetSCsJDLntapF5LdzhEgY7hY2TwkCMArlwQYnBeMBLQTXhCPlO0YMQnsKAYby1KpKWT+3O8M8wpmzk5zOPgHkgMeg1NjY0ka0tnoKH/+P2qaXHCosACbnDWBs/OTDGTN3+6XNUs9t7e4yBQMelzoQ/QHEUi/PWajW7VtRJCzgcZ0yiS2c0Onne/zwv9bdonD2phd8pga5jLAIKaSAkCwRx0xHa/y59eitCp6c3Fk8Vm9jFdGymBqyIknK1oolpOLhE6Da1IfhA3lWsiDCCU7Vibzry2f2GBjA+AcS7w9rLGDtpTaBPtV+dYRPjbPD+BLbhMcPNtK5KV6vs9+wQWlc0xNv1n+PY/XJlCp9iFUOWApPPXYoIkyzXhEuzs7iggYO0g3Tg0DvPH3b+Ti3zOcLVhUXBxhASEqVEMrlJAwVBppXFSA3BKQXUJYLHfl2ZZBICo9t5eOsWTeJcnjaULd5voIifL45zsUHn5Ep/AYsJ3eZXCUldOM9GMvtIOYQAuBCuWy7N8ARAQbpS04L+ISVeswcUkua7BtpM53IB6oRQFyN6Ev90XewM43mT2hGhBwU6VNTJfd1MVUzBUlCjZ5bKFvfAWs4rvL1WKcldelcnHqdb8wP+VCSAgxeaocEGqh6v+Vy75X//XjPw8a3/MI78WKw3uYR6HGwxJ8Aj4ZAXBqwiN9IZACFhvqAxDH1Ns1cByYxgUP6oqwD7CtBo7aJ31UQVhJM6N3xa43e5stUqtzQpZ7dAhhqXuv1bz4Acb/GsYUfmFfmI0dGDh/rBU6SdGfwHhesSi+VnXOAAAAABJRU5ErkJggg=="
                                alt=""></h2>
                        <p>观众评分&nbsp;<span>0</span></p>
                        <p>主演: 黄渤,张译,杜江</p>
                        <p>2019-09-30 下周一上映</p>
                    </div>
                    <div class="btnBuy">
                        <input type="button" value="预告"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "comming"
    }
</script>

<style scoped lang="scss">
    .movieList {
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
                        width: 64px;

                        img {
                            width: 100%;
                        }
                    }

                    .info {
                        flex: auto;
                        text-indent: 10px;
                        display: flex;
                        flex-direction: column;

                        h2 {
                            flex: auto;
                            font-weight: bold;
                            display: flex;
                            justify-content: space-between;

                            img {
                                width: 50px;
                                height: 16.27px;
                            }
                        }

                        p {
                            flex: auto;
                            color: #666;
                            font-size: 13px;

                            span {
                                font-weight: bold;
                                color: #faaf00;
                            }
                        }
                    }

                    .btnBuy {
                        display: flex;
                        align-items: center;

                        input {
                            width: 47px;
                            height: 27px;
                            border: none;
                            border-radius: 5px;
                            padding: 0;
                            background-color: #3c9fe6;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>