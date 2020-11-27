<template>
    <div class='login'>
        <LoginBg/>
        <div class="form">
            <div class="form-inner">
                <h1>登录</h1>
                <div class="form-control">
                    <input
                            type="text"
                            name="username"
                            id="username"
                            v-model="user.username"
                            placeholder=" "
                    />
                    <label for="username">账号</label>
                </div>
                <div class="form-control">
                    <input
                            type="password"
                            id="password"
                            v-model="user.password"
                            placeholder=" "
                    />
                    <label for="password">密码</label>
                </div>
                <button type="submit" class="btn" @click="login">登录</button>
                <div class="msg">如未注册，登录即注册</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import LoginBg from '../../components/loginBg/loginBg.vue'
    import api from '../../api'
    import {Message} from "element-ui";
    import {mapMutations} from "vuex";

    export default Vue.extend({
        name: "login",
        components: {LoginBg},
        data(){
          return{
              user:{
                  username:'',
                  password:''
              }
          }
        },
        methods:{
            async login() {
                if (!this.user.username || !this.user.password) {
                    Message.warning('请输入用户名或密码')
                    return
                }
                const res = await api.login(this.user)
                //@ts-ignore
                this.$$rvalid(res)
                localStorage.setItem('token', res.data.token)
                const infoRes = await api.personInfo();
                //@ts-ignore
                this.$$rvalid(infoRes)
                const info = infoRes.data;
                this.setUserInfo(info)
                if(info.avatar && info.summary){
                    this.$router.push('/articleList')
                }else {
                    this.$router.push('/setting')
                }
            },
            ...mapMutations({
                setUserInfo:'SET_USER_INFO'
            })
        }
    })
</script>

<style scoped lang='less'>
    .login {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .form {
            width: 600px;
        }
    }

    @media screen and (max-width: 700px) {
        .form {
            width: 90% !important;
        }
    }

    .form-control {
        --default-color: currentColor;
        --invalid-color: #e74c3c;
        --valid-color: #3498db;
        --border-bottom-color: currentColor;

        position: relative;
        border-bottom: 1px solid var(--border-bottom-color);

        &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 2px;
            background: var(--valid-color);
            transform: scaleX(0);
            transform-origin: left;
            transition: 0.3s;
        }

        &:focus-within::after {
            transform: scaleX(1);
        }

        .code {
            position: absolute;
            right: -100px;
            top: -16px;
        }

        input {
            padding: 8px 0;
            font-size: inherit;
            font-weight: inherit;
            color: currentColor;
            background: transparent;
            border: none;
            outline: none;

            &:invalid ~ label {
                color: var(--invalid-color);
            }

            &:valid ~ label {
                color: var(--valid-color);
            }

            &:placeholder-shown ~ label {
                color: var(--default-color);
            }

            &:focus ~ label,
            &:not(:placeholder-shown) ~ label {
                transform: translateY(-120%) scale(0.75);
            }
        }

        label {
            position: absolute;
            top: 8px;
            left: 0;
            transition: 0.3s;
            transform-origin: left;
        }
    }

    .btn {
        position: relative;
        width: 60%;
        padding: 6px 0;
        font-size: 16px;
        color: currentColor;
        background: transparent;
        border: 2px solid hsla(204, 70%, 53%, 1);
        outline: none;
        cursor: pointer;
        overflow: hidden;
        transition: 0.6s;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg,
            transparent,
            hsla(204, 70%, 53%, 0.5),
            transparent);
            transform: translateX(-100%);
            transition: 0.6s;
        }

        &:hover {
            box-shadow: 0 0 20px 10px hsla(204, 70%, 53%, 0.5);
        }

        &:hover::before {
            transform: translateX(100%);
        }
    }

    .form-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        padding: 100px 60px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109),
        0 1px 1px rgba(128, 128, 128, 0.155),
        0 2.1px 2.1px rgba(128, 128, 128, 0.195),
        0 4.4px 4.4px rgba(128, 128, 128, 0.241),
        0 12px 12px rgba(128, 128, 128, 0.35);

        h1 {
            margin: 0 0 24px 0;
            font-size: 36px;
            color: #fff;
        }

        .form-control {
            margin: 18px 0;
        }

        .btn {
            width: 60%;
            margin: 18px 0 9px 0;
        }

        .msg {
            margin-top: 10px;
        }
    }

    .handleTips {
        margin-top: 26px;
        letter-spacing: 2px;

        span {
            cursor: pointer;
            color: #007fff
        }
    }

    @media screen and ( max-width: 600px ) {
        .form-inner {
            padding: 26px 20px !important;

            h1 {
                margin: 0 0 24px 0;
                font-size: 24px;
            }
        }

        .form-control {
            width: 40vw;
            margin: 18px 0;
        }

        .code {
            width: 80px;
            right: -80px !important;
            top: -5px !important;
        }

        .btn {
            width: 100% !important;
        }
    }
</style>
