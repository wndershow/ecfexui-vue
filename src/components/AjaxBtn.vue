<template>
  <btn type="primary" @click="click" :disabled="isDisabled">
    <slot></slot>
  </btn>
  <req v-ref:req :url="url" :method="method"></req>
</template>

<script>

  import Btn from 'vux/components/button'
  import Req from './Req.vue';
  var _ = require('underscore');


  export default {
    name: 'AjaxBtn',
    props: {
      url: {
        type: String,
        required: true
      },
      method: {
        type: String,
        default: 'get'
      },
      data: {
        type: Object,
        default: function(){
          return {};
        }
      }
    },
    components: {
      Btn, Req
    },
    data: function () {
      return {
        isDisabled:false,
        loading: {
          show: false
        }
      };

    },
    methods: {

      click(){

        var _this = this;

        if(this.isDisabled) return;

        var data = this.data;

        var params = {};
        if (!this.$dispatch('before', params)) return;
        
        data = _.extend(data, params);
        
        this.isDisabled = true;
        this.$refs.req.send(data,function(res){
          _this.isDisabled = false;
          return _this.$dispatch('after', res);
        });

        return;
        
      }

    },
    events: {
    }

  }

</script>

<style>
</style>