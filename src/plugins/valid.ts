import {Message} from 'element-ui'
export default {
    install(Vue:any,options:any){
        Vue.prototype.$$assets = function (tar:any,msg:string) {
            if(!tar){
                Message.warning(msg)
                throw new Error(msg)
            }
        }
        Vue.prototype.$$rvalid = function (res:any) {
            this.$$assets(res.errorCode === 0, res.msg);
        }
    }
}
