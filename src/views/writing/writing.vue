<template>
    <div class='article'>
        <markdown />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import markdown from "../../components/markdown/markdown.vue";

    export default Vue.extend({
        components:{markdown}
    })
</script>

<style scoped lang='less'>

</style>
