<template>
  <div class="req"></div>

  <div v-if="loading.show" class="doing"><spinner type="ripple"></spinner></div>

  <toast :show.sync="toast.show">操作成功</toast>

  <div v-show="tip.show" class="ex-tip">{{tip.title}}</div>

</template>

<script>

  import Spinner from 'vux/components/spinner';
  import Toast from 'vux/components/toast';
  import req from 'superagent'

  export default {
    name: 'Req',
    props: {
      url: {
        type: String,
        required: true
      },
      method: {
        type: String,
        default: 'get'
      }
    },
    components: {
      Spinner,Toast
    },
    data: function () {

      return {
        loading: {
          show: false
        },
        toast:{
          show:false
        },
        tip:{
          show:false,
          title:'这里是一个错误'
        }
      };

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
    },

    methods: {

      send(data,cb){

        var _this = this;
        _this.loading.show = true;

        var r = null;

        if (this.method == 'get') {
          r = req.get(this.url)
                  .query(data);
        } else if (this.method == 'post') {
          r = req.post(this.url)
                  .send(data);
        } else if (this.method == 'patch') {
          r = req.patch(this.url)
                  .send(data);
        } else if (this.method == 'delete') {
          r = req.delete(this.url)
                  .query(data);
        }

        r.end(function (err, res) {

          _this.loading.show = false;
          var bd = res.body;

          if(typeof cb == 'function'){

            if(cb(bd) === false) return;

            if(bd.status == 'OK'){
              _this.toast.show = true;
              return;
            }

            if(bd.status == 'ERROR'){
              _this.tip.show = true;
              _this.tip.title = bd.msg;
              return;
            }

          }

        });

      }
    },
    events: {
    }

  }

</script>

<style>
  .doing{
    position: fixed;
    height: 5rem;
    width: 5rem;
    left:50%;
    top:50%;
    margin-top: -2.5rem;
    margin-left: -2.5rem;
    text-align: center;
  }

  .doing span{
    margin-top: 1.5rem;
  }
  .doing span svg{
    margin: 0 auto;
    font-size: 4rem;;
  }

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