<template>
 <header>
   <div>
     <div class="logo">
       <nuxt-link
        to="/">
        <div class="logo-background">
          <h4>TehnoPunki</h4>
        </div>
     </nuxt-link>
     </div>
     <div class="menu hideThisMenu">
       <nuxt-link to="/Igry">Игры</nuxt-link>
       <nuxt-link to="/" >Новости</nuxt-link>
       <nuxt-link to="/Sborki">Сборки</nuxt-link>
       <nuxt-link to="/Tehnika">Техника</nuxt-link>
      </div>
    <transition name="fade">
     <div class="menu" v-if="isActive">
       <nuxt-link to="/Igry">Игры</nuxt-link>
       <nuxt-link to="/" >Новости</nuxt-link>
       <nuxt-link to="/Sborki">Сборки</nuxt-link>
       <nuxt-link to="/Tehnika">Техника</nuxt-link>
      </div>
     </transition>
     <div class="search">
       <input type="text" name="" placeholder="search" value="">
       <div class="search-button">
         <button type="input" name="button">
          <font-awesome-icon :icon="['fas', 'search']"/>
         </button>
       </div>
     </div>
     <div
      class="phone-menu"
      v-on:click="isActive = !isActive"
     >
      <div class="bar1" v-bind:class="{ change1: isActive }"></div>
      <div class="bar2" v-bind:class="{ change2: isActive }"></div>
      <div class="bar3" v-bind:class="{ change3: isActive }"></div>
     </div>
   </div>
   <div class="line"></div>
 </header>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        isActive: false,
      }
    },
    methods:{
  testFunction: function () {
    var v = this;
    setInterval(function () {
      var numb = Math.floor(Math.random() * 3);
      var anotherNumb = Math.floor(Math.random() * 4);
      var anime = document.querySelector('.logo-background');
      if(numb == 0){
        if(anotherNumb == 1){
          anime.style.textShadow = '6px -4px rgba(123, 177, 181, 1)';
        }else if(anotherNumb == 2){
          anime.style.textShadow = '6px 4px rgba(123, 177, 181, 1)';
      }else if(anotherNumb == 3){
        anime.style.textShadow = '6px 7px rgba(123, 177, 181, 1)';
        }
      }else if(numb == 1){
        if(anotherNumb == 1){
          anime.style.textShadow = '4px -6px #ff3660';
        }else if(anotherNumb == 2){
          anime.style.textShadow = '8px 2px #ff3660';
        }else if(anotherNumb == 3){
        anime.style.textShadow = '3px 5px #ff3660';
        }
      }else{
        anime.style.textShadow = 'none';
      }
  }, 2500);
 }
},
mounted () {
this.testFunction()
}
  }
</script>

