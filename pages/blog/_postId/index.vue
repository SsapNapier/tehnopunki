<template>
  <div class="container">
      <Header />
      <div class="this-content">
        <Post
         :slug='slug'
         :title='title'
         :image='image'
         :content='content'
         :list='list'
         :secondImage='secondImage'
         :videoBlok='videoBlok'
         :secondContent='secondContent'
         :theme='theme'
         :blok='blok'
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
      list: '',
      secondImage: '',
      videoBlok: '',
      secondContent: '',
      data: '',
      theme: '',
      blok: '',
      story: { content: {} }
    }
  },
 asyncData(context) {
        return context.app.$storyapi.get("cdn/stories", {
          version: process.env.NODE_ENV == "production" ? "published" : "draft",
          starts_with: "blog/"
        }).then(res => {
          console.log(res.data)
          return {
            posts: res.data.stories.map(bp => {
              return {
                id: bp.slug,
                title: bp.content.title,
                thumbnailUrl: bp.content.thumbnail,
                previewText: bp.content.summery,
                postList: bp.content.lista,
                secondPostImage: bp.content.secondThumbnailUrl,
                videoPostBlok: bp.content.video,
                secondPostText: bp.content.secondPreviewText,
                theme: bp.content.Theme,
                data: bp.created_at,
                edit: bp.content
              };
            })
          };
        })
  },
  mounted() {
   for (let i = 0; i < this.posts.length; i++){
     if(this.posts[i].id == this.$route.params.postId){
       this.title = this.posts[i].title;
       if(this.posts[i].thumbnailUrl != undefined){
         this.image = this.posts[i].thumbnailUrl;
       }else{
         this.image = 'kek';
       }
       if(this.posts[i].previewText != undefined){
         this.content = this.posts[i].previewText;
       }else{
         this.content = 'kek';
       }
       if(this.posts[i].postList != undefined){
         this.list = this.posts[i].postList;
       }else{
         this.list = 'kek';
       }
       if(this.posts[i].secondPostImage != undefined){
         this.secondImage = this.posts[i].secondPostImage;
       }else{
         this.secondImage = 'kek';
       }
       if(this.posts[i].videoPostBlok != undefined){
         this.videoBlok = this.posts[i].videoPostBlok;
       }else{
         this.videoBlok = 'kek';
       }
       if(this.posts[i].secondPostText != undefined){
         this.secondContent = this.posts[i].secondPostText;
       }else{
         this.secondContent = 'kek';
       }
       this.theme = this.posts[i].theme;
       this.data = this.posts[i].data;
       this.blok = String(this.posts[i].edit);
      }
    };
    this.$storybridge.on(["input", "published", "change"], event => {

       if (event.action === "input") {

         if (event.story.id === this.story.id) {

           this.story.content = event.story.content;

         }

       } else if (!event.slugChanged) {

         window.location.reload();

       }

     });

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
  background-repeat: repeat;
  background-attachment: inherit;
  min-height: 100vh;
  z-index: -3;
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
