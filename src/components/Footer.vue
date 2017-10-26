<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页" >
      <img slot="icon" src="../images/看板.svg" @click = "gotoAddress('/index')">
        首页
    </mt-tab-item>
    <mt-tab-item id="消息">
      <img slot="icon" src="../images/消息.svg">
        消息
    </mt-tab-item>
    <mt-tab-item id="应用">
      <img slot="icon" src="../images/应用.svg">
        应用
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../images/我的.svg"  @click = "gotoAddress('/profile')">
        我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
    return{
    selected: '首页'
}
},
    created(){

},
    mounted(){

},
    computed: {
    ...mapState([
    'geohash'
    ]),
},
    methods: {
    gotoAddress(path){
    this.$router.push(path)
}
},
}
</script>
