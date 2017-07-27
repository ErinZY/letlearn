<template>
  <div id="CourseIndex">
    <sidebar v-if="isClickFilter" @closeit="closeMySidebar" @lookAllCourse="showAllCourse"></sidebar>
    <div class="course" v-if="!isClickFilter">
  <div class="my-header">
    <!-- <my-header title="我的课程" :hasRight="hasRight" @filtrate="myfiltrate">
    </my-header> -->
    <div class="back" @click="backhome"><img src="../../static/images/back.svg" alt=""></div>
      <router-link to="/Search"><div class="search"><img src="../../static/images/search.svg" alt=""></div></router-link>
      <div class="avatar"><img src="../../static/images//girl.svg" alt=""></div>
      <div class="header-title">全部课程</div>
       <div class="filter" @click="myfiltrate"><img src="../../static/images/filter.svg" alt=""><span>筛选</span></div>
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
import { Search,Button,Loadmore,Spinner,InfiniteScroll, Toast } from 'mint-ui'
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
     backhome:function(){
       this.$router.push('/');
     },
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
     },
     showAllCourse:function(){
        this.isClickFilter=false;
     }
    },
  components:{
    'my-header':Header,
    'mt-button':Button,
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
.back{
  margin:0.5rem;
position:absolute;
display: inline-block;
/* float: left; */
top:0;
left: 0;
}
.back img{
  width:1rem;
  height:1rem;
}
.search{
margin:0.5rem;
position:absolute;
display: inline-block;
/* float: left; */
top:0;
right: 0;
}
.search img{
  width:1rem;
  height:1rem;
}
.filter{
  position:relative;
  font-size:0.7rem;
  color:#06CF86;
  background-color: #fff;
  border:0;
  width:4rem;
  height:1.5rem;
  line-height: 1.5rem;
  border-radius:0.75rem;
  text-align: center;
  margin:0.25rem 0 0.5rem 0;
  display: inline-block;
}
.filter img{
  margin-top:0.2rem;
  left:0.6rem;
  position:absolute;
  display: inline-block;
  width:1rem;
  height:1rem;
}
.filter span{
  margin-left:1rem;
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
  font-size:0.8rem;
  margin-top:0.75rem;
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