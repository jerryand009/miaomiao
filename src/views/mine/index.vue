<template>
    <div class="main">
        <AppHeader title="我的喵喵"></AppHeader>
        <div class="content">
            <form action="">
                <input type="text" placeholder="账户名/手机号/Email">
                <input type="text" placeholder="请输入您的密码">
                <input type="submit" value="登陆">
            </form>
            <p class="reg"><span>立即注册</span><span>找回密码</span></p>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from '@/components/header'
    import AppFooter from '@/components/footer'

    export default {
        name: 'mine',
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>

<style scoped lang="scss">
    .main {
        .content {
            padding-top: 50px;
            padding-bottom: 50px;
            form {
                padding: 5px;
                width: 100%;
                input {
                    border: none;
                    border-bottom: 2px solid #ccc;
                    width: 100%;
                    height: 40px;
                    text-indent: 5px;
                    &[type="submit"] {
                        border: none;
                        border-radius: 5px;
                        margin-top: 5px;
                        color: #fff;
                        background-color: $baseColor;
                    }
                }
            }
            .reg {
                display: flex;
                justify-content: space-between;
                span {
                    color: $baseColor;
                    font-size: 14px;
                }
            }
        }
    }
</style>