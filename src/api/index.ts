import axios from './request'
import {LoginParams, UpdateParams} from "@/assets/types/login";

const prefix = '/api'

export default {
    //登录注册
    login:(para:LoginParams)=>axios.post('/user/login',para),
    //获取个人信息
    personInfo:()=>axios.get('/user/info'),
    // 更新
    updateInfo: (para: UpdateParams)=>axios.post('/user/update', para),
    //上传
    uploadAvatar: (para:any) => axios.post('/user/upload', para)
};
