<template>
  <div id="CourseIndex">
    <sidebar v-if="isClickFilter" @closeit="closeMySidebar"></sidebar>
    <div class="course" v-if="!isClickFilter">
  <div class="my-header">
    <!-- <my-header title="我的课程" :hasRight="hasRight" @filtrate="myfiltrate">
    </my-header> -->
      <router-link to="/Search"><div class="search"><img src="../assets/search.svg" alt=""></div></router-link>
      <div class="filter" @click="myfiltrate"><img src="../assets/filter.svg" alt=""></div>
      <div class="avatar"><img src="../assets/girl.svg" alt=""></div>
      <div class="header-title">我的课程</div>
  </div>
  <!-- <div class="search-input">
    <div class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner">
          <i class="mintui mintui-search"></i>
          <input type="search" placeholder="搜索" class="mint-searchbar-core" @focus="toSearch">
        </div>
      </div>
    </div>
  </div> -->
  <div class="course-list">
            <ul style="{height:wrapperHeight + 'px''}" ref ='wrapper'>
                <loadmore ref='loadmore1'>
                <li v-for="(courseinfo,index) in allCourse" :key="index">
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
  </div>
</template>

<script>
import { Search,Loadmore,Spinner,InfiniteScroll, Toast } from 'mint-ui'
import Vue from 'vue'
Vue.use(InfiniteScroll)
import Header from '../components/Header'
import CourseInfo from '../components/CourseInfo'
import sidebar from './Sidebar'
export default {
  name: 'CourseIndex',
  data() {
    return{
      //头部是否含有右边的东西
      hasRight:true,
      wrapperHeight:0,
      allLoaded:false,
      bottomStatus:'',
      isClickFilter:false,
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
     mysearch:function(){
       alert("111");
     },
     myfiltrate:function(){
       this.isClickFilter=!this.isClickFilters;
       console.log(this.isClickFilter);
      //  this.$router.push('/Sidebar');
     },
     closeMySidebar:function(){
       this.isClickFilter=false;
     },
     toSearch:function(){
       this.$router.push('/Search');
     }
    },
  components:{
    'my-header':Header,
    'loadmore':Loadmore,
    'cou-info':CourseInfo,
    Spinner,
    Search,
    sidebar
  }
}
</script>

<style>
.my-header{
  text-align: center;
color:#fff;
position:relative;
background: #06CF86;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #93EDC7, #06CF86);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #93EDC7, #06CF86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.search{
margin:0.25rem;
position:absolute;
display: inline-block;
/* float: left; */
top:0;
left: 0;
}
.search img{
  width:0.75rem;
  height:0.75rem;
}
.filter{
  margin:0.25rem;
  display: inline-block;
  position:absolute;
  top:0;
  right:0;
}
.filter img{
  width:0.75rem;
  height:0.75rem;
}
.avatar img{
  margin-top:1rem;
  border-radius:100%;
  display: inline-block;
  /* background-color: #fff; */
  /* line-height: 3rem; */
  width:3rem;
  height:3rem;
}
.header-title{
  padding:0.5rem 0;
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
.search-input .mint-search{
  height:2.5rem;
}
</style>