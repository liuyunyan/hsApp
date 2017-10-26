<template>
    <div>
        <mt-cell title="首页">首页</mt-cell>
        <div class="content">
            <img src="../assets/logo.png"/>
        </div>
        <div>
            <input type="file" capture="camera" accept="image/*" multiple
                   class="mint-button mint-button--danger mint-button--normal"/>
            <img id="myImage"/>
            <mt-button type="primary" @click="handleButtonClick">click me</mt-button>
            <button @click="handleButtonClick">点我吧点我吧</button>
        </div>
        <footer></footer>
    </div>
</template>

< script >
import Vue from 'vue';
import Footer from '../components/Footer'

export default {
  name: 'index',
    data () {
        return {
        }
    },created(){

    },
    components: {
        Footer,
    },

  methods: {
    handleButtonClick:function(){
      console.log(1)
    }
  }
}
</script>

<style scoped>
    .content{
    margin: 160px 0 160px 0;
    text-align: center;
}

</style>
