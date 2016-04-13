<template>
    <div style="height: 100%;">

        <alert title="asdf" :show.sync="show">asdfasdf</alert>

        <div class="ex-fixed-bottom ex-padding-s ex-bg-white ex-bd-top ex-shadow">
            <button type="primary" @click="showAddPanel">添加项目</button>
        </div>

        <dialog v-ref:paneladd>

            <div>

                <div class="ex-bd-bottom ex-margin-bottom">
                    <input v-model="todo.title" type="text" placeholder="请输入项目名称" class="weui_input">
                </div>

                <div>
                    <ajax-btn url="/api/todos" method="post" :data="todo">确定</ajax-btn>
                </div>

            </div>

        </dialog>
    </div>
</template>

<script>

    import Button from 'vux/components/button';
    import Dialog from './../../src/components/Dialog.vue';
    import AjaxBtn from './../../src/components/AjaxBtn.vue';
    import PullMore from './../../src/components/PullMore.vue';
    import Loading from 'vux/components/loading';
    import req from 'superagent';
    import Scroller from 'vux/components/Scroller'
    import Alert from 'vux/components/Alert'

    export default {
        name: 'Todo',
        data: function () {
            return {
                todo: {
                    title: 'dddd'
                },
                show:true,
                loading: {
                    show: false
                }
            }
        },
        components: {
            Button, Dialog, Loading,AjaxBtn,PullMore,Scroller,Alert
        },
        methods: {
            onAdd: function (e) {
                this.$refs.paneladd.close();
            },
            showAddPanel:function(e){
                this.$refs.paneladd.open();
            },

            pulldownLoading:function(uuid){
                const _this = this
                setTimeout(function () {
                    _this.$broadcast('pulldown:reset', uuid)
                }, 500)
            },

            load: function (uuid) {
                const _this = this
                setTimeout(function () {
                    _this.$broadcast('pulldown:reset', uuid)
                }, 2000)
            }


        }
    }
</script>
<style>
    html,body,#app{
        height: 100%;
    }
</style>