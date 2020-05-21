<template>
 <div class="comment-content">
  <div class="comment">
   <div class="post"
    v-for="(post, index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    v-if="post.pathName == `${slug}`"
   >
    <div class="comment-info">
     <span>{{ post.name }}</span>
     <span>
       {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
     </span>
    </div>
   <p>{{ post.text }}</p>
  </div>
 </div>
  <div class="add-comment">
   <h3>Добавить комментарий</h3>
   <input type="text" name="" value="" v-model="text">
   <div class="name-button">
     <input type="text" placeholder="Имя*" v-model="name">
     <button type="button" name="button" v-on:click="createPost">Отправить</button>
   </div>
   <p v-if="error">{{ error }}</p>
  </div>
 </div>
</template>

<script type="text/javascript">
import PostService from '../src/PostService';

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  name: 'Comments',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      name: '',
      adress: ''
    }
  },
  async created(){
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  mounted() {
     let str = window.location.pathname;
     let re = str.split('/blog/');
     this.adress = this.slug;
},
  methods: {
    async createPost() {
      await PostService.insertPost(this.text, this.name, this.adress);
      this.posts = await PostService.getPosts();
    }
  },
};
</script>

<style lang="scss" scoped>
@font-face {
       font-family: "JetBrains_Mono";
       src: url("../fonts/JetBrains_Mono.ttf");
}
.comment-content {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0% 0% 2% 4%;
  flex: 0;
  .comment{
    // margin-top: 3%;
    margin-bottom: 3%;
    width: 100%;
    .post:nth-child(0){
      margin-top: 2%;
    }
    .post{
      margin-top: 0.2%;
      padding: 0.6% 1% 1% 1%;
      border: 1px solid white;
      @media (max-width: 480px) and (min-width: 0px) {
        margin-top: 0.5%;
      }
      .comment-info{
        span{
          color: rgba(230, 210, 145, 1);
        }
        span:nth-child(2){
          color: white;
          font-size: 13px;
        }
      }
      p {
        padding: 1% 0 2% 0;
      }
    }
  }
  .add-comment{
    display: flex;
    flex-direction: column;
    font-family: "JetBrains_Mono";
    h3{
      padding-bottom: 3%;
      @media (max-width: 768px) and (min-width: 0px) {
        margin-top: 5%;
        padding-bottom: 5%;
      }
    }
    input {
      color: rgba(50,50,50, 1);
      margin: 1% 0% 1% 0%;
    }
    input:nth-child(2){
     padding: 1% 0% 8% 0%;
     width: 90%;
     @media (max-width: 768px) and (min-width: 0px) {
       padding: 1% 0% 16% 0%;
       width: 98%;
     }
    }
    .name-button{
      display: flex;
      width: 60%;
      align-items: center;
      margin-top: 0.2%;
      min-width: 200px;
      @media (max-width: 1024px) and (min-width: 480px) {
        width: 70%;
      }
      @media (max-width: 480px) and (min-width: 0px) {
        width: 80%;
      }
      input{
        width: 80%;
        padding: 1% 0% 3% 1%;
        @media (max-width: 768px) and (min-width: 480px) {
          padding: 1% 0% 3% 0%;
        }
      }
      button {
        margin-left: 2%;
        border: none;
        border-radius: 3%;
        padding: 2%;
        font-size: 15px;
        background: #D42839;
        color: white;
        font-family: "JetBrains_Mono";
        @media (max-width: 768px) and (min-width: 0px) {
          padding: 2%;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
