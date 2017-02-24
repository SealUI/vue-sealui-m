<template>
    <div class="page-toast">
        <div class="page-toast__group">
            <seal-button @click.native="openToast" :block="true">打开 Toast</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-toast',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        openToast () {
            this.$toast('操作成功',{
                duration : 3000,
                callback: function(){ console.log('close') }
            });
        }
    }
};
</script>

<style lang="less" scoped>
    .page-toast {
        padding: .15rem;
        & .page-toast__group {
            margin-bottom: 15px;
        }
    }
</style>
