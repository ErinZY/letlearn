<template>
  <div id="Search">
    <!-- <div class="search-input">
    <div class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner">
          <i class="mintui mintui-search"></i>
          <input v-model="coursename" type="search" placeholder="请输入关键字" class="mint-searchbar-core" @keyup.enter="mysearch">
        </div>
        <a class="mint-searchbar-cancel" @click="backSearch">取消</a>
      </div>
    </div>
  </div> -->
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
  </div>
</template>
<script>
export default {
  name: 'Search',
  data(){
    return{
      coursename:""
    }
  },
  methods:{
    backSearch:function(){
      this.$router.push("/CourseIndex");
    },
    mysearch:function(){
      this.$router.push({path: '/SearchResult', query: {coursename:this.coursename}});
    },
    // 回到课程首页
    backhome: function () {
      this.$router.push('/CourseIndex');
    },
  }
}
</script>

<style scoped>
.my-header {
  border-bottom:0.05rem solid #e5e5e5;
  text-align: center;
  color: #fff;
  position: relative;
}

.my-header .top-Header {
  height: 2.25rem;
  text-align: left;
}
.my-header .top-Header .cancel{
  padding: 0.25rem;
  color:#b5b5b5;
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
</style>
