<template>
    <div class='articleList'>
        <Header />
        <div class="list">
            <ul class="monUl" v-for="item in articleList">
                <li class="monTitle">{{item[0].month}},{{item[0].year}}</li>
                <ul class="mContent fadeInUp" v-for="thunk in item" :key="thunk.id">
                    <li class="mCli">
                        <div class="mCLeft">
                            <img :src="thunk.imgUrl" alt="">
                            <div class="mCLText">
                                <span>{{thunk.title}}</span>
                                <span>{{thunk.linkNum}}</span>
                            </div>
                        </div>
                        <div class="mCRight">{{thunk.day}}</div>
                    </li>
                </ul>
            </ul>
        </div>
        <div class="footer">
            <LoadMore />
            <span class="noMore">没有更多了~~(*^▽^*)</span>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import Header from '../../components/header/header.vue'
    import LoadMore from '../../components/loadMore/loadMore.vue'
    const list = [
        [{
            "createdAt": "2020-11-02 15:16:11",
            "updatedAt": "2020-11-11 14:18:21",
            "id": 57,
            "userId": 1,
            "title": "windows系统如何安装mysql？",
            "imgUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1604301333317-wts7tv.jpg",
            "musicUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1604301347792-gbs9op.mp3",
            "musicName": "悠悠琴韵 - 告白之夜（钢琴版）",
            "description": "本文给出完整教程！",
            "visitsNum": 397,
            "likeNum": 18,
            "classifyId": null,
            "index": 0,
            "year": "2020",
            "month": "11",
            "day": "2"
        }],
        [{
            "createdAt": "2020-10-30 11:19:33",
            "updatedAt": "2020-11-10 23:02:03",
            "id": 55,
            "userId": 1,
            "title": "nginx 安装 并 配置gzip和br",
            "imgUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1604027773572-djh4fm.jpg",
            "musicUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1604027922203-as0u0b.mp3",
            "musicName": "赵海洋 - 夜空的寂静.mp3",
            "description": "折腾了很久，终于搞定了。。。",
            "visitsNum": 244,
            "likeNum": 7,
            "classifyId": null,
            "index": 0,
            "year": "2020",
            "month": "10",
            "day": "30"
        }, {
            "createdAt": "2020-10-18 18:37:31",
            "updatedAt": "2020-11-11 09:51:43",
            "id": 54,
            "userId": 1,
            "title": "Vue3.0",
            "imgUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1603017313008-xznr7v.jpg",
            "musicUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1603017301919-zo59s4.mp3",
            "musicName": "Falcom Sound Team jdk - 千年の妄执",
            "description": "Vue3.0尝鲜，体验一下最爱的新版前端框架(●ˇ∀ˇ●)",
            "visitsNum": 320,
            "likeNum": 11,
            "classifyId": null,
            "index": 0,
            "year": "2020",
            "month": "10",
            "day": "18"
        }, {
            "createdAt": "2020-10-18 11:41:29",
            "updatedAt": "2020-11-11 13:43:43",
            "id": 52,
            "userId": 1,
            "title": "ES6",
            "imgUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1602992406446-ahhno1.jpg",
            "musicUrl": "http://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1602992417008-b3y1pe.mp3",
            "musicName": "Falcom Sound Team jdk - 絆の在り処",
            "description": "ES6思维导图",
            "visitsNum": 206,
            "likeNum": 9,
            "classifyId": null,
            "index": 0,
            "year": "2020",
            "month": "10",
            "day": "18"
        }],
        [{
            "createdAt": "2020-08-18 22:21:01",
            "updatedAt": "2020-11-11 09:52:10",
            "id": 48,
            "userId": 1,
            "title": "记ElementUi Backtop的坑",
            "imgUrl": "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1597759336322-22uw84.jpg",
            "musicUrl": "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1597759315320-tyuq18.mp3",
            "musicName": "所念皆星河",
            "description": "我按文档来使用backtop组件，一直出不来，各种查阅后看了源码之后才明白。。",
            "visitsNum": 563,
            "likeNum": 18,
            "classifyId": null,
            "index": 0,
            "year": "2020",
            "month": "08",
            "day": "18"
        }, {
            "createdAt": "2020-08-17 17:25:19",
            "updatedAt": "2020-11-10 23:02:52",
            "id": 36,
            "userId": 1,
            "title": "Web Socket实现聊天全过程",
            "imgUrl": "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1597656311143-357ku9.jpg",
            "musicUrl": "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1597656174712-fl9iph.mp3",
            "musicName": "渐渐被你吸引",
            "description": "用uni-app开发小程序中使用到的websocket",
            "visitsNum": 373,
            "likeNum": 10,
            "classifyId": null,
            "index": 0,
            "year": "2020",
            "month": "08",
            "day": "17"
        }],
        [{
            "createdAt": "2020-07-17 22:45:34",
            "updatedAt": "2020-11-11 13:34:16",
            "id": 47,
            "userId": 1,
            "title": "包管理器",
            "imgUrl": "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1597674440023-lqmqrr.jpg",
            "musicUrl": "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/1597674398573-xv2cq9.mp3",
            "musicName": "Falcom Sound Team jdk - 夢の続き",
            "description": "Node包管理器（npm）是一个有Node.js官方提供的第三方包管理工具。在前端模块化的情况下，这是个人人都要会的东西~",
            "visitsNum": 240,
            "likeNum": 8,
            "classifyId": null,
            "index": 0,
            "year": "2020",
            "month": "07",
            "day": "17"
        }]
    ]
    export default Vue.extend({
        name: "articleList",
        components:{
            Header,
            LoadMore
        },
        data(){
            return{
                list
            }
        },
    })
