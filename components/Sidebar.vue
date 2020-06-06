<template>
 <div class="sidebar">
  <div
   v-for="post in posts.slice(0, 5)"
   :keys="posts"
   class="sidebar-post">
  <nuxt-link :to="post.id">
   <div>
     <div class="img" :style="{backgroundImage: 'url(' + post.thumbnailUrl+ ')'}"></div>
    <!-- <.img :src="post.thumbnailUrl" alt=""> -->
     <div class="sidebar-info">
      <h4 class="sidebar-title">{{ post.title }}</h4>
      <div class="time">
       <div v-if="`${todayDate}` == post.data.substr(8, 2)">
        <span>Сегодня в
         <span>
          {{ post.data.substr(11, 5) }}
         </span>
        </span>
        </div>
        <div v-else>
         <span>Создан:
          <span>
          {{ post.data.substr(2, 8) }}
         </span>
        </span>
       </div>
      </div>
      <div class="activity">
        <span
        v-for="(noumera, index) in noumeras"
        v-bind:item="noumera"
        v-bind:key="noumera._id"
        v-if="noumera.pathName == `${post.id+'count'}` && noumera.count > 4"
        > {{ noumera.count }} просмотров</span>
        <span>0 просмотров</span>
      </div>
      <span>{{ post.theme }}</span>
     </div>
   </div>
  </nuxt-link>
  </div>
 </div>
</template>

<script type="text/javascript">
import PostService from '../src/PostService';
  export default{
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    data(){
      return{
        todayDate: '',
        noumeras: []
      }
    },
    async created(){
      try {
        this.noumeras = await PostService.getPosts();
      } catch(err) {
        this.error = err.message;
      }
    },
    mounted() {
     var now = new Date();
     this.todayDate = now.getDate();
     let cropElement = document.querySelectorAll('.sidebar-title'); // выбор элементов
     let size = 32;                                             // кол-во символов
     let endCharacter = '...';                                  // окончание
     cropElement.forEach(el => {
     let text = el.innerHTML;
      if (el.innerHTML.length > size) {
        text = text.substr(0, size);
        el.innerHTML = text + endCharacter;
      }
     });
   }
  }
</script>

<style lang="scss" scoped>
@font-face {
       font-family: "JetBrains_Mono";
       src: url("../fonts/JetBrains_Mono.ttf");
}
.sidebar {
  width: 32%;
  padding: 1.25em;
  background-image: -webkit-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  background-image: -moz-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  background-image: -ms-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  background-image: repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  -webkit-background-size: 3px 3px;
  -moz-background-size: 3px 3px;
  background-size: 3px 3px;
  height: 100%;
  font-family: "JetBrains_Mono";
  @media (max-width: 1024px) and (min-width: 0px) {
    display: none;
  }
  a {
    text-decoration: none;
  }
  .sidebar-post {
    margin-bottom: 5%;
    &:after{
      content: '';
      display: block;
      position: relative;
      width: 80%;
      margin: 0 auto;
      background: grey;
      height: 0.4px;
      top: 0px;
    }
    div {
      display: flex;
      color: white;
      justify-content: space-between;
      margin: 0% 0 10% 0;
      height: 100px;
      .img {
        background-size: cover;
        width: 44%;
        height: 110px;
      }
      .sidebar-info {
        width: 52%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0% 0 0% 0;
        h4 {
          font-size: 15px;
        }
        .time {
          height: 7px;
        }
        .activity {
          height: 7px;
          max-width: 20px;
          span:nth-child(2){
            display: none;
          }
          span:nth-child(3){
            display: none;
          }
        }
        span {
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
