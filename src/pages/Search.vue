<template>
  <div id="Search">
    <div class="search-input">
    <div class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner">
          <i class="mintui mintui-search"></i>
          <input v-model="coursename" type="search" placeholder="请输入关键字" class="mint-searchbar-core" @keyup.enter="mysearch">
        </div>
        <a class="mint-searchbar-cancel" @click="backSearch">取消</a>
      </div>
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
      this.$router.push({path: '/CourseIndex', query: {coursename:this.coursename}});
    }
  }
}
</script>

<style scoped>
</style>
