<template>
 <div class="sidebar">
  <div
   v-for="post in posts.slice(0, 5)"
   :keys="posts"
   class="sidebar-post">
  <nuxt-link :to="post.id">
   <div>
    <img :src="post.thumbnailUrl" alt="">
     <div class="sidebar-info">
      <h4 class="sidebar-title">{{ post.title }}</h4>
      <span>Сегодня в 12:34</span>
      <span><span>534</span> Просмотров</span>
      <span>{{ post.theme }}</span>
     </div>
   </div>
  </nuxt-link>
  <!-- <hr> -->
  </div>
 </div>
</template>

<script type="text/javascript">
  export default{
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
   mounted() {
     let cropElement = document.querySelectorAll('.sidebar-title'); // выбор элементов
     let size = 30;                                             // кол-во символов
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
      img {
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
          height: auto;
          overflow: hidden;
          text-overflow: ellipsis;
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
