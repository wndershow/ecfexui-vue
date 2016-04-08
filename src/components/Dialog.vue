<template>
    <div class="ex-dialog">
        <div class="ex-dialog-main">
            <div class="ex-dialog-hd ex-cf  ex-bd-bottom">
                <div class="ex-fl ex-padding-v-xs ex-padding-left-s">这里是标题</div>
                <div class="ex-fr ex-padding-v-xs ex-padding-right-xs">
                    <a href="#"><i class="ex-icon ex-icon-guanbi"></i></a>
                </div>
            </div>
            <div class="ex-dialog-bd ex-padding">
                body
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Dialog'
    }
</script>

<style>

    .ex-dialog{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.7);
        z-index: 101;
        height: 100%;
    }

    .ex-dialog-main{
        left: 0;
        z-index: 100;
        position: fixed;
        background-color: #fff;
        width: 100%;
        bottom: 0;
    }

</style>
