<template>
  <div class="container">
      <Header />
      <div class="this-content">
        <Post
         :image='image'
         :title='title'
         :content='content'
         :slug='slug'
         :theme='theme'
          />
        <Sidebar
         :posts='posts'
          />
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Post from '~/components/Post.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'

export default {
  data(){
    return {
      slug: this.$route.params.postId,
      title: '',
      image: '',
      content: '',
      data: '',
      theme: ''
    }
  },
 asyncData(context) {
        return context.app.$storyapi.get("cdn/stories", {
          version: process.env.NODE_ENV == "production" ? "published" : "draft",
          starts_with: "blog/"
        }).then(res => {
          return {
            posts: res.data.stories.map(bp => {
              return {
                id: bp.slug,
                title: bp.content.title,
                previewText: bp.content.summery,
                thumbnailUrl: bp.content.thumbnail,
                theme: bp.content.Theme,
                data: bp.created_at
              };
            })
          };
        })
  },
  mounted() {
   for (let i = 0; i < this.posts.length; i++){
     if(this.posts[i].id == this.$route.params.postId){
       this.title = this.posts[i].title;
       this.image = this.posts[i].thumbnailUrl;
       this.content = this.posts[i].previewText;
       this.theme = this.posts[i].theme;
       this.data = this.posts[i].data;
      }
    }
  },
  components: {
    Header,
    Post,
    Sidebar,
    Footer
  },
  methods: {
    currentPage(event) {
      this.currentPageNumber = event.originalTarget.innerHTML;
      alert(this.currentPageNumber);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-image: url(../../../static/1233.jpg);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-attachment: inherit;
  min-height: 100vh;
  z-index: -3;
  @media (max-width: 768px) and (min-width: 0px) {
    background-repeat: repeat;
    background-size: 100% 100%;
  }
  .this-content {
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 1%;
    margin-bottom: 1%;
    @media (max-width: 1024px) and (min-width: 768px) {
      width: 70%;
    }
    @media (max-width: 768px) and (min-width: 480px) {
      width: 80%;
    }
    @media (max-width: 480px) and (min-width: 320px) {
      width: 98%;
    }
  }
}
</style>
