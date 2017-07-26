<template>
<div id="Siderbar" ref="wrapper">
    <div class="blank" :style="{height:wrapperHeight + 'px'}" @click="closeSidebar">空白处</div>
    <div class="sidebar-content" :style="{height:wrapperHeight + 'px'}">
        <div class="sidebar-list">
        <p class="filtrate">筛选</p>
        <div class="scroll" :style="{height:(wrapperHeight-100) + 'px'}">
            <ul>
                <li v-for="(item,index) in sidebarList" :key="index" >
                   <div class="filtrate-name"><span>{{item.title}}</span></div>
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
    background-color:#ff6666 !important;
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
        text-align:left;
        padding:0.25rem 0.5rem;
        background-color:#f5f5f5;
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
        text-align:left;
        margin-left:0.5rem;
        padding:0.25rem 0;
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
        box-shadow: 0 0 1px #b8bbbf;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 4px;
        border: 0;
        box-sizing: border-box;
        display: block;
        outline: 0;
        overflow: hidden;
        position: relative;
        text-align: center;
       margin-right:0.5rem;
       margin-bottom:0.25rem;
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
       color:#fff;
       height:1.5rem;
       line-height:1.5rem;
       width:46%;
       display:inline-block;
       background-color:#b5b5b5;
   }
   .checkbtn .confirm{
       color:#fff;
       display:inline-block;
       line-height:1.5rem;
       width:46%;
       height:1.5rem;
       background-color:#ff6666;
   }
</style>