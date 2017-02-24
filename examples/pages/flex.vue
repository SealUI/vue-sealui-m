<template>
    <div class="page-flex">
        <div class="page-flex__group">

            <seal-flex>
                <flex-item><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item v-for="i in 2"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item  v-for="i in 3"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item  v-for="i in 4"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item  v-for="i in 5"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-flex',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-flex {
        padding: 0.15rem;
        & .page-flex__group {
            margin-bottom: .15rem;
        }
        .placeholder {
            margin: 5px;
            padding: 0 10px;
            background-color: #ebebeb;
            height: 2.3em;
            line-height: 2.3em;
            text-align: center;
            color: #cfcfcf;
        }
    }
</style>
