<template>
    <div style="height: 100%;">
        <scroller :pullup-config="pullupConfig"
                  :pulldown-config="pulldownConfig"
                  use-pulldown use-pullup lock-x scrollbar-y :style="style"
                  @pulldown:loading="pullDownLoading"
                  @pullup:loading="pullUpLoading">
            <div class="box2">
                <slot></slot>
            </div>
        </scroller>
    </div>
</template>

<script>

    import Scroller from 'vux/components/Scroller'

    let pullupConfig = {
        content: '下拉刷新',
        downContent: '下拉刷新',
        upContent: '释放刷新',
        loadingContent: '正在加载'
    };
    let pulldownConfig = {content: '下拉刷新', downContent: '下拉刷新', upContent: '释放刷新', loadingContent: '加载中'};

    let props = {
        style: {
            type: String,
            default: ''
        },
        pullupConfig: {
            type: Object,
            default: function () {
                return pullupConfig
            }
        },
        pulldownConfig: {
            type: Object,
            default: function () {
                return pulldownConfig
            }
        }
    };

    let methods = {
        pullup_loading: 'pullup:loading',
        pulldown_loading: 'pulldown:loading',
    };

    export default {
        name: 'PullMore',
        props: props,
        components: {
            Scroller
        },
        data: function () {
            return {
                loading: {
                    show: false
                }
            };
        },
        methods: {
            pullUpLoading(uuid){
                this.$dispatch(methods.pullup_loading,uuid);
                return false;
            },

            pullDownLoading(uuid){
                this.$dispatch(methods.pulldown_loading,uuid);
                return false;
            }
        },
        events: {}

    }

</script>

<style>
</style>