<template>
  <div id="CourseIndex">
  <div class="my-header">
    <my-header title="我的课程">
    </my-header>
  </div>
  <div class="course-list">
            <ul style="{height:wrapperHeight + 'px''}" ref ='wrapper'>
                <loadmore ref='loadmore1'>
                <li v-for="(courseinfo,index) in allCourse">
                    <cou-info 
                      :index= 'courseinfo.lessonID' 
                      :src="courseinfo.src" 
                      :courseName="courseinfo.courseName"
                      :lecturerName="courseinfo.lecturerName"
                      :promulgator="courseinfo.promulgator"
                      :promulgateTime="courseinfo.promulgateTime"
                      :playNum="courseinfo.playNum"
                      :likesNum="courseinfo.likesNum"
                      :commentNum="courseinfo.commentNum">
                    </cou-info>
                </li>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span  v-show = 'bottomStatus === "pull"' >↑</span>
                    <span  v-show = 'bottomStatus === "drop"' >↓</span>
                    <span class='fixed' v-show = 'bottomStatus === "loading" '>
                        <spinner></spinner>
                    </span>
                </div>
                </loadmore>
            </ul>

        </div>
  </div>
</template>

<script>
import { Loadmore,Spinner,InfiniteScroll, Toast } from 'mint-ui'
import Vue from 'vue'
Vue.use(InfiniteScroll)
import Header from '../components/Header'
import CourseInfo from '../components/CourseInfo'
export default {
  name: 'CourseIndex',
  data() {
    return{
      wrapperHeight:0,
      allLoaded:false,
      bottomStatus:'',
       allCourse:[{
        lessonID:'111111',
        src:'',
        courseName:'老王谈用友文化1.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2015-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'222222',
        src:'',
        courseName:'老王谈用友文化2.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2016-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'333333',
        src:'',
        courseName:'老王谈用友文化3.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2017-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'444444',
        src:'',
        courseName:'老王谈用友文化4.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2018-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'444444',
        src:'',
        courseName:'老王谈用友文化4.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2018-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'444444',
        src:'',
        courseName:'老王谈用友文化4.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2018-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'444444',
        src:'',
        courseName:'老王谈用友文化4.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2018-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'444444',
        src:'',
        courseName:'老王谈用友文化4.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2018-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'444444',
        src:'',
        courseName:'老王谈用友文化4.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2018-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       },
       {
        lessonID:'444444',
        src:'',
        courseName:'老王谈用友文化4.0',
        lecturerName:'王文京',
        promulgator:'用友大学',
        promulgateTime:'2018-08-23 09:22',
        playNum:2405,
        likesNum:51,
        commentNum:9
       }]
    }
  },
   methods:{
    },
  components:{
    'my-header':Header,
    'loadmore':Loadmore,
    'cou-info':CourseInfo,
    'spinner':Spinner
  }
}
</script>

<style>
#CourseIndex {
}
.mint-loadmore{
  width:100%;
}
a{
  text-decoration:none
}
li{
  list-style:none;
}
</style>