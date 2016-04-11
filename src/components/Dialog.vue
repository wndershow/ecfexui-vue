<template>
    <div class="ex-dialog" v-if="outerShow">
        <div v-show="show" class="ex-dialog-main animated slideInUp" transition="slide">
            <div class="ex-dialog-hd ex-cf">
                <div class="ex-fl ex-padding-v-xs ex-padding-left-s">这里是标题</div>
                <div class="ex-fr ex-padding-v-xs ex-padding-right-xs">
                    <a @click.stop="close" href="#"><i class="ex-icon ex-icon-guanbi"></i></a>
                </div>
            </div>
            <div class="ex-dialog-bd ex-padding">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Dialog',
        props: {
            onClose : {
                type : Function,
                default:function(){}
            }
        },
        data:function(){
            return {
                show:false,
                outerShow:false
            };
        },
        transitions:{
            slide:{
                enterClass:'slideInUp',
                leaveClass:'slideOutDown',
                afterLeave: function (el) {
                    this.outerShow = false;
                    this.onClose();
                }
            }
        },
        methods:{
            close(e){
                this.show = false;
            },
            open(){
                this.outerShow = true;
                this.show = true;
            }
        },
        watch:{
        }
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

    .ex-dialog:empty{
        display: none;
    }

    .ex-dialog-main{
        left: 0;
        z-index: 100;
        position: fixed;
        background-color: #fff;
        width: 100%;
        bottom: 0;
    }

    .ex-dialog-hd{
        border-bottom:1px solid #ddd;
    }

</style>
