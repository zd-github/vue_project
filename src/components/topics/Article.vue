<template>
  <div class="article">
    <div class="title">
      <span class="tab" v-if="top">置顶</span>
      <span class="tab" v-else-if="good">精华</span>
      <h2>{{title}}</h2>
    </div>
    <p class="info">
      ·发布于{{create_at}}·作者{{author}}·{{visit_count}}次浏览·来自 {{tabs[tab]}}
    </p>
    <p class="content" v-html="content"></p>
  </div>
</template>

<script>
//引入查询数据模块
import {getArticle} from '@/getData/topicData.js';


export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '',
      author:'',
      top:'',
      good:'',
      tab:'',
      visit_count:'',
      create_at:'',
      tabs:{
        share:'分享',
        ask:'问答',
        job:'招聘'
      },
      content:''
    }
  },
  //钩子函数 获取文章数据
  mounted:function(){
    //通过$route 变量获取用户文章id
    var id=this.$route.params.id;
    getArticle(id).then((data)=>{
      var datas=data.data.data;
      this.title=datas.title;
      this.author=datas.author.loginname;
      this.top=datas.top;
      this.good=datas.good;
      this.tab=datas.tab;
      this.visit_count=datas.visit_count;
      this.create_at=datas.create_at;
      this.content=datas.content;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//引入基础样式
@import '../../assets/sass/base.scss';

  .article{
    width: rem(700px);
    padding: 0 rem(15px);
    background-color: #fff;
    .title{
        display: flex;
        align-items: center;
        // justify-content: space-around;
        span.tab{
            width: rem(80px);
            color: #eeffcb;
            font-size: rem(25px);
            text-align: center;
            background-color: #90ac55;
            border-radius: rem(5px);
        }
        h2{
          width: rem(620px);
        }
    }
    .info{
      color: #717476;
      font-size: rem(24px);
      height: rem(70px);
      line-height: 35px;
      padding: rem(20px) 0;
      border-bottom: 3px solid #ccc;
      margin-bottom: rem(20px);
    }
    .content{
      width: rem(700px);
      font-size: rem(16px);
      line-height: 30px;
      white-space: normal;
      word-break: break-all;
      word-wrap:break-word;
     
    }
  }

</style>
