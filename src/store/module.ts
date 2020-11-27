export const userModule = {
    state:{
        userInfo:{
            username: '',
            avatar: '',
            summary: '',
            sex: ''
        }
    },
    getters:{

    },
    mutations:{
        SET_USER_INFO(state:any,userInfo:any){
            state.userInfo = userInfo
        },
        CLEAR_USER_INFO(state:any){
            state.userInfo = {
                username: '',
                avatar: '',
                summary: '',
                sex: ''
            }
        }
    }
}
