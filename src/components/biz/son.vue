<template>
    <div class="son">
        <h1>count: {{count}}</h1>
    </div>
</template>

<script>
export default {
    name: 'son',
    computed: {
        count() {
            return this.$store.state.homeStore.count
        }
    }
}
</script>
