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
  <my-video :sources="video.sources" :options="video.options"></my-video>
  </div>
</template>
<script>
import MyVideo from './CourseVideo'
export default {
  name: 'Search',
  data(){
    return{
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
            }
    }
  },
  methods:{
    mysearch:function(){
      alert('哈哈');
    }
  },
  components:{
    MyVideo
  }
}
</script>

<style>
</style>