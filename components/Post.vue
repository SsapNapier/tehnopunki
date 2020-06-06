<template>
 <div class="content" v-editable="blok">
   <div class="post-content">
     <div class="title">
       <h2>{{ title }}</h2>
     </div>
     <div class="post-info">
       <div class="timeXtheme">
         <div class="time">
          <font-awesome-icon :icon="['fas', 'calendar-alt']"/>
          <div v-if="`${todayDate}` == data.substr(8, 2)">
            <span>Сегодня в
              <span>
                {{ data.substr(11, 5) }} /
              </span>
            </span>
          </div>
          <div v-else>
            <span>Создан:
              <span>
                {{ data.substr(2, 8) }} /
              </span>
            </span>
           <span>
           </span>
          </div>
         </div>
         <div class="activity">
           <span
           v-for="(noumera, index) in noumeras"
           v-bind:item="noumera"
           v-bind:key="noumera._id"
           v-if="noumera.pathName == `${pagePath+'count'}`"
           > {{ noumera.count }}</span>
           <font-awesome-icon :icon="['fas', 'eye']"/>
         </div>
       </div>
       <div class="theme">
         <span>{{ theme }}</span>
       </div>
     </div>
     <div class="post-image">
       <img :src="image" alt="">
     </div>
     <div class="text" v-html="content">
     </div>
     <div class="list" v-if="`${list}` != ''">
       {{ list }}
     </div>
     <div class="post-image" v-if="`${secondImage}` != ''">
       <img :src="secondImage" alt="">
     </div>
     <div class="post-video" v-if="`${videoBlok}` != ''">
       <img :src="videoBlok" alt="">
     </div>
     <div class="text" v-if="`${secondContent}` != ''">
       {{ secondContent }}
     </div>
   </div>
   <Comments :slug='slug' />
 </div>
</template>

<script type="text/javascript">
import Sidebar from '~/components/Sidebar.vue';
import PostService from '../src/PostService';
import Comments from '~/components/Comments.vue';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    list: {
      type: String,
      required: true
    },
    secondImage: {
      type: String,
      required: true
    },
    videoBlok: {
      type: String,
      required: true
    },
    secondContent: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    },
    blok: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      styleObject: {
      color: 'red',
      fontSize: '13px'
      },
      noumeras: [],
      todayDate: '',
      pagePath: this.$route.params.postId,
    }
  },
  components: {
    Comments
  },
  async created(){
    try {
      this.noumeras = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  computed: {
   richtext() {
    return this.text ? this.$storyapi.richTextResolver.render(this.text) : ''
    }
  },
  mounted() {
    var now = new Date();
    this.todayDate = now.getDate();
    let space = document.getElementsByClassName('space');
    console.log(space);
  }
}
</script>

<style lang="scss" scoped>
@font-face {
       font-family: "JetBrains_Mono";
       src: url("../fonts/JetBrains_Mono.ttf");
}
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 2.25em 1.6875em;
  background-image: -webkit-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  background-image: -moz-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  background-image: -ms-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  background-image: repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
  -webkit-background-size: 3px 3px;
  -moz-background-size: 3px 3px;
  background-size: 3px 3px;
  margin-right: 2%;
  color: white;
  font-family: "JetBrains_Mono";
  @media (max-width: 768px) and (min-width: 0px) {
    padding: 2.25em 0.4em;
  }
  .post-content{
   flex: 1;
    .title {
      margin: 0% 0 2% 1%;
      h2 {
        padding: 2.5% 1% 2.5% 3%;
      }
      &:before {
        content: "";
        display: flex;
        margin-left: 1%;
        width: 90%;
        height: 2px;
        background: rgba(235, 45, 64, 0.9);
        position: relative;
        top: 2px;
      }
      &:after {
        content: "";
        display: flex;
        margin-left: 1%;
        width: 60%;
        height: 2px;
        background: rgba(235, 45, 64, 0.9);
        position: relative;
        bottom: 1px;
      }
    }
    .post-info {
      display: flex;
      color: white;
      width: 89%;
      justify-content: space-between;
      border-bottom: 1px solid white;
      margin: 1% 0% 0% 2%;
      padding: 1%;
      @media (max-width: 768px) and (min-width: 0px) {
        padding: 0.4%;
      }
      div {
        display: flex;
        font-size: 12px;
      }
      .timeXtheme{
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 32.5%;
        max-width: 180px;
        min-width: 180px;
        @media (max-width: 480px) and (min-width: 0px) {
          width: 40%;
          min-width: 174px;
        }
        .time,
        .activity{
          display: flex;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .time{
          svg {
            color: rgba(130, 194, 189, 1);
            margin-right: 4%;
          }
        }
        .time {
          flex-shrink: 0;
          width: 86%;
          @media (max-width: 1024px) and (min-width: 768px) {
            width: 71%;
          }
          @media (max-width: 768px) and (min-width: 480px) {
            width: 72%;
          }
          @media (max-width: 480px) and (min-width: 0px) {
            width: 70%;
          }
          span{
            flex-shrink: 0;
          }
        }
        .activity{
          flex-shrink: 0;
          width: 14%;
        }
        svg {
          color: rgba(230, 210, 145, 1);
        }
      }
    }
    .post-image {
      margin-top: 2%;
      padding-left: 6%;
      @media (max-width: 768px) and (min-width: 0px) {
        padding-left: 5%;
      }
      img {
        width: 80%;
        @media (max-width: 768px) and (min-width: 0px) {
          width: 88%;
        }
      }
    }
    .text {
      width: 90%;
      padding: 2% 0% 2% 4%;
      i {
        margin: 10px;
        color: red;
      }
    }
    .post-text {
      width: 90%;
      padding: 2% 0% 0% 4%;
      &:after {
        content: "";
        display: flex;
        width: 98%;
        height: 2px;
        background: rgba(235, 45, 64, 0.9);
        position: relative;
        top: 8px;
        @media (max-width: 768px) and (min-width: 0px) {
          margin-bottom: 8.5%;
        }
      }
    }
    &:after {
      content: "";
      display: flex;
      margin-left: 4%;
      width: 44%;
      height: 2px;
      background: rgba(235, 45, 64, 0.9);
      position: relative;
      bottom: 1px;
    }
  }
}
.space{
  color: red;
}
</style>
