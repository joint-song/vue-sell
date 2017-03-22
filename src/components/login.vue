<template>
    <div id="container">
        <test />
        <text-input placeholder="用户名、邮箱" v-on:textChange="userName = value"/>
        <input placeholder="密码"
               v-model="pwd"
               class="block hcenter" />
        <button
            v-on:click="login"
            class="block hcenter">
            提交
        </button>
    </div>
</template>
<script>
export default {
  data: {
    userName: null,
    pwd: null,
  },
  methods: {
    login() {
      alert(`${this.userName}\t${this.pwd}`)
    },
  },
}
</script>

<style scoped>
.block {
    display: block;
}
.hcenter {
    margin: auto;
}
#container {
    text-align: center;
    width: 100%;
}
</style>
