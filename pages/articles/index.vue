<template>
  <section class="container">
    <div>
      <h1>記事一覧</h1>
      <nuxt-link to="/" class="button--grey">トップへ戻る</nuxt-link>
      <div class="article-list">
        <ul>
          <li>
            <div class="article-image"></div>
            <div class="title">
              <nuxt-link :to="{ name: 'articles-slug', params: { slug: 'test' }}">タイトル</nuxt-link>
            </div>
          </li>
        </ul>
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
    margin: 50px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  h1 {
    width: 80%;
    text-align: left;
  }
  h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  .article-list {
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  li {
    width: 260px;
    margin: 0 20px 50px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    transition: 0.3s all;
  }
  li:hover {
    opacity: 0.8;
  }
  .article-image {
    width: 260px;
    height: 260px;
    margin: 0 auto 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .article-image img {
    width: auto;
    height: 100%;
  }
  li a {
    display: block;
    text-decoration: none;
    color: #333;
    text-align: left;
  }
  li p {
    font-size: 12px;
    text-align: right;
  }
</style>
