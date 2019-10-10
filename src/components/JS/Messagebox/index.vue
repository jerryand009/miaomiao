<template>
    <div class="msgBox">
        <div class="header">{{title}}</div>
        <div class="body">{{content}}</div>
        <div class="footer">
            <span @touchstart="handleCancel">{{cancel}}</span>
            <span @touchstart="handleConfirm">{{confirm}}</span>
        </div>
    </div>
</template>

<script>
    export default {
      name:'msgbox'
    }
</script>

<style scoped lang="scss">
    .msgBox {
        width: 200px;
        height: 150px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        border: 2px solid #ccc;
        box-shadow: 2px 2px 5px #ccc;
        border-radius: 5px;
        .header {
            line-height: 40px;
            font-weight: bold;
        }
        .body {
            flex: 1;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .footer {
            flex: 1;
            display: flex;
            justify-content: space-between;
            span {
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>