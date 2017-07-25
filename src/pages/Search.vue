<template>
  <div id="Search">
    <div class="search-input">
    <div class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner">
          <i class="mintui mintui-search"></i>
          <input type="search" placeholder="搜索" class="mint-searchbar-core" @keyup.enter="mysearch">
        </div>
        <a class="mint-searchbar-cancel" @click="mysearch">搜索</a>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHead',
  data(){
    return{}
  },
  methods:{
    mysearch:function(){
      alert('哈哈');
    }
  }
}
</script>

<style>
</style>
