<template>
  <div class="req"></div>
  <div v-if="loading.show" class="doing"><spinner type="ripple"></spinner></div>
</template>

<script>

  import req from 'superagent';
  import _ from 'lodash';
  import Spinner from 'vux/components/spinner';

  export default {
    name: 'Request',
    props: {
    },
    components: {
      Spinner
    },
    data: function () {

      return {
        loading: {
          show: false
        }
      };

    },
    methods: {

      send(obj){

        var defaults = {
          url:'',
          method:'get',
          data:{},
          onSuccess:function(res){},
          onError:function(err){},
          onEnd:function(err,res){return true;}
        };

        obj = _.assign(defaults,obj);

        var _this = this;
        _this.loading.show = true;

        var r = null;

        var method = obj.method;
        var url = obj.url;
        var data = obj.data;

        if (method == 'get') {
          r = req.get(url)
                  .query(data);
        } else if (method == 'post') {
          r = req.post(url)
                  .send(data);
        } else if (method == 'patch') {
          r = req.patch(url)
                  .send(data);
        } else if (method == 'delete') {
          r = req.delete(url)
                  .query(data);
        }else{
          r = req.get(url)
                  .query(data);
        }

        r.end(function (err, res) {

          _this.loading.show = false;

          obj.onEnd(err,res);

          var bd = res.body;

          if(bd.status == 'OK'){
            obj.onSuccess(bd);
          }else if(bd.status == 'ERROR'){
            obj.onError(err);
          }

          return;

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
    z-index: 10000;
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