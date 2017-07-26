<template>
  <div class="detail">
    <router-link to="/" class="course-video"></router-link>
    <div class="clickLike"><span class="detail-title">{{detailTitle}}</span><span class="likeNum">{{likeNum}}</span></div>
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
            <div class="detail-intro-title">课程介绍</div>
            <div class="detail-intro-content">{{introduce}}</div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul>
          <li v-for="sectionInfo in sectionList" class="section-li">
            <div>
              <p class="section">第{{sectionInfo.part}}章 <span>{{sectionInfo.title}}</span></p>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">

        <div class="total-comment">
          <!--<span class="commentNum">{{commentNum}}</span>评论-->
          <mt-button class="edit-comment" @click.native="popupVisible1 = true" size="small" ref="button" >评 价</mt-button>
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
                <img :src="src" alt="" @error='changeImage($event)'>
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
        target.src="../static/images/lesson-default.svg"
        console.log(target.src)
      }
    },
//    mounted() {
//      this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
//    }
  }
</script>
<style scoped>
  .detail-content, .comment-content, .comment, .username, .other, .total-comment, .section{
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
  .detail-title, .likeNum, .edit-comment{
    color: rgb(0,205,135);
  }
  .button, .close{
    background-color: rgb(0,205,135);
  }
  .clickLike{
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
  .likeNum{
    float: right;
  }
  .detail-intro-title{
    margin: 1rem 1rem 0;
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
    margin-left: 12.5rem;
  }
  img{
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
    color: #ffffff;
    text-align: center;
    width: 6rem;
  }
  .comment-li{
    list-style: none;
    height: 2.5rem;
  }
  .comment-pull-right{
    float: left;
  }
  .commentNum{
    padding: 0 0.5rem;
  }
  .day{
    border-right: 0.05rem solid #dddddd;
    padding-right: 0.5rem;
  }
  .like{
    padding-left: 0.5rem;
  }
  .section{
    margin: 0.5rem 0.5rem 0;
    padding-bottom: 0.5rem;
  }
  .blankClass{
    height: 0.5rem;
    width: 100%;
    background-color: #dddddd;
  }
  .close{
    margin-left: 10.9rem;
    text-align: center;
    color: #ffffff;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
  }
  .text-content{
    margin-bottom: 0.5rem;
  }
  .page-part>a>div{
    color: rgb(0,205,135);
  }
</style>
