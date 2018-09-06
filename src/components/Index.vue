<template>
  <div class="index">
    <!--话题导航-->
    <nav class="topic_nav">
      <ul>
          <router-link to="/index/" tag="li" :class="(resPath=='' || resPath==undefined || resPath=='index')?'active':''">全部</router-link>
          <router-link to="/index/good" tag="li" :class="resPath=='good'?'active':''">精华</router-link>
          <router-link to="/index/share" tag="li" :class="resPath=='share'?'active':''">分享</router-link>
          <router-link to="/index/ask" tag="li" :class="resPath=='ask'?'active':''">问答</router-link>
          <router-link to="/index/job" tag="li" :class="resPath=='job'?'active':''">招聘</router-link>
          <router-link to="/index/client_test" tag="li" :class="resPath=='client_test'?'active':''">客户端测试</router-link>
      </ul>
    </nav>
    <!-- 放子组件的容器 -->
    <router-view/>

    <!--返回顶部-->
    <div class="fan" id="fan"><a href="#">返回顶部</a></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //计算属性  话题导航选中状态
  computed:{
    resPath:function(){
      var arrPath=this.$route.path.split('/');
      if(arrPath[2]=='article' && arrPath[4] ){
         return arrPath[4];  //进入文章详情页时使顶部导航选中状态保持
      }else{
         return arrPath[2];
      }
    }
  }
}

//返回顶部
window.onscroll=function(){
  //获取文档滚动高度
  var y=document.documentElement.scrollTop||window.pageYOffset;
  var fan=document.getElementById('fan');
  if(y>400){
    fan.style.right=0;
  }else{
    fan.style.right=-50+'px';
  }
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//  引入 基础 样式 
  @import '../assets/sass/base.scss';

  nav.topic_nav{
    width: rem(730px);
    height: rem(120px);
    background-color: #f6f6f6;
    margin-top: rem(40px);
    ul{
      width:100%;
      height:rem(120px);
      display:flex;
      align-items:center;
      justify-content: space-around;
      li{
        color: #90ac55;
        font-size: rem(30px);
        padding: rem(10px) rem(15px);
        border-radius: rem(10px);
        &.active{
          background-color: #90ac55;
          color: #eeffcb;
        }
      }

    }

  }

//返回顶部
.fan{
  width: rem(20px);
  height: rem(150px);
  padding: rem(15px) rem(20px);
  background:#ccc;
  border-radius: 10px;
  position: fixed;
  right: -50px;
  top:rem(800px);
}

</style>
