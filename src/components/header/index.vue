<template>
    <header>
        <span>{{title}}</span>
    </header>
</template>

<script>
export default {
    name:'AppHeader',
    props: {
        title: {type:String,default:"喵喵电影"}
    }
}
</script>

<style scoped lang="scss">
header {
    width: 100%;
    line-height: 50px;
    background-color: $baseColor;
    font-weight: bold;
    color: #fff;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
}
</style>