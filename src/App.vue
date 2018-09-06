<template>
  <div id="app">
    <!--logo 搜索 导航-->
    <header class="header">
        <div class="logo">
          <img src="../static/images/cnode.png" alt="">
        </div>
        <div class="search">
            <img src="../static/images/sousuo.png" alt="">
            <input type="text">
        </div>
        <nav class="nav">
          <ul>
            <router-link to="/" tag="li">首页</router-link>
            <router-link to="/nh" tag="li">新手入门</router-link>
            <router-link to="/api" tag="li">API</router-link>
            <router-link to="/about" tag="li">关于</router-link>
            <!-- <router-link to="/register" tag="li">注册</router-link>
            <router-link to="/login" tag="li">登录</router-link> -->
          </ul>
        </nav>
    </header>

    <!--放 子组件容器-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
//引入基础样式
@import './assets/sass/base.scss';

#app{
    width: rem(730px);
    padding: 0 rem(10px);
    background-color: #e1e1e1;
    .header{
      width: rem(730px);
      height: rem(245px);
      background-color: #444444;
      color: #e2e2e2;
      font-size: rem(28px);
      .logo{
        width: 100%;
        height: rem(70px);
        padding: rem(10px) 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: rem(260px);
          height: rem(70px);
        }
      }
      .search{
        width: rem(470px);
        height: rem(50px);
        margin: 0 auto;
        background-color: #888888;
        border-radius: rem(25px);
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: rem(30px);
          height: rem(30px);
        }
        input{
          width: rem(400px);
          height: 100%;
          border: 0;
          background: transparent;
          outline: none;
          font-size: rem(24px);
        }
      }
      .nav{
        width: 100%;
        height: rem(100px);
        ul{
          width: 100%;
          height: rem(100px);
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
}

</style>
