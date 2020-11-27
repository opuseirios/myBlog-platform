<template>
    <div class='header' ref="header">
        <div class="left">
            <img src="../../assets/img/R.png" alt="" @click="backHome">
            <i class="iconfont icon-bofang"></i>
        </div>
        <div class="mid">{{text}}</div>
        <div class="right">
            <router-link to="{name:'self'}">
                <img src="" alt="">
            </router-link>
        </div>
        <div class="progressBar" />
        <div class="music-btn"></div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'

    export default Vue.extend({
        name: "main-header",
        props: ['text','src'],
        methods:{
            backHome(){
                this.$router.push('/')
            }
        }
    })
</script>

<style scoped lang='less'>
.header{
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #f6f7f8;
    align-items: center;
    justify-content: space-between;
    color: #666;
    padding: 0 15px;
    background: #fff;
    z-index: 99999;
    transition: all .3s;
    .left{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 30px;
            height: auto;
            opacity: .8;
            cursor: pointer;
            transition: all .2s;
            &:hover{
                animation: jump 1s infinite alternate;
            }
        }
        .iconfont{
            color: #888;
            margin-left: 20px;
            cursor: pointer;
            transition: all .2s;
            &:hover{
                color: #333;
            }
        }
    }
}
</style>
