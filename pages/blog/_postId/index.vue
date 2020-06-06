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
         :data='data'
         :posts='posts'
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
import PostService from '~/src/PostService';

export default {
  data(){
    return {
      numbers: [],
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
      story: { content: {} },
      adress: '',
      count: 1
    }
  },
 asyncData(context) {
        return context.app.$storyapi.get("cdn/stories", {
          version: process.env.NODE_ENV == "production" ? "published" : "draft",
        }).then(res => {
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
       this.image = this.posts[i].thumbnailUrl;
       this.content = this.posts[i].previewText;
       this.list = this.posts[i].postList;
       this.secondImage = this.posts[i].secondPostImage;
       this.videoBlok = this.posts[i].videoPostBlok;
       this.secondContent = this.posts[i].secondPostText;
       this.theme = this.posts[i].theme;
       this.data = this.posts[i].data;
       this.blok = String(this.posts[i].edit);
      }
    };
  },
  async created(){
    try {
      this.numbers = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
    for(let i = 0; i < this.numbers.length; i++){
      if(this.numbers[i].pathName == (this.$route.params.postId + 'count')){
        this.id = this.numbers[i]._id;
        this.count = (Number(this.numbers[i].count) + 1);
      }
    }
    this.adress = this.$route.params.postId + 'count';
    await PostService.insertPost(this.text, this.name, this.adress, this.count);
    this.numbers = await PostService.getPosts();
    if(this.id != undefined){
      await PostService.deletePost(this.id);
      this.numbers = await PostService.getPosts();
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
    @media (max-width: 1024px) and (min-width: 0px) {
      display: column;
    }
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
