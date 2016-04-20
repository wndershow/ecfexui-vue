<template>
  <div class="page" transition="app" style="padding: 1rem;">
    <req v-ref:req url="/api/todos"></req>
  </div>
</template>

<script>

  import Req from '../../src/components/Req.vue';

  export default {
    name: 'Home',
    components: {
      Req
    },
    ready:function(){
      this.$refs.req.send({},function(res){
        return true;
      });
    },
    methods:{
      tttt(res){
        console.info(res);
      }
    }
  }
</script>

<style>
  @import '~vux/vux.css';
</style>