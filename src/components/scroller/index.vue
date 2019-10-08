<template>
    <div class="scrollContainer" ref="scrollContainer">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "index",
        props:{
          handleScroll:{
            type:Function,
            default:function(){},
          },
          handleScrollEnd:{
            type:Function,
            default:function(){},
          }
        },
        data(){
          return {}
        },
        mounted(){
            this.$nextTick(()=>{
                let scroll = new BScroll(this.$refs.scrollContainer,{
                    tap:true,
                    probeType:1,
                });
                this.scroll = scroll;
                scroll.on('scroll',(position)=>{
                    this.handleScroll(position,scroll);
                });
                scroll.on('scrollEnd',(position)=>{
                    this.handleScrollEnd(position,scroll);
                });
            });
        },
        methods:{
            toScrollTop(y){
              this.scroll.scrollTo(0,y);
            }
        }
    };
</script>

<style scoped>
    .scrollContainer {
        height: 100%;
        width: 100%;
    }
</style>