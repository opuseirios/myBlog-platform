<template>
    <div class='loadMore'>
        <div class="inner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    export default Vue.extend({
        name: "loadMore"
    })
</script>

<style scoped lang='less'>
.loadMore{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .inner{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            width: 24px;
            height: 24px;
            background: #3ac;
            border-radius: 50%;
            animation: slide 1s infinite;
            display: inline-block;
            margin: 0 2px;
            &:nth-child(1){
                animation-delay: 0.1s;
                background: #32aacc;
            }
            &:nth-child(2){
                animation-delay: 0.2s;
                background: #64aacc;
            }
            &:nth-child(3){
                animation-delay: 0.3s;
                background: #96aacc;
            }
            &:nth-child(4){
                animation-delay: 0.4s;
                background: #c8aacc;
            }
            &:nth-child(5){
                animation-delay: 0.5s;
                background: #faaacc;
            }
        }
    }
}
    @keyframes slide {
        0%{
            transform: scale(1);
        }
        50%{
            opacity: .3;
            transform: scale(2);
        }
        100%{
            transform: scale(1);
        }
    }
</style>
