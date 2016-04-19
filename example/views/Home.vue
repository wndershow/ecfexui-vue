<template>
  <div class="page" transition="app" style="padding: 1rem;">
      <ajax-btn url="/api/todos" @after="tttt">asdfasdddd</ajax-btn>
  </div>
</template>

<script>

  import AjaxBtn from '../../src/components/AjaxBtn.vue';

  export default {
    name: 'Home',
    components: {
      AjaxBtn
    },
    ready:function(){
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