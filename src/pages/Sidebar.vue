<template>
<div id="Siderbar" ref="wrapper">
    <div class="blank" :style="{height:wrapperHeight + 'px'}" @click="closeSidebar">空白处</div>
    <div class="sidebar-content" :style="{height:wrapperHeight + 'px'}">
        <div class="sidebar-list">
        <div class="filtrate">
            <img src="../../static/images/filter1.svg" alt="">
            <span>筛选</span>
            <button @click="allCourse">全部课程</button>
        </div>
        <div class="scroll" :style="{height:(wrapperHeight-100) + 'px'}">
            <ul>
                <li v-for="(item,index) in sidebarList" :key="index" >
                   <div class="filtrate-name"><img src="../../static/images/icon_1.svg" alt=""><span class="bigtitle">{{item.title}}</span><span>(</span><span>{{item.courseNum}}</span><span>)</span></div>
                    <ul class="sub">
                        <li  v-for="(subitem,index) in item.sidebarSubList" :key="index" :id="subitem.id"  @click="choose($event,this)">
                            <button :class="{selected:isSelected}" class="sub-item">{{subitem.subTitle}}</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="checkbtn">
            <a class="cancel"  @click="closeSidebar">取消</a>
            <a class="confirm" @click="closeSidebar">完成</a>
        </div>
        </div>
    </div>
</div>   
</template>
<script>
import { Header,Button } from 'mint-ui';
    export default {
          data(){
              return {
                  wrapperHeight:0,
                  isSelected:false,
                  sidebarList:[
                    {
                      title:'创新故事',
                      courseNum:585,
                      sidebarSubList:[
                          {
                          subTitle:'创新故事1',
                          subCourseNum:21,
                          id:111,
                        },
                        {
                          subTitle:'创新故事1',
                          subCourseNum:21,
                          id:222,
                        },
                        {
                          subTitle:'创新故事1',
                          subCourseNum:21,
                          id:333,
                        },
                        {
                          subTitle:'创新故事1',
                          subCourseNum:21,
                          id:444,
                        },
                        {
                          subTitle:'创新故事1',
                          subCourseNum:21,
                          id:555,
                        },
                        {
                          subTitle:'创新故事1',
                          subCourseNum:21,
                          id:666,
                        },
                        {
                          subTitle:'创新故事1',
                          subCourseNum:21,
                          id:777,
                        }
                          ]
                    },
                    {
                      title:'NC',
                      courseNum:5,
                      sidebarSubList:[
                          {
                          subTitle:'nc1',
                          subCourseNum:34,
                          id:1111,
                        },
                        {
                          subTitle:'nc1',
                          subCourseNum:3,
                          id:2222,
                        }
                          ]
                    },
                    {
                      title:'领导力',
                      courseNum:585,
                      sidebarSubList:[
                          {
                          subTitle:'领导力1',
                          subCourseNum:21,
                          id:11111,
                        },
                        {
                          subTitle:'领导力1',
                          subCourseNum:21,
                          id:22222,
                        }
                          ]
                    },
                    {
                      title:'营销',
                      courseNum:585,
                      sidebarSubList:[
                          {
                          subTitle:'营销1',
                          subCourseNum:21,
                          id:111111,
                        },
                        {
                          subTitle:'营销1',
                          subCourseNum:21,
                          id:222222,
                        }
                          ]
                    },
                    {
                      title:'实施',
                      courseNum:585,
                      sidebarSubList:[
                          {
                          subTitle:'实施1',
                          subCourseNum:21,
                          id:1111111,
                        },
                        {
                          subTitle:'实施2',
                          subCourseNum:21,
                          id:2222222,
                        }
                          ]
                    },
                    {
                      title:'研发',
                      courseNum:585,
                      sidebarSubList:[
                          {
                          subTitle:'研发1',
                          subCourseNum:21,
                          id:11111111,
                        },
                        {
                          subTitle:'研发2',
                          subCourseNum:21,
                          id:22222222,
                        }
                          ]
                    },
                    {
                      title:'通用能力',
                      courseNum:585,
                      sidebarSubList:[
                          {
                          subTitle:'通用能力1',
                          subCourseNum:21,
                          id:111111111,
                        },
                        {
                          subTitle:'通用能力2',
                          subCourseNum:21,
                          id:222222222,
                        }
                          ]
                    },
                    {
                      title:'新员工培训',
                      courseNum:585,
                      sidebarSubList:[
                          {
                          subTitle:'新员工培训1',
                          subCourseNum:21,
                          id:1111111111,
                        },
                        {
                          subTitle:'新员工培训2',
                          subCourseNum:21,
                          id:2222222222,
                        }
                          ]
                    }
                  ]
              }
          },
          created(){
        },
          mounted(){
              this.wrapperHeight=document.documentElement.clientHeight;
          },
          methods:{
              closeSidebar:function(){
                  this.$emit('closeit');
              },
              choose:function(event){
                  var lis=document.getElementsByClassName("myselected");
                    if(lis.length>0){
                        for(var i=0;i<lis.length;i++){
                            lis[i].removeAttribute("class","myselected");
                        }
                    }
                var id=event.target.parentElement.id;
                document.getElementById(id).setAttribute("class","myselected");

              },
              allCourse:function(){
                  this.$emit('lookAllCourse');
              }
          },
          components:{
              'mt-button':Button
          }
    }
