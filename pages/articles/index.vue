<template>
  <section class="container">
    <h1>記事一覧</h1>
    <nuxt-link to="/" class="button--grey">トップへ戻る</nuxt-link>
    <div class="article-list">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="{ name: 'articles-slug', params: { slug: post.fields.slug }}">
            <div class="article-image">
              <img v-if="post.fields.thumbnailImage"
                   :src="post.fields.thumbnailImage.fields.file.url"
                   size="200px"
                   :alt="post.fields.thumbnailImage.fields.description">
            </div>
            <div class="title">
              <h2>{{ post.fields.title }}</h2>
              <p>公開日：{{ post.fields.publishDate }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  // contentfulの宣言
  import {createClient} from '~/plugins/contentful.js'
  // 設定情報の取得
  const client = createClient()

  export default {
    // 変数の宣言
    data () {
      return {
        posts: []
      }
    },
    // データの取得(非同期)
    asyncData ({ env }) {
      // contentfulより記事データを取得
      return client.getEntries({
        // 対象のブログID
        'content_type': env.CTF_BLOG_ID,
        // 最大取得件数
        'limit': 10,
      }).then(entries => {
        // 取得出来たのでindex.vueに返却
        return {
          posts: entries.items
        }
      }).catch(console.error)
    }
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
