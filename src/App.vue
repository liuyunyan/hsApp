<template>
  <div class="com-app">
    <router-view class="child-view"></router-view>
  <com-footer ></com-footer>
</div>
</template>
<script>

import navFooter from './components/Footer'

export default{
    data: function () {
        return {

        }
    },
    computed: {
    },
    components: {
        comFooter: navFooter,
    },
    methods: {}
}
</script>
<style>
</style>
