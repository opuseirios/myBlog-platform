<template>
    <div class='wrapper'>
        <div class="setting">
            <div class="title"><span/>个人信息设置</div>
            <a-form class="form" ref="form" :model="form" :rules="rules">
                <a-form-item label="头像" require name="avatar">
                    <div class="upload" v-if="!filelink">
                        <div class="cover">
                            <PlusOutlined/>
                            <p class="text">上传图片</p>
                        </div>
                        <input type="file" accept="images/*" @change="handleChange($event)"/>
                    </div>
                    <div class="img" v-if="filelink">
                        <img :src="filelink" alt="">
                    </div>
                    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                        <img alt="example" style="width: 100%" :src="previewImage"/>
                    </a-modal>
                </a-form-item>
                <a-form-item label="姓名">
                    <a-input v-model:value="form.username" :disabled="true"/>
                </a-form-item>
                <a-form-item label="性别">
                    <a-select v-model:value="form.sex">
                        <a-select-option value="m">男</a-select-option>
                        <a-select-option value="f">女</a-select-option>
                        <a-select-option value="x">保密</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="个人简介" require name="summary">
                    <a-textarea placeholder="请输入" v-model:value="form.summary"/>
                </a-form-item>
                <a-button class="update" type="primary" @click="updateInfo">更新</a-button>
            </a-form>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import api from '../../api'
    import {pressImage} from "../../utils";


    export default Vue.extend({
        name: "setting",
        data() {
            return {
                filelink: '',
                previewVisible: false,
                previewImage: '',
                form: {
                    avatar: '',
                    sex: 'm',
                    summary: '',
                    username: ''
                },
                rules: {
                    summary: [
                        {required: true, message: '请填入summary'}
                    ],
                    birthday: [
                        {required: true, message: '请选择生日'}
                    ],
                    avatar: [
                        {
                            required: true, message: '请上传头像'
                        }
                    ]
                },
            }
        },
        methods: {
            async handleChange($event: any) {
                const file = $event.target.files[0]
                const base64 = await pressImage(file)
                const filename = file.name;
                const res = await api.uploadAvatar({
                    filename,
                    base64
                })
                //@ts-ignore
                this.$$rvalid(res)
                this.filelink = base64 as string;
                this.form.avatar = filename;
            },
            handleCancel() {
                this.previewVisible = false;
            },
            handlePreview() {
                this.previewVisible = true;
            },
            async getInfo() {
                const res = await api.personInfo()
                //@ts-ignore
                this.$$rvalid(res)
                console.log(res)
                this.form = res.data;

                //@ts-ignore
                this.fileList = [res.data.filelink]
                this.filelink = res.data.filelink
            }
        },
        created() {
            this.getInfo();
        }
    })
</script>

<style scoped lang='less'>
    .wrapper {
        width: 100%;
        height: 100%;
        background: #f8fbff;
    }

    .setting {
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 70px;

        .title {
            display: flex;
            align-items: center;
            color: #2c80f7;
            font-size: 18px;
            height: 26px;

            span {
                width: 2px;
                height: 100%;
                background: #3c8af7;
                margin-right: 20px;
            }
        }

        .form {
            margin-top: 40px;
        }

        /deep/ .ant-form-item-label {
            flex: 0 0 80px;
            margin-right: 10px;
        }

        /deep/ .ant-form-item-control-wrapper {
            flex: 1;
            max-width: 400px;
        }

        .update {
            margin-left: 90px;
        }
    }

    @media screen and (max-width: 700px) {
        .setting {
            padding: 20px;
        }

        /deep/ .ant-form-item-label {
            flex: 0 0 60px;
            margin-right: 10px;
        }
    }

    .upload {
        width: 100px;
        height: 100px;
        border: 1px dashed rgba(0, 0, 0, .15);
        border-radius: 2px;
        position: relative;
        box-sizing: border-box;

        .cover {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 100%;

            i {
                font-size: 18px;
                color: rgba(0, 0, 0, .45);
                font-weight: 600;
            }

            .text {
                margin-top: 12px;
                font-size: 14px;
                color: rgba(0, 0, 0, .65);
                line-height: 22px;
            }
        }

        input {
            position: absolute;
            left: 0;
            top: 0;
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }

    .img {
        display: inline-block;
        width: 100px;
        height: auto;
        border-radius: 2px;

        img {
            width: 100%;
            height: auto;
        }
    }
</style>
