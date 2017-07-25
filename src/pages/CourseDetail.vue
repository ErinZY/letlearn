<template>
  <div id="coursedetail">
    <div class="v-header">
      <v-head :title="title">
      </v-head>
    </div>
    <div class="content">
      <v-detail
        :id="id"
        :video="video"
        :likeIcon="src"
        :likeNum="likeNum"
        :detailTitle="detailTitle"
        :introduce="introduce"
        :userSelfIcon="src"
        :commentNum="commentNum"
        :list="allComment"
       >
      </v-detail>
    </div>
  </div>
</template>
<script>
  import { Loadmore,Spinner,InfiniteScroll, Toast } from 'mint-ui'
  import Vue from 'vue'
  Vue.use(InfiniteScroll)
  import Header from '../components/Header'
  import Detail from '../components/Detail'
  export default {
    name: 'CourseDetail',
    data() {
      return{
        id:'111111',
        title:'1 使命',
        video:'视频部分',
        src:'',
        likeNum:51,
        detailTitle:'老王谈用友文化3.0',
        introduce:'文化3.0之使命',
        commentNum:3,
        allComment: [{
          userIcon:'',
          userName: 'zhangying',
          commentContent: '测试1',
          day: '1周前',
          like: '0'
        },
          {
            userIcon:'',
            userName: 'youxiaowei',
            commentContent: '测试2',
            day: '2周前',
            like: '1'
          },
          {
            userIcon:'',
            userName: 'yangxueying',
            commentContent: '测试3',
            day: '3周前',
            like: '3'
          }]
      }
    },
    methods:{
    },
    components:{
      'v-head':Header,
      'v-detail':Detail,
      'loadmore':Loadmore,
    }
  }
</script>

<style>
</style>
