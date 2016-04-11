<template>
    <div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom">这是一首简单的小情歌</div>
        <div class="ex-padding-xs ex-bd-bottom ex-fs">这是一首简单的小情歌</div>

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


        <div style="height: 6rem;"></div>

    </div>
</template>

<script>

    import Button from 'vux/components/button';
    import Dialog from './../../src/components/Dialog.vue';
    import AjaxBtn from './../../src/components/AjaxBtn.vue';
    import Loading from 'vux/components/loading';
    import req from 'superagent';

    export default {
        name: 'Todo',
        data: function () {
            return {
                todo: {
                    title: 'dddd'
                },
                loading: {
                    show: false
                }
            }
        },
        components: {
            Button, Dialog, Loading,AjaxBtn
        },
        methods: {
            onAdd: function (e) {
                this.$refs.paneladd.close();
            },
            showAddPanel:function(e){
                this.$refs.paneladd.open();
            }
        }
    }
</script>
