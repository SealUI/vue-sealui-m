<template>
    <div class="page-dialog">
        <div class="page-dialog__group">
            <seal-button :block="true" @click.native="openTitleDialog">一般样式</seal-button>
            <seal-button :block="true" @click.native="openDialog">不带title</seal-button>
            <seal-button :block="true" @click.native="openAlert">打开Alert</seal-button>

            <seal-button :block="true" @click.native="openConfirm">打开Confirm</seal-button>

            <seal-button :block="true" @click.native="openAlertPlugin">Alert 插件</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-dialog',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        openAlertPlugin () {
            this.$seal.alert('alert 插件');
            //this.$seal.toast();
        },
        openConfirm () {
            this.$confirm('普通的confirm',{
                title:'标题',
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            })
        },
        openAlert() {
            this.$alert('自定义标题的alert', {
                title: '自定义标题',
                buttons: [{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            });
        },
        openTitleDialog () {
            this.$msgbox({
                title: 'dialog标题',
                content: 'dialog内容',
                className: 'custom-classname',
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            });
        },
        openDialog () {
            this.$msgbox({
                content: 'dialog内容',
                className: 'custom-classname',
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            });
        }
    }
};
</script>

<style lang="less" scoped>
    .page-dialog {
        padding: 0.15rem;
        & .page-dialog__group {
            margin-bottom: 15px;
        }
        & .sealui-button{
            margin-bottom:.15rem;
        }
    }
</style>
