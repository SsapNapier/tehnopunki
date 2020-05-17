<template>
  <div class="container">
      <Header />
      <Content
       :posts='posts'
       :pages='pages'
      />
      <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Content from '~/components/Content.vue'
import Footer from '~/components/Footer.vue'

export default {
  data() {
    return{
      pages: [
      ]
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
      })
      .then(res => {
        return {
          cv: +(new Date()),
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summery,
              thumbnailUrl: bp.content.thumbnail,
              theme: bp.content.Theme,
              data: bp.created_at,
            };
          })
        };
      });
  },
  mounted() {
    if((this.posts.length/6 % 1) == 0){
      for(let i = 1; i <= this.posts.length/6; i++){
        this.pages.push({
          id: String(i),
          number: i
        })
      }
    }else{
      for(let i = 1; i <= (this.posts.length/6)+1; i++){
        this.pages.push({
          id: String(i),
          number: i
        })
      }
    }
  },
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-image: url(../static/1233.jpg);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  background-color: #232323;
  background-position: absolute;
  top: 0vh;
}
</style>