</script>

<style scoped lang='less'>
.articleList{
    display: flex;
    align-items: center;
    flex-direction: column;
    .list{
        width: 640px;
        padding: 80px 0 0;
        .monUl{
            .monTitle{
                color: #6e7ab5;
                font-weight: 400;
                font-size: 18px;
                margin: 30px 0 10px;
                position: relative;
                &::before{
                    content: '';
                    width: 12px;
                    height: 12px;
                    display: inline-block;
                    background-color: #dce8ec;
                    border: 3px solid #afcfff;
                    margin-right: 22px;
                    border-radius: 50%;
                    box-sizing: border-box;
                }
            }
            .mContent{
                padding-left: 30px;
                border-left: 1px solid #f3fafd;
                margin-left: 6px;
                .mCli{
                    padding: 25px 0;
                    border-bottom: 1px solid #f3fafd;
                    display: flex;
                    justify-content: space-between;
                    .mCLeft{
                        display: flex;
                        align-items: center;
                        img{
                            flex-shrink: 0;
                            width: 45px;
                            height: 45px;
                            border-radius: 4px;
                            margin-right: 15px;
                            overflow: hidden;
                            cursor: pointer;
                            border: 1px solid #f3fafd;
                        }
                        .mCLText{
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            span:nth-child(1){
                                color: #5b6773;
                                cursor: pointer;
                                font-size: 15px;
                                padding-bottom: 10px;
                                transition: all .6s;
                            }
                            span:nth-of-type(odd):hover{
                                text-decoration: none;
                                background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='blue' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E") repeat-x 0 100%;
                                background-size: 20px auto;
                                animation: waveMove 1s infinite linear;
                            }
                            span{
                                color: #a1a0d6;
                                font-size: 13px;
                                letter-spacing: 0;
                            }
                        }
                    }
                    .mCRight{
                        color: #d2c6a3;
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                    }
                }
            }
        }
    }
    .footer{
        height: 40px;
        margin-bottom: 40px;
        .noMore{
            padding: 20px 0 0;
            color: #909090;
            letter-spacing: 2px;
            transition: all .3s;
            border-radius: 4px;
            text-align: center;
            display: inline-block;
            width: 100%;
        }
    }
}
    @media screen and (max-width: 700px){
        .list{
            width: 100%;
            padding: 80px 20px 20px;
        }
    }
</style>
