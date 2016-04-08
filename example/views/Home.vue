<template>
    <div class="page" transition="app" style="padding: 1rem;">
        <div>
            <h3>button</h3>
            <div>
                <ajax-btn></ajax-btn>
            </div>
        </div>
    </div>
</template>

<script>

    import Bar from './../components/Bar.vue';
    import AjaxBtn from './../components/AjaxBtn.vue';

    export default {
        name: 'Home',
        components: {
            Bar,
            AjaxBtn
        }
    }
</script>

<style>
    @import '~vux/vux.css';
</style>