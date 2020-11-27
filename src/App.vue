<template>
    <div id="app">
        <router-view/>
        <PageLoadScrollBar/>
    </div>
</template>

<script>
  import PageLoadScrollBar from './components/pageLoadScrollBar'
  import Vue from 'vue'

  export default Vue.extend({
    components: { PageLoadScrollBar},
  })

</script>

<style>
    #app {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
