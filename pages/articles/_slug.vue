<template>
  <section class="container">
    <div>
      <nuxt-link to="/articles/" class="button--grey">ブログ一覧へ戻る</nuxt-link>
      <h1 class="title">タイトル</h1>
      <div class="text">
        本文
      </div>
    </div>
  </section>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .container {
    width: 960px;
    min-height: 100vh;
    margin: 50px auto;
    text-align: left;
    display: block;
  }
  .title {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .title p {
    width: 20%;
    font-size: 16px;
    text-align: right;
  }
  h1 {
    width: 80%;
    font-size: 30px;
  }
  .button--grey {
    width: auto;
    margin-bottom: 30px;
  }
  .text {
    font-size: 16px;
    line-height: 1.8;
  }
</style>
