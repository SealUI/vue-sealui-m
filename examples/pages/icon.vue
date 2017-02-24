<template>
    <div class="page-icon">
        <div class="page-icon__group">
            <ul>
                <li  v-for="item in list">
                    <seal-icon :type="item"></seal-icon>
                    <span>{{ item }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import icon from '../icon.json';
const iconList = icon;
export default {
    name: 'page-icon',
    data () {
        return {
            list : iconList
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-icon {3
        padding:.1rem  0.15rem;
        & .page-icon__group {
            margin-bottom: .15rem;
        }
        li{
            display: inline-block;
            background: #fff;
            width: ~"calc(25% - .1rem)";
            text-align: center;
            margin:.05rem;
            height:1.2rem;
            float: left;
            align-items: center;
            padding:.1rem;
            position: relative;
            & span{
                display: block;
                padding-top:.15rem;
                font-size: .12rem;
                position: absolute;
                bottom:0.05rem;
                left:0;
                width: 100%;
                text-align: center;
            }
        }
        .sealui-icon{
            &:before{
                color:hsl(0, 0%, 48%);
                font-size: .5rem
            }

        }
    }
</style>
