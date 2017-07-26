<template>
    <div class="course-info">
        <router-link to="/CourseDetail" class="course-link" >
            <img class="course-img" :src="src" alt="" @error='changeImage($event)'>        
            <div class="about-course">
            <p class="course-name">{{ courseName }}</p>
            <i class="i icon-angle-right"></i> 
            <p class="lecturerInfo">
                <span class="lecturerName">讲师:<span>{{lecturerName}}</span></span>
                <span class="promulgator">发布者:<span>{{promulgator}}</span></span>
            </p>
            <p class="promulgateTime"><span>{{promulgateTime}}</span></p>
            <p class="videoInfo">
                <span class="playNum"><i class="i icon-angle-right"></i>{{playNum}}</span>
                <span class="likesNum"><i class="i icon-angle-right"></i> {{likesNum}}</span>
                <span class="commentNum"><i class="i icon-angle-right"></i> {{commentNum}}</span>
            </p>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        props:['src','courseName','lecturerName','promulgator','promulgateTime','playNum','likesNum','commentNum'],
        methods:{
            //设置图片加载不出来,或者图片本身不存在时 对应的图片
            changeImage(event){
                var target = event.target;
                target.src="../static/images/lesson-default.svg"
                console.log(target.src)
            }
        }
    }
</script>
<style scoped>
   .course-info{
    margin:0.75rem 0.5rem 0 0.5rem;
    height:5rem;
    border-bottom:1px solid #e5e5e5;
    overflow:hidden;
   }
   .course-info .course-link{
       color:#000;
   }
   img{
       width:5.7rem;
       height:3.8rem;
   }
   .about-course{
        display:inline-block;
        margin-left:0.5rem;
   }
   .about-course p{
       margin:0.25rem 0;
   }
   .course-info .course-link .course-name{
       text-align:left;
       
}
.course-info .lecturerInfo,.course-info .promulgateTime,.course-info .videoInfo{
    font-size:0.6rem;
    color:#b5b5b5;
    text-align:left;
 
}
.lecturerInfo .lecturerName{
    margin-right:0.25rem;
}
</style>