<style lang="scss">
@font-face {
       font-family: "Retro";
       src: url("../fonts/9629.ttf");
}
@font-face {
       font-family: "JetBrains_Mono";
       src: url("../fonts/JetBrains_Mono.ttf");
}
header {
  font-family: "JetBrains_Mono";
  height: 55px;
  background: #121518;
  padding-top: 5px;
  &:before {
    content: "";
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background: rgba(130, 194, 189, 1);
    position: absolute;
    top: 55px;
    box-shadow:
    0px 4px 10px rgba(123, 177, 181, 1),
    0px 6px 14px rgba(123, 177, 181, 0.9),
    0px 8px 24px rgba(123, 177, 181, 0.8),
    0px 12px 30px rgba(123, 177, 181, 0.7),
    0px 16px 40px rgba(123, 177, 181, 0.6);
    @media (max-width: 1024px) and (min-width: 768px) {
      top: 60px;
    }
    @media (max-width: 768px) and (min-width: 0px) {
      top: 56px;
    }
  }
  div {
    display: flex;
    width: 96%;
    margin: 0 auto;
    color: #f0f0f0;
    z-index: 0;
    align-items: center;

    div{
      width: auto;
      display: flex;
    }
  }
  .logo {
    font-family: "Retro";
    z-index: 1;
    a{
      text-decoration: none;
    }
    h4 {
      color: white;
      padding-top: 1px;
      font-size: 16px;
      letter-spacing: 1.4px;
    }
    .logo-background{
      margin-top: 0px;
      padding-left: 25px;
      width: 170px;
      height: 45px;
      background-image: url(../static/logo.svg);
      background-repeat: no-repeat;
      background-size: 170px 45px;
      @media (max-width: 768px) and (min-width: 0px) {
        background-size: 130px 45px;
        width: 200px;
        height: 45px;
        padding-left: 5px;
      }
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 32%;
    min-width: 400px;
    z-index: 1;
    background: #121518;
    &:before,
    &:after{
      content: "";
      position: relative;
      height: 1px;
      transform: rotate(45deg);
      box-shadow:
      inset 0 -5px 2px -4px rgba(104, 180, 189, 0.4),
        0 4px 2px -2px rgba(104, 180, 189, 0.4),;
    }
    &:before{
      top: 14px;
      right: 1.4%;
      background: rgb(73,73,73); /* Old browsers */
      background: -moz-linear-gradient(left, rgba(73,73,73,1) 70%, rgba(230,210,145,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(left, rgba(73,73,73,1) 70%,rgba(230,210,145,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, rgba(73,73,73,1) 70%,rgba(230,210,145,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      width: 39px;
    }
    &:after{
      top: -15px;
      left: 1.6%;
      background: rgb(130,194,189); /* Old browsers */
      background: -moz-linear-gradient(left, rgba(230,210,145,1) 0%, rgba(73,73,73,1) 70%); /* FF3.6-15 */
      background: -webkit-linear-gradient(left, rgba(230,210,145,1) 0%,rgba(73,73,73,1) 70%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, rgba(230,210,145,1) 0%,rgba(73,73,73,1) 70%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      height: 1px;
      width: 42px;
    }
      a {
        color: white;
        font-size: 16px;
        text-decoration: none;
        &:hover {
          text-shadow:
          0 0 4px rgba(104, 180, 189, 1);

        }
    }
    .nuxt-link-active {
      color: rgba(230, 210, 145, 1) !important;
      border-bottom: 1px solid rgba(230, 210, 145, 1);
      margin-top: 6px;
      padding-bottom: 5px;
      text-shadow:
      0 0 2px rgba(104, 180, 189, 0.3);
      box-shadow:
      inset 0 -4px 2px -4px rgba(104, 180, 189, 1),
        0 1px 4px -4px rgba(104, 180, 189, 1),;
      &:hover {
        box-shadow:
        inset 0 -5px 2px -4px rgba(104, 180, 189, 0.4),
          0 4px 2px -2px rgba(104, 180, 189, 0.4),;
      }
    }
    @media (max-width: 1024px) and (min-width: 0px) {
      position: absolute;
      display: block;
      width: 100%;
      min-width: 200px;
      height: 34px;
      top: 60px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      background: rgba(18, 21, 24, 0.9);
      padding-top: 3px;
      a {
        margin: 1.8%;
      }
    }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.hideThisMenu {
  @media (max-width: 1024px) and (min-width: 0px) {
    display: none;
  }
}
  .search {
    justify-content: center;
    z-index: 1;
    input{
      background: #121518;
      height: 25px;
      border: 1px solid #494949;
      border-right: none;
      color: white;
      padding-left: 10px;
      margin-right: -1px;
    }
    .search-button {
      background-image: url(../static/search.svg);
      background-size: 40px 40px;
      width: 40px;
      height: 40px;
      padding-left: 3px;
      button{
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        transform: scale(-1, 1);
        filter: FlipH;
        -ms-filter: "FlipH";
        height: 25px;
        background: none;
        border: none;
        border-left: none;
        color: white;
        svg{
          color: #f0f0f0;
          transform: rotate(14deg);
        }
      }
    }
    @media (max-width: 1024px) and (min-width: 0px) {
      display: none;
    }
  }
  .phone-menu{
    display: none;
    flex-direction: column;
    background-image: url(../static/search.svg);
    background-size: 43px 43px;
    background-repeat: no-repeat;
    height: 43px;
    width: 43px;
    padding: 8px 5px 5px 2px;
    z-index: 3;
    @media (max-width: 1024px) and (min-width: 0px) {
      display: flex;
    }
    .bar1, .bar2, .bar3 {
      width: 20px;
      height: 2px;
      background-color: rgba( 260, 260, 260, 0.8);
      margin: 4px 4px 2px 1px;
      transition: 0.4s;
     }
     .change1 {
       -webkit-transform: rotate(-45deg) translate(-9px, 6px);
       transform: rotate(-45deg) translate(-7px, 6px);
     }
     .change2 {opacity: 0;}
     .change3 {
       -webkit-transform: rotate(45deg) translate(-8px, -8px);
       transform: rotate(45deg) translate(-5px, -5px);
     }
  }
  .line{
    z-index: -1;
    &:before {
      content: "";
      display: flex;
      width: 100%;
      height: 0.5px;
      background: #494949;
      position: absolute;
      left: 0;
      top: 27px;
      @media (max-width: 1024px) and (min-width: 768px) {
        top: 30px;
      }
    }
  }
}
</style>
