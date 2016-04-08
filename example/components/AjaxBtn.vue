<template>
    <btn @click="onClick">btndddee</btn>
</template>

<script>

    import Btn from 'vux/components/button/'
    import req from 'superagent'

    export default {
        name: 'AjaxBtn',
        components: {
            Btn
        },
        methods:{
            onClick:function(){
            }
        }
    }

</script>

<style>
</style>