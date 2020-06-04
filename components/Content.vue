<template>
 <div class="content">
   <div class="post-list">
     <div class="post" v-for="(post, index) in posts.slice(`${beginPath}`, `${endPath}`)" :keys="posts">
      <nuxt-link
       :to="'blog/'+`${post.id}`">
       <article class="post-preview">
        <div class="img" :style="{backgroundImage: 'url(' + post.thumbnailUrl+ ')'}">
         <h4>{{ post.title }}</h4>
        </div>
        <div class="post-info">
          <div class="timeXtheme">
            <div class="time">
             <font-awesome-icon :icon="['fas', 'calendar-alt']"/>
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
              <span>
              </span>
             </div>
            </div>
            <div class="theme">
             <span>{{ post.theme }}</span>
            </div>
          </div>
          <div class="activity">
            <div class="activity-number">
                <span
                v-for="(noumera, index) in noumeras"
                v-bind:item="noumera"
                v-bind:key="noumera._id"
                v-if="noumera.pathName == `${post.id+'count'}`"
                > {{ noumera.count }}&nbsp;</span>
                <span v-else-if
                >0&nbsp;</span>
            </div>
            <font-awesome-icon :icon="['fas', 'eye']"/>
           <div class="comments-number">
             <span
               v-for="commentNumber in commentNumbers"
               v-if="`${commentNumber.pathName}` == `${post.id}`"
               >{{ commentNumber.number }}&nbsp;</span>
             <span v-else-if> 0</span>
           </div>
           <font-awesome-icon :icon="['fas', 'comments']"/>
          </div>
        </div>
        <div class="post-text">
          <p>{{ post.previewText }}</p>
        </div>
       </article>
     </nuxt-link>
     </div>
   </div>
  <div class="number-of-page">
    <div v-for="page in pages">
      <div v-if="page.number == `${pagePath}`">
        <font-awesome-icon
          :icon="['fas', 'chevron-up']"
        />
      </div>
      <div v-if="`${pagePath}` === 'undefined' && page.number == 1">
        <font-awesome-icon
          :icon="['fas', 'chevron-up']"
        />
      </div>
      <nuxt-link v-on:click="currentPage($event)" :to="page.id">{{ page.number }}</nuxt-link>
    </div>
  </div>
 </div>
</template>

<script type="text/javascript">
import PostService from '../src/PostService';

