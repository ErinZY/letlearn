<template>
  <div id="Search">
    <div class="my-header">
      <div class="top-Header">
        <div class="back" @click="backhome">
          <img src="../../static/images/back.svg" alt="">
        </div>
        <div class="mySearch">
          <i class="mintui mintui-search"></i>
          <input type="search" placeholder="搜索" v-model="coursename" @keyup.enter="mysearch">
        </div>
        <span class="cancel" @click="mysearch">搜索</span>
      </div>
    </div>
    <div class="uploadTimeClass">
      <ul>
        <li id="0" @click="choose($event)"><div class="month">以前</div></li>
        <li v-for="(item,index) in months" :key="index" :id="item+1" @click="choose($event)"><div class="month">{{item+1}} 月</div></li>
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
      chooseMonthValue:''
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
      this.$router.push({ path: '/SearchResult', query: { coursename: this.coursename } });
    },
    // 回到课程首页
    backhome: function () {
      this.$router.push('/CourseIndex');
    },
    choose:function(event){
      this.chooseMonthValue=event.target.parentElement.id;
      this.$router.push({ path: '/SearchResult', query: { coursename: this.coursename,month:this.chooseMonthValue } });
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
  color: #b5b5b5;
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
  background-color: #E4E5E7;
}

.mySearch .mintui-search {
  color: #B9B9B9;
}

.mySearch input {
  width: 90%;
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
.uploadTimeClass{
  margin-top:1rem;
}
.uploadTimeClass ul{
  list-style: none;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  padding-left: 0.5rem;
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
</style>
