<template>
 <div class="sidebar">
  <div
   v-for="post in posts.slice(0, 5)"
   :keys="posts">
  <img :src="post.thumbnailUrl" alt="">
   <div class="sidebar-info">
    <h4>{{ post.title }}</h4>
    <span>Сегодня в 12:34</span>
    <span>534 </span>
    <span>Просмотров</span>
    <span>GTA ONLINE</span>
   </div>
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
  div {
    display: flex;
    color: white;
    margin: 6% 0 6% 0;
    justify-content: space-between;
    height: 120px;
    overflow: hidden;
    img {
      width: 50%;
    }
    .sidebar-info {
      display: flex;
      flex-direction: column;
      margin: 0% 0 0% 0;
    }
  }
}
</style>
