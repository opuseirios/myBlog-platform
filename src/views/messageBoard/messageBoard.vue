<template>
    <div class='messageBoard'>
        <Header />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import Header from '../../components/header/header.vue'

    export default Vue.extend({
        name: "messageBoard",
        components:{
            Header
        }
    })
</script>

<style scoped lang='less'>

</style>
