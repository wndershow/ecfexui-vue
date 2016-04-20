<template>
  <div v-show="tip.show" class="ex-tip">{{tip.title}}</div>
</template>

<script>

  export default {
    name: 'Tip',
    props: {
      show: {
        type: Boolean,
        default:false
      }
    },
    watch: {
      'tip.show':function(val){
        var _this = this;
        if (val) {
          clearTimeout(this.timeout)
          this.timeout = setTimeout(function () {
            _this.tip.show = false
          }, 2000)
        }
      }
    }
  }

</script>

<style>
  .ex-tip{
    position: fixed;
    padding: .5rem 1rem;
    bottom: 10%;
    left: 50%;
    background-color: rgba(0,0,0,.7);;
    color: #fff;
    border-radius: .3rem;
    font-size: .8em;
    z-index: 10000;
    transform: translateX(-50%);
  }
</style>