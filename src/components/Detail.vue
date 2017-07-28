<template>
  <div class="detail">
    <router-link to="/" class="course-video"></router-link>
    <div class="clickLike">
      <span class="detail-title">{{detailTitle}}</span>
      <div class="likeNum">
        <img src="../../static/images/likes1.svg" class="likes"></img>
        <span>{{likeNum}}</span></div>
      </div>
      
    <!--<div class="blankClass"></div>-->

    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">详情</mt-tab-item>
      <mt-tab-item id="2">章节</mt-tab-item>
      <mt-tab-item id="3">评价</mt-tab-item>
    </mt-navbar>
    <div class="blankClass"></div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="detail-content">
          <!--<div class="detail-title">{{detailTitle}}</div>-->
          <div class="detail-intro">
            <img src="../../static/images/icon_5.svg" alt="">
            <div class="detail-intro-title">
                <span>课程介绍</span>
              </div>
            <div class="detail-intro-content">{{introduce}}</div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul>
          <li v-for="sectionInfo in sectionList" class="section-li">
            <div class="sectionPlayer">
              <img src="../../static/images/player.svg" alt="">
              <p class="section">
                <span>第{{sectionInfo.part}}章</span>
                <span>{{sectionInfo.title}}</span>
              </p>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">

        <div class="total-comment" style="height: 2rem;">
          <!--<span class="commentNum">{{commentNum}}</span>评论-->
          <img class="edit-img" src="../../static/images/comments1.svg">
          <mt-button class="edit-comment" @click.native="popupVisible1 = true" size="small" ref="button" style="float: right" >评 价</mt-button>

        </div>

        <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 12 + 'rem' }">
          <div class="comment-content-up">
            <div class="comment-content">
              <div class="close">x</div>
              <div class="text-content">请输入您对该课件的评价</div>
              <textarea class="comment-area"></textarea>
              <div style="text-align: center"><mt-button class="button" size="small">提  交</mt-button></div>
            </div>
          </div>
        </mt-popup>
        <div class="comment-content-down">
          <ul>
            <li v-for="commentInfo in commentList" class="comment-li">
              <div>
                <img class="comment-user-img" :src="src" alt="" @error='changeImage($event)'>
                <div class="comment-pull-right">
                  <p class="username">{{commentInfo.userName}}</p>
                  <p class="comment">{{commentInfo.commentContent}}</p>
                  <p class="other">
                    <span class="day">{{commentInfo.day}}</span>
                    <span class="like">{{commentInfo.like}} 赞</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>
<script>
  import { Button, Cell, Navbar, TabItem, TabContainer, TabContainerItem, Popup } from 'mint-ui';
  import Vue from 'vue';
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Popup.name, Popup);
  export default{
    name:'detail',
    data(){
      return{
        selected:'1',
        popupVisible1: false,
        buttonBottom: 0
      }
    },
    props:['video','src','lecturerName','likeNum','detailTitle','introduce','commentNum','commentList','sectionList'],
    methods:{
      //设置图片加载不出来,或者图片本身不存在时 对应的图片
      changeImage(event){
        var target = event.target;
        target.src="../../static/images/girl.svg"
        console.log(target.src)
      }
    },
//    mounted() {
//      this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
//    }
  }
</script>
<style scoped>
  .detail-content, .comment-content, .comment, .username, .other,.section{
    text-align: left;
  }
  .detail-intro-content, .other, .text-content{
    color: #9d9d9d;
  }
  .comment-li, .comment-content-up{
    padding: 0.5rem;
  }
  .detail-intro-title, .comment-li, .section{
    border-bottom: 0.05rem #dddddd solid;
  }
  .detail-intro-title, .detail-intro-content, .username, .other, .section, .detail-title, .likeNum, .comment, .text-content, .edit-comment{
    font-size: 0.6rem;
  }
  .detail-intro{
    position:relative;
  }
  .detail-intro img{
    position:absolute;
    width:1rem;
    height:1rem;
    left:0.25rem;
  }
  .detail-title, .likeNum, .edit-comment{
    color: rgb(0,205,135);
  }
  .button, .close{
    background-color: rgb(0,205,135);
    text-align: center;
    color: #ffffff;
  }
  .clickLike{
     position:relative;
    height: 1rem;
    padding: 0.5rem;
    background-color: black;
  }
  .detail-title, .likeNum{
    line-height: 1rem;
  }
  .detail-title{
    float: left;
  }
  .likes{
    position:absolute;
    top:0.3rem;
    right:1.5rem;
    width:1rem;
    height:1rem;
  }
  .likeNum{
   
    float: right;
  }
  .detail-intro-title{
    margin: 1rem 1rem 0 1.5rem;
    padding-bottom: 0.2rem;
  }
  .detail-intro-content{
    padding: 0.5rem 1rem;
  }
  .edit-comment{
    background: none;
    border: none;
    box-shadow: none;
    width: 3rem;
    height: 2rem;
  }
  /* .page-part{
    position:relative;
  }
  .down{
    margin-left: 0.25rem;
    position:absolute;
    top:0.6rem;
    width:1rem;
    height:1rem;
  } */
  .total-comment{
    position:relative;
  }
  .edit-img{
    right:2.5rem;
    top:0.5rem;
    position:absolute;
    width: 1rem;
    height: 1rem;
    display: inline;
  }
  .comment-user-img{
    margin-right: 1rem;
    width:2rem;
    height:2rem;
    float: left;
  }
  textarea{
    border: 0.05rem solid #dddddd;
    resize: none;
    width: 11.9rem;
    height: 4rem;
  }
  .button{
    width: 6rem;
  }
  .comment-li{
    list-style: none;
    height: 2.5rem;
  }
  .comment-pull-right{
    float: left;
  }
  /*.commentNum{*/
    /*padding: 0 0.5rem;*/
  /*}*/
  .day{
    border-right: 0.05rem solid #dddddd;
    padding-right: 0.5rem;
  }
  .like{
    padding-left: 0.5rem;
  }
  .section{
    margin: 0.5rem 0.5rem 0 1.5rem;
    padding-bottom: 0.5rem;
  }
  .sectionPlayer{
    position:relative;
  }
  .sectionPlayer img{
    left:0.25rem;
    position:absolute;
    width:1rem;
    height:1rem;
  }
  .blankClass{
    height: 0.5rem;
    width: 100%;
    background-color: #dddddd;
  }
  .close{
    margin-left: 10.9rem;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
  }
  .text-content{
    margin-bottom: 0.5rem;
  }

</style>
