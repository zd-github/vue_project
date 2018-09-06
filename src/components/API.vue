<template>
  <div class="api">
    <div class="head">
      <router-link to="/index" tag="span">主页</router-link> / <span>API</span>
    </div>
    <div class="doc">
      <p>以下 api 路径均以 <strong><a href="https://cnodejs.org/api/v1">https://cnodejs.org/api/v1</a></strong> 为前缀</p>
      <h3>主题</h3>
      <h4>get /topics 主题首页</h4>
      <p>接收 get 参数</p>
      <ul>
      <li>page <code>Number</code> 页数</li>
      <li>tab <code>String</code> 主题分类。目前有 <code>ask</code> <code>share</code> <code>job</code> <code>good</code></li>
      <li>limit <code>Number</code> 每一页的主题数量</li>
      <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
      </ul>
      <p>示例：<a href="/api/v1/topics">/api/v1/topics</a></p>
      <h4>get /topic/:id 主题详情</h4>
      <p>接收 get 参数</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//  引入 基础 样式 
  @import '../assets/sass/base.scss';

  .api{
    background-color: #fff;
    .head{
      width: rem(730px);
      padding: rem(20px) rem(10px);
      background-color: #f6f6f6;
      color: #999;
      border-radius: rem(5px) rem(5px) 0 0;
      margin-top: rem(40px);
      border-bottom: 1px solid #999;
      font-size: rem(14px);
      span:nth-child(1){
        color:#80bd01;
      }
      .doc{
        // font-size: rem(14px);
      }
    }
  }
</style>
