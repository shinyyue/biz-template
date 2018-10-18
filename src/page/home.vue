<template>
    <div id="home">
        <div class="info">
            欢迎进来
        </div>
        <son></son>
        <div class="bottom">
            <van-button type="primary"
                        plain
                        @click="jumpto()">跳转</van-button>
            <van-button type="primary"
                        plain
                        @click="add()">添加</van-button>
        </div>
    </div>
</template>

<script>
import Son from '../components/biz/son.vue'

export default {
    data() {
        return {
            count: 0
        }
    },
    components: {
        [Son.name]: Son
    },
    methods: {
        add() {
            this.count++
            this.$store.dispatch('getCountAdd', this.count)
        },
        jumpto() {
            this.$router.push('/test')
        }
    },
    mounted() {}
}
</script>

<style lang="less">
#home {
    width: 100vw;
    height: 200px;
    text-align: center;
    font-size: 28px; /* px */
    .info {
        margin: 40px 0;
        font-size: 28px; /* px */
    }
    .bottom {
        margin-top: 30px;
    }
}
</style>
