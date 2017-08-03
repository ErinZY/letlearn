<template>
  <div id="Search">
    <div class="my-header">
      <div class="top-Header">
        <div class="back" @click="backhome">
          <img src="../../static/images/back.svg" alt="">
        </div>
        <div class="mySearch">
          <i class="mintui mintui-search"></i>
          <input type="search" placeholder="请输入课件名称关键字查询" v-model="coursename" @keyup.enter="mysearch">
        </div>
        <span class="cancel" @click="mysearch">搜索</span>
      </div>
    </div>
    <div class="uploadTimeClass">
      <p class="classTitle">视频发布时间</p>
      <ul>
        <li id="0" @click="chooseMonth($event)"><div class="month">以前</div></li>
        <li v-for="(item,index) in months" :key="index" :id="item+1" @click="chooseMonth($event)"><div class="month">{{item+1}} 月</div></li>
      </ul>
      <p class="classTitle">排序规则</p>
      <ul>
        <li class="month" @click="chooseOrderName($event)" id="course_publish_time"><div>发布时间</div></li>
        <li class="month" @click="chooseOrderName($event)" id="course_name"><div>课程名称</div></li>
        <li class="month" @click="chooseOrderName($event)" id="course_code"><div>课程编号</div></li>
        <li class="month" @click="chooseOrderName($event)" id="course_broadcast_number"><div>播放量</div></li>
        <li class="month" @click="chooseOrderName($event)" id="course_like_number"><div>点赞量</div></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {
      coursename: "", 
      months:[],
      chooseMonthValue:'',
      chooseOrderNameValue:''
    }
  },
  mounted(){
    var date=new Date;
    var month=date.getMonth()+1;
    for(var i=0;i<month;i++){
      this.months.push(i);
    }
  },
  methods: {
    backSearch: function () {
      this.$router.push("/CourseIndex");
    },
    mysearch: function () {
      this.$router.push({ path: '/SearchResult', query: { coursename: this.coursename,month:this.chooseMonthValue,field:this.chooseOrderNameValue } });
    },
    // 回到课程首页
    backhome: function () {
      this.$router.push('/CourseIndex');
    },
    chooseMonth:function(event){
      var lis = document.getElementsByClassName("myselected");
            if (lis.length > 0) {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].removeAttribute("class", "myselected");
                }
            }
      var id=event.target.parentElement.id;
      this.chooseMonthValue=id;
      document.getElementById(id).setAttribute("class", "myselected");
      // this.$router.push({ path: '/SearchResult', query: { coursename: this.coursename,month:this.chooseMonthValue } });
    },
    chooseOrderName:function(event){
        var lis = document.getElementsByClassName("myselected1");
            if (lis.length > 0) {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].removeAttribute("class", "myselected1");
                }
            }
      var id=event.target.parentElement.id;
      this.chooseOrderNameValue=id;
      document.getElementById(id).setAttribute("class", "myselected1");
    }
  }
}
</script>

<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background: url("../../static/images/cancel.svg") no-repeat 0 0;
  background-size: 1.25rem 1.25rem;
}

.my-header {
  border-bottom: 0.05rem solid #e5e5e5;
  text-align: center;
  color: #fff;
  position: relative;
}

.my-header .top-Header {
  height: 2.25rem;
  text-align: left;
}

.my-header .top-Header .cancel {
  padding: 0.25rem;
  color:#86c840;
}

.back {
  margin: 0.625rem;
  position: absolute;
  display: inline-block;
}

.back img {
  width: 1rem;
  height: 1rem;
}

.mySearch {
  margin-top: 0.4rem;
  margin-left: 1.75rem;
  display: inline-block;
  width: 70%;
  padding: 0.25rem 0.25rem;
  border: 0.05rem solid #fff;
  border-radius: 1rem;
  background-color: #86c840;
}

.mySearch .mintui-search {
  color: #fff;
}

.mySearch input {
  width: 90%;
  text-indent: 0;
  border: 0;
  background-color: #86c840;
  outline: none
  /* opacity: 0.2; */
}

.mySearch input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fff;
}

.mySearch input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}

.mySearch input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}

.mySearch input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #fff;
}
.uploadTimeClass{
}
.classTitle{
    color: #656b79;
    text-align: left;
    margin-bottom: 0.5rem;
    padding: 0.5em;
}
    
.uploadTimeClass ul{
  list-style: none;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  padding-left: 0.5rem;
  /* border-bottom: 0.05rem solid #d9d9d9; */
  }
  .uploadTimeClass ul li{
    display: inline-block;
  }
  .uploadTimeClass ul li div{
    color: #656b79;
    background-color: #f6f8fa;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.75rem;
    border: 0;
    box-sizing: border-box;
    display: block;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    margin-right: 0.25rem;
    margin-bottom: 0.5rem;
    font-size: 0.5rem;
    width: 3.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .myselected div {
    color: #fff !important;
    background-color: #86c840 !important;
}
.myselected1 div {
    color: #fff !important;
    background-color: #86c840 !important;
}
</style>
