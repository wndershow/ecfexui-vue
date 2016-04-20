<template>
  <div class="req"></div>

  <div v-if="loading.show" class="doing"><spinner type="ripple"></spinner></div>

</template>

<script>

  import Spinner from 'vux/components/spinner';
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

          if(typeof cb == 'function'){
            cb(res.body);
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
</style>