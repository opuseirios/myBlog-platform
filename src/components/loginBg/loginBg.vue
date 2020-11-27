<template>
    <div class='loginBg'>
        <div class="moon"></div>
        <div class="star" v-for="star in starArr"
             :style="{ left: star.left + 'px', top: star.top + 'px', animationDelay: star.animationDelay + 's' }"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "loginBg",
        data() {
            return {
                starArr: new Array(100).fill({left: 0, top: 0, animationDelay: 0})
            }
        },
        methods: {
            startPosition(array: any[]) {
                return array.map((item, index) => {
                    const left = Math.floor(Math.random() * window.innerWidth)
                    const top = Math.floor(Math.random() * window.innerHeight / 1.5)
                    const animationDelay = Math.floor(Math.random() * index)
                    return {left, top, animationDelay}
                })
            }
        },
        created() {
            this.starArr = this.startPosition(this.starArr)
        }
    })
</script>

<style scoped lang='less'>
    .loginBg {
        width: 100%;
        height: 100%;
        position: fixed;
        background-image: linear-gradient(to bottom,
        #1b2947,
        #2b3152,
        #3b385d,
        #4c4067,
        #5d4771);
        z-index: -99;

        .moon {
            position: absolute;
            top: 20px;
            right: 40px;
            width: 60px;
            height: 60px;
            background-color: #ffeaa7;
            border-radius: 50%;
            box-shadow: 0 0 20px #ffeaa7;
        }

        .star {
            position: absolute;
            width: 0;
            height: 0;
            opacity: .2;
            border: 2px solid transparent;
            border-bottom: 4px solid #fff;
            animation: blingbling 3s linear infinite;

            &::before {
                content: '';
                position: absolute;
                top: 4px;
                left: -2px;
                border: 2px solid transparent;
                border-top: 4px solid #fff;
            }
        }
    }

    @keyframes blingbling {
        20% {
            opacity: .2;
        }
        40% {
            opacity: .5;
        }
        60% {
            opacity: 1;
        }
        80% {
            opacity: .5;
        }
        100% {
            opacity: .2;
        }
    }
</style>
