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
        <van-datetime-picker class="home-date-picker"
                             v-model="currentDate"
                             type="datetime"
                             ref="picker"
                             :item-height="itemHeight"
                             :min-date="minDate"
                             :max-date="maxDate" />
    </div>
</template>

<script>
import Son from '../components/biz/son.vue'

export default {
    data() {
        return {
            currentDate: new Date('2018-01-01'),
            minDate: new Date('2018-01-01'),
            maxDate: new Date('2018-12-31'),
            count: 0,
            itemHeight: 0
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
    mounted() {
        this.itemHeight = document.documentElement.getAttribute('data-dpr') * 44
    }
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
    .home-date-picker {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
</style>
