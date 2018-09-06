<template>
  <div class="good">
    <!--话题栏目列表组件  props传值：父组件向子组件传数据-->
    <topic-list :itemsData="items"></topic-list>
    <!--滑动组件（分页  @infinite无限加载事件）-->
    <infinite-loading @infinite="infiniteHandler" v-if="isLoadingShow" ></infinite-loading>
  </div>
</template>

<script>
//引入栏目列表组件（公有子组件）
import TopicList from '@/components/topics/TopicList';
//引入栏目列表查询数据模块
import {getItemsData} from '@/getData/topicData.js';
//引入滑动组件（分页，无限加载模块）
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'HelloWorld',
  data () {
    return {
      //声明数组 存放所有栏目数据
      items: [],
      page:1,
      //控制无限加载(分页)的loading图是否显示
      isLoadingShow:true
    }
  },
  //加载组件
  components:{
    TopicList,
    InfiniteLoading
  },
  //方法
  methods:{
    infiniteHandler($state){
      setTimeout(()=>{
        getItemsData({tab:'good',limit:5,page:++this.page}).then((resData)=>{
            resData.data.data.forEach(element => {
                var t=element.create_at;  
                var date=new Date(t);
                var create_time=date.getTime();  //文章发表时间
                var timestamp = (new Date()).getTime();   //当前时间
                var cha=(timestamp-create_time)/1000;

                var year=Math.floor(cha/(60*60*24*30*12));  //年
                var month=Math.floor(cha/(60*60*24*30));  //月
                var day=Math.floor(cha/(60*60*24));  //天
                cha%=60*60*24; 
                var hour=Math.floor(cha/(60*60));  //小时
                cha%=60*60;
                var minute=Math.floor(cha/60);  //分

                var dt='';
                if(year){
                  dt=year+'年前';
                }else if(month){
                  dt=month+'个月前';
                }else if(day){
                  dt=day+'天前';
                }else if(hour){
                  dt=hour+'小时前';
                }else if(minute){
                  dt=minute+'分钟前';
                }else{
                  dt='刚刚';
                }

                element.create_at=dt;
            });
            //把下一页的数据追加到items数组里
            this.items=this.items.concat(resData.data.data);
            //判断是否还有数据
            if(resData.data.data.length==0){
              isLoadingShow=false;
            }else{
              $state.loaded();
            }

          })
      },1000);
    }
  },
  //钩子函数 查数据
  mounted:function(){
    getItemsData({tab:'good',limit:5}).then((resData)=>{
      resData.data.data.forEach(element => {
          var t=element.create_at;  
          var date=new Date(t);
          var create_time=date.getTime();  //文章发表时间
          var timestamp = (new Date()).getTime();   //当前时间
          var cha=(timestamp-create_time)/1000;

          var year=Math.floor(cha/(60*60*24*30*12));  //年
          var month=Math.floor(cha/(60*60*24*30));  //月
          var day=Math.floor(cha/(60*60*24));  //天
          cha%=60*60*24; 
          var hour=Math.floor(cha/(60*60));  //小时
          cha%=60*60;
          var minute=Math.floor(cha/60);  //分

          var dt='';
          if(year){
            dt=year+'年前';
          }else if(month){
            dt=month+'个月前';
          }else if(day){
            dt=day+'天前';
          }else if(hour){
            dt=hour+'小时前';
          }else if(minute){
            dt=minute+'分钟前';
          }else{
            dt='刚刚';
          }

          element.create_at=dt;
      });
      this.items=resData.data.data;
      
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .good{
    background-color: #fff;
  }

</style>
