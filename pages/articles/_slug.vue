<template>
  <section class="container">
    <div>
      <nuxt-link to="/articles/" class="button--grey">ブログ一覧へ戻る</nuxt-link>
      <div class="title">
        <h1>{{ currentPost.fields.title }}</h1>
        <p>公開日：{{ currentPost.fields.publishDate }}</p>
      </div>
      <div class="article-image">
        <img v-if="currentPost.fields.thumbnailImage"
             :src="currentPost.fields.thumbnailImage.fields.file.url"
             size="200px"
             :alt="currentPost.fields.thumbnailImage.fields.description">
      </div>
      <div class="text">
        {{ currentPost.fields.mainText }}
      </div>
    </div>
  </section>
</template>

<script>
  // contentfulの宣言
  import { createClient } from '~/plugins/contentful.js';
  // 設定情報の取得
  const client = createClient();

  export default {
    // 変数の宣言
    data() {
      return {
        allPosts: [],
        currentPost: [],
      };
    },
    // データの取得(非同期)
    asyncData({ env, params }) {
      return client
        .getEntries({
          'content_type': env.CTF_BLOG_ID,
        })
        .then((entries) => {
          const posts = entries.items;
          const current = posts.filter(function(item) {
            return item.fields.slug === params.slug;
          });
          return {
            allPosts: posts,
            currentPost: current[0],
          };
        })
        .catch(console.error);
    },
  };
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
