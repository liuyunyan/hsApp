<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>just test</h2>
<button v-on:click="takePhoto" >点我拍照</button>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      msg: '首页',
    };
  },  // 在 `methods` 对象中定义方法
    methods: {
        takePhoto: function (event) {
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
