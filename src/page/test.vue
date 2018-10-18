<template>
    <div id="test">
        <div class="test-content">
            <h1>count: {{count}}</h1>
            <h1>测试页面适配</h1>
            <div class="BSWrapper">
                <ul class="AddDoctor-detail">
                    <li>测试页面适配测试页面适配测试页面适配测试页面适配测试页面适配测试页面适配</li>
                    <li>测试页面适配测试页面适配测试页面适配测试页面适配测试页面适配测试页面适配测试页面适配测试页面适配</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    computed: {
        count() {
            return this.$store.state.homeStore.count
        }
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#test {
}
</style>