</script>
<style scoped>
.myselected button{
    color:#fff !important;
    background-color:#06CF86 !important;
}
    #Siderbar{
        width:100%;
         background-color:#b5b5b5; 
    }
    .blank{
        color:#b5b5b5;
        display: inline-block;
        opacity: 0.5;
        background-color:#b5b5b5;
    }
    .sidebar-content{
        position:relative;
        float:right;
        width:85%;
        background-color:#fff;
    }
    .filtrate{
        position: relative;
        background-color:#06CF86;
        line-height: 2.5rem;
        height:2.5rem;
        text-align:left;
        padding:0.25rem 0.5rem;
        }
    .filtrate img{
        top:0.5rem;
        position:absolute;
        width:1.5rem;
        height:1.5rem;

    }
    .filtrate span{
        color:#fff;
        font-size:1rem;
        margin-left:1.75rem;
    }
    .filtrate button{
        text-align: center;
        color:#06CF86;
        border:0;
        background-color: #fff;
        float:right;
        margin-top:0.625rem;
        width:3.5rem;
        height:1.25rem;
        border-radius:0.75rem;
    }
        .scroll{
            overflow:auto;
        }
    .sidebar-list .scroll>ul>li{
        list-style:none;
        padding-bottom:0.25rem;
        border-bottom:1px solid #f5f5f5;
        }
    .filtrate-name{
        height:1.25rem;
        line-height: 1.25rem;
        position:relative;
        text-align:left;
        margin-left:0.5rem;
        padding:0.5rem 0;
        }
    .filtrate-name img{
        position:absolute;
        width:1.25rem;
        height:1.25rem;
        }
    .filtrate-name span{
        color:#06CF86;
        font-size:0.8rem;
        }
    .filtrate-name .bigtitle{
        margin-left:1.5rem;
    }
    .sidebar-list .sub{
        list-style:none;
        display:flex;
        display: -webkit-flex;
        flex-wrap:wrap;
        padding-left:0.5rem;
        }
    .sidebar-list .sub li{
        display:inline-block;
    }
   .sidebar-list .sub li .sub-item{
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
       margin-right:0.5rem;
       margin-bottom:0.5rem;
       font-size:0.5rem;
       width:3.5rem;
       min-height:1.5rem;
   }
   .checkbtn{
    z-index:99;
    margin-bottom:0.25rem;
    width:100%;
    position:absolute;
    bottom:0;
   }
   .checkbtn .cancel{
       height:1.5rem;
       line-height:1.5rem;
       width:42%;
       border-radius: 0.75rem;
       display:inline-block;
       background-color:#f6f8fa;
   }
   .checkbtn .confirm{
       color:#fff;
       display:inline-block;
       line-height:1.5rem;
       border-radius: 0.75rem;
       width:42%;
       height:1.5rem;
       background-color:#06CF86;
   }
</style>