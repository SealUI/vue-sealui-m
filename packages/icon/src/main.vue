<template>
    <i :class="className" :style="headStyle"></i>
</template>

<script>
export default {
    name: 'seal-icon',
    props: {
        type: String,
        color: String
    },
    computed: {
        className () {
            return `sealui-icon sealui-icon-${this.type}`
        },
        headStyle () {
            return `color:${this.color}`
        }
    }
};
</script>
