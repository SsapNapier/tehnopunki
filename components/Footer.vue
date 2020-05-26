<template>
 <footer>
   <div>
     <div class="description">
       <h3>Описание:</h3>
     </div>
     <div class="info">
       <div>
         <p>Привет `<span>${username}</span>` , добро пожаловать на наш портал про игры и технику
            для их запуска. Здесь ты можешь найти новости игровой индустрии,
            сборки пк разных ценовых категорий, и много чего еще.
            Присаживайся поудобней и ныряй в наш кибермир.
         </p>
       </div>
     </div>
   </div>
   <div class="contacts">
     <div>
       <h3>Контакты:</h3>
       <p>bagz984202489@gmail.com</p>
     </div>
     <div>
       <h3>Наши соц. сети:</h3>
       <div class="icons">
        <font-awesome-icon :icon="['fab', 'facebook-f']"/>
        <font-awesome-icon :icon="['fab', 'twitter']"/>
        <font-awesome-icon :icon="['fab', 'vk']"/>
        <font-awesome-icon :icon="['fab', 'steam']"/>
       </div>
     </div>
   </div>
 </footer>
</template>
<style lang="scss">
@font-face {
       font-family: "JetBrains_Mono";
       src: url("../fonts/JetBrains_Mono.ttf");
}
footer {
  font-family: "JetBrains_Mono";
  padding-top: 1.4%;
  height: 20%;
  background: #121518;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 1.5);
  color: white;
  div {
    display: flex;
    width: 84%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 0.5%;
    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      p {
        width: 100%;
        margin-left: -7%;
        margin-top: 1%;
        span {
          color: rgba(195, 45, 64, 1);
        }
      }
    }
  }
  .contacts {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 1% 1% 1% 4.5%;
    background: #0f1014;
    width: 80%;
    margin: 0 auto;
    border-radius: 1%;
    @media (max-width: 768px) and (min-width: 0px) {
      flex-direction: column;
      padding: 1% 1% 0% 2%;
      width: 82%;
    }
    &:after{
      content: '';
      position: relative;
      top: -38px;
      left: 5%;
      width: 20%;
      height: 60px;
      background: #121518;
      transform: rotate(38deg);
      @media (max-width: 768px) and (min-width: 0px) {
        height: 38px;
        width: 20%;
        top: -152px;
        left: 90%;
      }
    }
    div {
      display: flex;
      justify-content: space-around;
      @media (max-width: 768px) and (min-width: 480px) {
        margin-top: 2%;
      }
      @media (max-width: 480px) and (min-width: 0px) {
        margin-top: 3%;
      }
      p {
        padding-left: 4%;
        @media (max-width: 768px) and (min-width: 0px) {
          margin-top: 2%;
        }
      }
    }
    .icons {
      display: flex;
      flex-direction: row;
      width: 86%;
      max-width: 570px;
      justify-content: space-between;
      padding-top: 4%;
      padding-right: 46%;
      @media (max-width: 1024px) and (min-width: 768px) {
        padding-right: 30%;
        padding-top: 3%;
        width: 90%;
      }
      @media (max-width: 768px) and (min-width: 480px) {
        padding-right: 50%;
        padding-top: 1%;
        width: 90%;
      }
      @media (max-width: 480px) and (min-width: 0px) {
        padding-top: 1%;
        width: 90%;
        padding-right: 20%;
      }
      svg {
        font-size: 26px;
      }
    }
  }
}
</style>
