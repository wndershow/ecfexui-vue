<template>
    <btn type="primary" @click="click"><slot></slot></btn>
    <loading :show="loading.show" text="处理中"></loading>
</template>

<script>

    import Btn from 'vux/components/button/'
    import Loading from 'vux/components/loading';
    import req from 'superagent'
    var _ = require('underscore');

    export default {
        name: 'AjaxBtn',
        props: {
            url : {
                type : String,
                required:true
            },
            method : {
                type : String,
                default:'get'
            },
            data:{
                type : Object,
                default:{}
            }
        },
        components: {
            Btn,Loading
        },
        data:function(){

            return {
                loading:{
                    show: false
                }
            };

        },
        methods:{
            click(e){

                var _this = this;

                var data = _this.data;

                var params = {};
                if(!_this.$dispatch('before', params)) return false;

                _this.loading.show = true;

                data = _.extend(data,params);

                var r = null;

                if(this.method == 'get'){
                    r = req.get(this.url)
                        .query(this.data);
                }else if(this.method == 'post'){
                    r = req.post(this.url)
                        .send(this.data);
                }

                r.end(function(err, res){
                    _this.loading.show = false;
                    _this.$dispatch('after', res.body);
                });

            }

        },
        events: {
            'abc': function (event) {
                return false;
            }
        }

    }

</script>

<style>
</style>