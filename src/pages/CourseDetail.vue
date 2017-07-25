<template>
  <div id="coursedetail">
    <div class="v-header">
      <v-head :title="title">
      </v-head>
    </div>
    <my-video :sources="video.sources" :options="video.options"></my-video>
    <div class="content">
      <v-detail
        :id="id"
        :likeIcon="src"
        :likeNum="likeNum"
        :detailTitle="detailTitle"
        :introduce="introduce"
        :userSelfIcon="src"
        :commentNum="commentNum"
        :commentList="allComment"
        :sectionList="allSection"
       >
      </v-detail>
    </div>
  </div>
</template>
<script>
  import { Loadmore,Spinner,InfiniteScroll, Toast } from 'mint-ui'
  import MyVideo from './CourseVideo'
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
        src:'',
        likeNum:51,
        detailTitle:'老王谈用友文化3.0',
        introduce:'文化3.0之使命',
        commentNum:3,
        video: {
          sources: [{
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: true,
            volume: 0.6,
            poster: 'http://covteam.u.qiniudn.com/poster.png'
          }
        },
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
          }],
        allSection:[{
            part:'1',
            title:'1 使命'
        },{
            part:'2',
            title:'2 愿景'
        },{
            part:'3',
            title:'3 用友价值观——用户之友'
        },{
            part:'4',
            title:'4 用友价值观——专业奋斗'
        },{
            part:'5',
            title:'5 用友价值观——开放创新'
        },{
            part:'6',
            title:'6 用友价值观——诚信合作'
        }]
      }
    },
    methods:{
    },
    components:{
      'v-head':Header,
      'v-detail':Detail,
      'loadmore':Loadmore,
       MyVideo
    }
  }
</script>

<style>
</style>
