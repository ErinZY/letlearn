<template>
  <div id="CourseIndex">
    <sidebar :sidebarList="sidebarList" v-if="isClickFilter" @closeit="closeMySidebar" @lookAllCourse="showAllCourse" @searchCourse="searchCourse"></sidebar>
    <div class="course" v-if="!isClickFilter">
      <div class="my-header">
        <div class="top-Header">
          <div class="back" @click="backhome">
            <img src="../../static/images/back.svg" alt="">
          </div>
          <div class="mySearch">
            <i class="mintui mintui-search"></i>
            <input type="search" placeholder="搜索" v-model="courseName" @focus="toSearch">
          </div>
        </div>
        <div class="user-header">
          <div class="avatar">
            <img src="../../static/images//girl.svg" alt="">
          </div>
          <div class="header-title">
            <p>课程列表</p>
             <span>当前课程-</span>
            <span>{{currentCourse}}</span> 
          </div>
          <div class="filter">
            <div class="filterBtn" @click="myfiltrate">
              <img src="../../static/images/filter.svg" alt="">
              <span>筛选</span>
            </div>
          </div>
  
        </div>
  
      </div>
      <div class="course-list">
        <ul style="{height:wrapperHeight + 'px''}" ref='wrapper'>
          <loadmore :autoFill='false' :bottom-method='loadBottom' @bottom-status-change='handleBottomChange' :bottom-all-loaded='allLoaded' ref='loadmore1'>
            <li v-for="(courseinfo,index) in allCourse" :key="index">
              <cou-info 
                :coursePK='courseinfo.pkCourse'
                :src="courseinfo.courseIconUrl"
                :courseName="courseinfo.courseName" 
                :lecturerName="courseinfo.courseLecturer" 
                :promulgator="courseinfo.coursePublisher" 
                :promulgateTime="courseinfo.coursePublishTime" 
                :playNum="courseinfo.courseBroadcastNumber" 
                :likesNum="courseinfo.courseLikeNumber" 
                :commentNum="courseinfo.courseLikeNumber">
              </cou-info>
            </li>
            <div slot="bottom" class="mint-loadmore-bottom">
              <span v-show='bottomStatus === "pull"'>↑</span>
              <span v-show='bottomStatus === "drop"'>↓</span>
              <span class='fixed' v-show='bottomStatus === "loading" '>
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
import { Search, Button, Loadmore, Spinner, InfiniteScroll, Toast, Indicator } from 'mint-ui'
import Vue from 'vue'
Vue.use(InfiniteScroll)
import Header from '../components/Header'
import CourseInfo from '../components/CourseInfo'
import sidebar from './Sidebar'
export default {
  name: 'CourseIndex',
  data() {
    return {
      //头部是否含有右边的东西
      hasRight: true,
      wrapperHeight: 0,
      //是否全部加载
      allLoaded: false,
      //底部状态（加载更多）
      bottomStatus: '',
      // 控制筛选侧边栏是否显示
      isClickFilter: false,
      // 页数
      pageIndex: 1,
      // 当前分类课程
      currentCourse: "全部课程",
      // 课程名（通过搜索课程名查询）
      courseName: '',
      // 所有课程
      allCourse: [],
      // 侧边栏筛选信息
      sidebarList: [
        {
          title: '创新故事',
          courseNum: 585,
          sidebarSubList: [
            {
              subTitle: '创新故事1',
              subCourseNum: 21,
              id: '6a7e97cc-b9e5-49c5-a788-4218903163a9',
            },
            {
              subTitle: '创新故事1',
              subCourseNum: 21,
              id: 22222,
            },
            {
              subTitle: '创新故事1',
              subCourseNum: 21,
              id: 33333,
            },
            {
              subTitle: '创新故事1',
              subCourseNum: 21,
              id: 44444,
            },
            {
              subTitle: '创新故事1',
              subCourseNum: 21,
              id: 55555,
            },
            {
              subTitle: '创新故事1',
              subCourseNum: 21,
              id: 66666,
            },
            {
              subTitle: '创新故事1',
              subCourseNum: 21,
              id: 77777,
            }
          ]
        },
        {
          title: 'NC',
          courseNum: 5,
          sidebarSubList: [
            {
              subTitle: 'nc1',
              subCourseNum: 34,
              id: 1111,
            },
            {
              subTitle: 'nc1',
              subCourseNum: 3,
              id: 2222,
            }
          ]
        },
        {
          title: '领导力',
          courseNum: 585,
          sidebarSubList: [
            {
              subTitle: '领导力1',
              subCourseNum: 21,
              id: 11111,
            },
            {
              subTitle: '领导力1',
              subCourseNum: 21,
              id: 22222,
            }
          ]
        },
        {
          title: '营销',
          courseNum: 585,
          sidebarSubList: [
            {
              subTitle: '营销1',
              subCourseNum: 21,
              id: 111111,
            },
            {
              subTitle: '营销1',
              subCourseNum: 21,
              id: 222222,
            }
          ]
        },
        {
          title: '实施',
          courseNum: 585,
          sidebarSubList: [
            {
              subTitle: '实施1',
              subCourseNum: 21,
              id: 1111111,
            },
            {
              subTitle: '实施2',
              subCourseNum: 21,
              id: 2222222,
            }
          ]
        },
        {
          title: '研发',
          courseNum: 585,
          sidebarSubList: [
            {
              subTitle: '研发1',
              subCourseNum: 21,
              id: 11111111,
            },
            {
              subTitle: '研发2',
              subCourseNum: 21,
              id: 22222222,
            }
          ]
        },
        {
          title: '通用能力',
          courseNum: 585,
          sidebarSubList: [
            {
              subTitle: '通用能力1',
              subCourseNum: 21,
              id: 111111111,
            },
            {
              subTitle: '通用能力2',
              subCourseNum: 21,
              id: 222222222,
            }
          ]
        },
        {
          title: '新员工培训',
          courseNum: 585,
          sidebarSubList: [
            {
              subTitle: '新员工培训1',
              subCourseNum: 21,
              id: 1111111111,
            },
            {
              subTitle: '新员工培训2',
              subCourseNum: 21,
              id: 2222222222,
            }
          ]
        }
      ]
    }
  },
  //初始化页面
  mounted() {
    var that = this;
    that.courseName=that.$route.query.coursename;
    Indicator.open({
      text: '加载中...',
      spinnerType: 'snake'
    });
    that.axios.get(API + '/Course/SearchCourse', {
      params: {
        pageIndex: that.pageIndex,
        pageSize: 5,
        coursename:that.courseName
      }
    })
      .then(function (response) {
        console.log(response);
        that.allCourse = response.data.detailMsg.data.content;
        Indicator.close();
        console.log(that.allCourse);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    // 回到首页
    backhome: function () {
      this.$router.push('/');
    },
    // 搜索查询
    mysearch: function () {
      var that = this;
      that.currentCourse=that.courseName;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      that.axios.get(API + '/Course/SearchCourse', {
        params: {
          pageIndex: that.pageIndex,
          pageSize: 5,
          coursename: that.courseName
        }
      })
        .then(function (response) {
          console.log(response);
          that.allCourse = response.data.detailMsg.data.content;
          Indicator.close();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 点击出现筛选侧边栏
    myfiltrate: function () {
      var that = this;
      that.axios.get(API + '/coursetype/list', {
      })
        .then(function (response) {
          console.log(response);
          that.isClickFilter = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //关闭搜索侧边栏
    closeMySidebar: function () {
      this.isClickFilter = false;
    },
    // 搜索框获得焦点时，跳转新的页面搜索
    toSearch: function () {
      this.$router.push('/Search');
    },
    //查看全部课程
    showAllCourse: function () {
      var that = this;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      that.axios.get(API + '/Course/SearchCourse', {
        params: {
          pageIndex: that.pageIndex,
          pageSize: 5,
        }
      })
        .then(function (response) {
          console.log(response);
          that.allCourse = response.data.detailMsg.data.content;
          Indicator.close();
          that.isClickFilter = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 通过点击侧边栏的某个课程分类筛选
    searchCourse: function (...data) {
      console.log(data);
      var that = this;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      that.axios.get(API + '/Course/SearchCourse', {
        params: {
          pageIndex: that.pageIndex,
          pageSize: 5,
          courseTypeIds: data[0]
        }
      })
        .then(function (response) {
          console.log(response);
          that.allCourse = response.data.detailMsg.data.content;
          Indicator.close();
          that.isClickFilter = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //上拉刷新
    loadBottom(id) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      var that = this;
      that.pageIndex++;
      setTimeout(() => {
        that.axios.get(API + '/Course/SearchCourse', {
          params: {
            pageIndex: that.pageIndex,
            pageSize: 5,
            coursename: that.courseName
          }
        })
          .then(function (response) {
            var allCourse = response.data.detailMsg.data.content;
            console.log(response.data.detailMsg.data.content);
            if (allCourse.length > 0) {
              console.log('this allCourse', allCourse)
              that.allCourse.push(...allCourse)
              Indicator.close();

            } else {
              Indicator.close();
              let instance = Toast('无更多课程')
              setTimeout(() => {
                instance.close();
              }, 1000)
              that.allLoaded = true
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }, 1000)
      that.$refs.loadmore1.onBottomLoaded(id)
    },
    handleBottomChange(status) {
      this.bottomStatus = status
    },
  },
  components: {
    'my-header': Header,
    'mt-button': Button,
    'loadmore': Loadmore,
    'cou-info': CourseInfo,
    Spinner,
    Search,
    sidebar
  }
}
</script>

<style>
.my-header {
  text-align: center;
  color: #fff;
  position: relative;
}

.my-header .top-Header {
  height: 2rem;
  text-align: left;
}

.back {
  margin: 0.5rem;
  position: absolute;
  display: inline-block;
}

.back img {
  width: 1rem;
  height: 1rem;
}

.mySearch {
  margin-top: 0.25rem;
  margin-left: 1.75rem;
  display: inline-block;
  width: 80%;
  padding: 0.25rem 0.25rem;
  border: 0.05rem solid #fff;
  border-radius: 1rem;
  background-color: #E4E5E7;
}

.mySearch .mintui-search {
  color: #B9B9B9;
}

.mySearch input {
  width: 80%;
  text-indent: 0;
  border: 0;
  background-color: #E4E5E7;
  outline: none
  /* opacity: 0.2; */
}

.mySearch input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #B9B9B9;
}

.mySearch input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #B9B9B9;
}

.mySearch input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #B9B9B9;
}

.mySearch input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #B9B9B9;
}

.user-header {
  height: 5rem;
  text-align: left;
  position: relative;
  background: #06CF86;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #93EDC7, #06CF86);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #93EDC7, #06CF86);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.user-header .avatar {
  position: absolute;
  text-align: center;
  width: 40%;
  display: inline-block;
}

.user-header .avatar img {
  margin-top: 1rem;
  border-radius: 100%;
  display: inline-block;
  width: 3rem;
  height: 3rem;
}

.user-header .header-title {
  margin-top: 1.5rem;
  margin-left: 40%;
  display: inline-block;
}

.user-header .header-title p {
  font-size: 0.8rem;
}

.user-header .filter {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
}

.user-header .filterBtn {
  position: relative;
  font-size: 0.7rem;
  color: #06CF86;
  background-color: #fff;
  border: 0;
  width: 4.25rem;
  height: 1.4rem;
  line-height: 1.4rem;
  border-radius: 0.75rem;
  text-align: center;
  margin: 0.25rem 0 0.5rem 0;
  display: inline-block;
}

.filter img {
  margin-top: 0.2rem;
  left: 0.6rem;
  position: absolute;
  display: inline-block;
  width: 1rem;
  height: 1rem;
}

.filter span {
  margin-left: 1rem;
}

.mint-loadmore {
  width: 100%;
}

a {
  text-decoration: none
}

li {
  list-style: none;
}

.search-input .mint-search {
  height: 2.5rem;
}
</style>