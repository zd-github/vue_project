<template>
  <div class="list">
      <!--页面加载loading组件-->
      <loading v-if="!itemsData.length"></loading>
    <ul class="items">
        <li class="item" v-for="item in itemsData">
            <img v-lazy="item.author.avatar_url" alt="">
            <span class="tab" v-if="item.top">置顶</span>
            <span class="tab" v-else-if="item.good">精华</span>
            <span class="mo" v-else>{{tabs[item.tab]}}</span>
            <div>
                <router-link :to="'/index/article/'+item.id+'/'+resPath" tag="p">{{item.title}}}</router-link>
                <p><span>{{item.reply_count}}/{{item.visit_count}}</span><span>{{item.create_at}}</span></p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
//引入loading组件
import Loading from '@/components/Loading';

export default {
  name: 'HelloWorld',
  data () {
    return {
      //栏目分类
      tabs:{
        share:'分享',
        ask:'问答',
        job:'招聘'
      }
    }
  },
   //计算属性  进入文章详情页时使顶部导航选中状态保持
    computed:{
      resPath:function(){
        var arrPath=this.$route.path.split('/');
        if(arrPath[2]=='' || arrPath[2]==undefined){
          // 首页/全部 需要特殊处理
          return 'index';
        }else{
          return arrPath[2];
        }
        
      }
    },
    //加载组件
    components:{
        Loading,
    },
    //接收父组件传来的数据
    props:['itemsData']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//引入基础样式
@import '../../assets/sass/base.scss';

  .items{
    width: rem(690px);
    padding: 0 rem(20px);
    .item{
        width: rem(690px);
        height: rem(100px);
        border-bottom: 2px solid #efefef;
        display: flex;
        align-items: center;
        // justify-content: space-around;
        img{
            width: rem(60px);
            height: rem(60px);
            border-radius: rem(8px);
        }
        span.tab{
            color: #eeffcb;
            font-size: rem(25px);
            background-color: #90ac55;
            padding: rem(3px) rem(5px);
            border-radius: rem(5px);
            margin-left: rem(20px);
        }
        span.mo{
            color: #999;;
            font-size: rem(25px);
            background-color: #e5e5e5;
            padding: rem(3px) rem(5px);
            border-radius: rem(5px);
            margin-left: rem(20px);
        }
        div{
            width: rem(530px);
            height: rem(110px);
            p{
                width: 100%;
            }
            p:nth-child(1){
                width: rem(400px);
                height: rem(40px);
                padding-left: rem(30px);
                padding-top: rem(30px);
                font-size: rem(25px);
                font-weight: bold;
                color: #313131;
                // 当文本超出容器的时候 处理
                overflow: hidden;
                text-overflow: ellipsis;  //显示省略符号来代表被修剪的文本
                white-space: nowrap;
            }
            p:nth-child(2){
                width: rem(525px);
                height: rem(40px);
                padding-left: rem(5px);
                color:#717476;
                font-size: rem(24px);
                span:nth-child(1){
                    float: left;
                }
                span:nth-child(2){
                    float: right;
                }
            }
        }
    }
  }
</style>
