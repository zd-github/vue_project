<template>
  <div class="about">
    <div class="head">
      <router-link to="/index" tag="span">主页</router-link> / <span>关于</span>
    </div>
    <div class="doc">
      <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
      <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
      <p>社区目前由 <a href="http://cnodejs.org/user/alsotang">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang">https://github.com/alsotang</a></p>
      <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a></p>
      <h3>移动客户端</h3>
      <p>客户端由 <a href="https://cnodejs.org/user/soliury">@soliury</a> 开发维护。</p>
      <p>源码地址： <a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native</a> 。</p>
      <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
      <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
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

  .about{
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
    }
    .doc{
      font-size: rem(14px);
    }
  }
</style>