export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
    pages: {
      type: Array,
      required: true
    },
  },
  data (){
    return{
      noumeras: [],
      beginPath: 0,
      endPath: 6,
      currentPageNumber: 1,
      pagePath: this.$route.params.pageId,
      todayDate: '',
      comments: [],
      commentNumbers: [],
      myObject: true

    }
  },
  async created(){
    try {
      this.noumeras = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
    for(let i = 0; i < this.noumeras.length; i++){
      this.comments[i] = this.noumeras[i].pathName;

      this.comments.sort();
    }
    var current = null;
    var cnt = 0;
    for (var i = 0; i < this.comments.length; i++) {
        if (this.comments[i] != current) {
            if (cnt > 0) {
              this.commentNumbers.push({
                pathName: current,
                number: cnt
              })
            }
            current = this.comments[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
      this.commentNumbers.push({
        pathName: current,
        number: cnt
      })
    }
  },
  methods: {
    currentPage(event) {
      this.currentPageNumber = event.originalTarget.innerHTML;
      alert(this.currentPageNumber);
    },
  },
  mounted() {
    var now = new Date();
    this.todayDate = now.getDate();
    if(this.pagePath > 1 && this.pagePath != '1'){
      this.beginPath = (Number(this.pagePath)-1)*6;
      this.endPath = ((Number(this.pagePath)-1)*6)+6;
    };

  },
}
</script>

<style lang="scss" scoped>
@font-face {
       font-family: "JetBrains_Mono";
       src: url("../fonts/JetBrains_Mono.ttf");
}
.content {
  flex: 1;
  margin: 0 auto;
  width: 82%;
  @media (min-width: 1024px) {
    min-width: 1000px;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    min-width: 768px;
  }
  @media (max-width: 758px) and (min-width: 320px) {
    min-width: 320px;
  }
  font-family: "JetBrains_Mono";
  text-shadow:
  0 0 4px rgba(0, 0, 0, 1);
  .post-list {
    display: flex;
    align-content: space-between;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 0%;
    padding: 1.25em 1.6875em;
    background-image: -webkit-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
    background-image: -moz-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
    background-image: -ms-repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
    background-image: repeating-radial-gradient(center center, rgba(60,60,60,.8), rgba(60,60,60,.8) 1px, transparent 1px, transparent 100%);
    -webkit-background-size: 3px 3px;
    -moz-background-size: 3px 3px;
    background-size: 3px 3px;
    width:100%;
    height: 100%;
    max-width: 1200px;
    .post {
      width: 30%;
      min-width: 290px;
      border-bottom: 1px solid white;
      margin-bottom: 2%;
      background: rgba(30,30,30,.4);
      @media (max-width: 480px) and (min-width: 0px) {
        margin-top: 1.86%;
        margin-bottom: 2.26%;
      }
      .img{
        background-size: cover;
        height: 200px;
     }
      h4{
        position: relative;
        top: 150px;
        left: 5%;
        width: 100%;
        height: 33.5%;
        color: white;
        font-size: 15px;
        padding: 2.2% 2% 0.2% 4%;
        text-shadow: 0px 4px 10px black;
        background: rgba(10, 70, 90, 0.65);
      }
      .post-info {
        display: flex;
        color: white;
        justify-content: space-between;
        border-bottom: 1px solid white;
        margin-top: 5.5%;
        padding: 0%;
        div {
          display: flex;
          font-size: 12px;
        }
        .timeXtheme{
          display: flex;
          justify-content: space-between;
          width: 75%;
          .time {
            display: flex;
            justify-content: space-between;
            width: 20%;
            flex-shrink: 0;
            span{
              flex-shrink: 0;
            }
            svg{
              color: rgba(130, 194, 189, 1);
            }
          }
        }
        .activity{
          display: flex;
          justify-content: space-between;
          width: 22%;
        .activity-number{
          width: 25%;
          overflow: hidden;
        }
        .comments-number{
          width: 22%;
          overflow: hidden;
          margin-left: 10%;
        }
          svg {
            color: rgba(230, 210, 145, 1);
          }
        }
      }
      .post-text{
        max-height: 58px;
        overflow: hidden;
        p {
          font-size: 14px;
          color: white;
          padding: 1.2% 1% 14% 2%;
        }
      }
      a {
        text-decoration: none;
      }
    }
  }
  .number-of-page{
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 6%;
    margin-top: 1.56%;
    margin-bottom: 1.76%;
    border-top: 2px solid rgba(235, 45, 64, 0.9);
    border-bottom: 2px solid rgba(235, 45, 64, 0.9);
    padding: 0.22%;
    box-shadow:
      inset 0 -3px 4px -6px #e5365a,
      inset 0 3px 4px -6px #e5365a,
      0 -3px 4px -6px #e5365a,
      0 3px 4px -6px #e5365a,;
    @media (max-width: 1024px) and (min-width: 768px) {
      width: 8%;
    }
    @media (max-width: 768px) and (min-width: 480px) {
      width: 10%;
      margin-top: 2.26%;
      margin-bottom: 2.46%;
    }
    @media (max-width: 480px) and (min-width: 0px) {
      width: 15%;
      margin-top: 2.86%;
      margin-bottom: 3.26%;
    }
    div {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    a {
      font-family: "JetBrains_Mono";
      text-decoration: none;
      color: rgba(235, 45, 64, 0.8);
      font-weight: 600;
      text-shadow:
      0 0 34px #bb3b55,
      0 0 50px #e5365a;
    }
    svg {
      position: absolute;
      display: block;
      margin-top: 24px;
      color: rgba(235, 45, 64, 0.9);
      text-shadow:
      0 0 30px #bb3b55,
      0 0 50px #e5365a,
      0 0 80px #b41737,;
      font-size: 12px;
    }
  }
}
</style>
