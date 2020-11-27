<template>
    <div class='home'>
        <main-center />
        <div class="bg" />
        <div class="beian">沪ICP备20010493号</div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import mainCenter from "../../components/center/center";
  export default Vue.extend({
    name: "home",
    components:{mainCenter}
  })
</script>

<style scoped lang='less'>
.home{
    width: 100%;
    height: 100%;
    z-index: 5;
    .bg{
        width: 100%;
        height: 100%;
        animation: change 15s infinite;
        background: linear-gradient(125deg,#2980b9,#633bd3,#8e44ad,#192f44,#27ae60);
        background-size: 800%;
        z-index: -99;
        position: absolute;
        left: 0;
        top: 0;
    }
}
    @keyframes change {
        0%{
            background-position-x: 0;
        }
        50%{
            background-position-x: 100%;
        }
        100%{
            background-position-x: 0;
        }
    }
.beian {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 16px;
}
@media screen and (max-width: 700px) {
    .beian {
        font-size: 15px !important;
    }
}
</style>
