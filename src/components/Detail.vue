<template>
  <div class="detail">
    <router-link to="/" class="course-video"></router-link>
    <div class="like"><span>{{likeNum}}</span></div>

    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">详细消息</mt-tab-item>
      <mt-tab-item id="2">评论</mt-tab-item>
      <mt-tab-item id="3">章节</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="1">
        <div class="detail-content">
          <div class="detail-title">{{detailTitle}}</div>
          <div class="detail-intro">
            <div class="detail-intro-title">课程介绍</div>
            <div class="detail-intro-content">{{introduce}}</div>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <div class="comment-content-up">
          <div class="comment-content">
            <img class="user-img" :src="src" alt="" @error='changeImage($event)' >
            <textarea class="comment-area" placeholder="我来说两句..."></textarea>
            <mt-button class="button" size="small">发布</mt-button>
          </div>
        </div>
        <div class="comment-content-down">
          <div class="total-comment"><span>{{commentNum}}</span>评论</div>
          <ul>
            <li v-for="commentInfo in list">
              <div>
                <img :src="src" alt="" @error='changeImage($event)'>
                <div></div>
              </div>
              {{commentInfo.userName}}
            </li>
          </ul>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
      </mt-tab-container-item>

    </mt-tab-container>

  </div>
</template>
<script>
  import { Button, Cell, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
  import Vue from 'vue';
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  export default{
    name:'detail',
    data(){
      return{
        selected:'1'
      }
    },
    props:['video','src','lecturerName','likeNum','detailTitle','introduce','commentNum','list'],
    methods:{
      //设置图片加载不出来,或者图片本身不存在时 对应的图片
      changeImage(event){
        var target = event.target;
        target.src="../static/images/lesson-default.svg"
        console.log(target.src)
      }
    }
  }
</script>
<style>
  .detail-content, .comment-content{
    text-align: left;
  }
  .detail-title{
    font-size: 0.7rem;
    border-bottom: 0.05rem #dddddd solid;
    margin: 0 1rem 0.5rem;
    padding: 0.5rem;
  }
  .detail-intro-title, .detail-intro-content{
    font-size: 0.5rem;
  }
  .detail-intro-title{
    margin-left: 1.5rem;
  }
  .detail-intro-content{
    margin: 1rem 1.5rem;
    color: #dddddd;
  }
  .comment-content-up{
    padding: 0.5rem;
    border-bottom: 0.05rem solid #dddddd;
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
    background-color: #26a2ff;
    color: #ffffff;
    left: 12.4rem;
  }
  .total-comment{
    border-bottom: 0.05rem solid #dddddd;
  }
  li{
    list-style: none;
  }

</style>
