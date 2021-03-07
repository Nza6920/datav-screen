<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/test">Test</router-link>
    </div>
    <div>
      <test-component-a></test-component-a>
      <!--      &lt;!&ndash; 使用svg &ndash;&gt;-->
      <!--      <svg width="50" height="50" style="color: red">-->
      <!--        <use href="#more"></use>-->
      <!--      </svg>-->
      <!--      <svg width="50" height="50" style="color: green">-->
      <!--        <use href="#filledArrowRight"></use>-->
      <!--      </svg>-->
      <!--      <svg width="50" height="50" style="color: green">-->
      <!--        <use href="#arrowRight"></use>-->
      <!--      </svg>-->
      <!--      <Icon name="arrowRight" class="common-icon"></Icon>-->
      <!--      <Icon name="mobile" class="common-icon"></Icon>-->
      <!--      <Icon prefix="icon" name="bofang" class="common-icon"></Icon>-->
      <!--      <test-component-b></test-component-b>-->
      <!--      <test-component-c></test-component-c>-->
      <!--      <svg-animation />-->
      <!--      <my-loading width="300"-->
      <!--                  height="300"-->
      <!--                  outsideColor="red"-->
      <!--                  insideColor="yellow"-->
      <!--                  duration="2">-->
      <!--        <div>-->
      <!--          数据大屏加载中...-->
      <!--        </div>-->
      <!--      </my-loading>-->
      <my-fly-box style="width: 50%;background: #333;color: #fff">
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
      </my-fly-box>
      <my-fly-box style="width: 50%;background: #333;color: #fff">
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
      </my-fly-box>
    </div>
    <!--    <router-view/>-->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.icon-wrapper {
  color: green;
}

.common-icon {
  width: 50px;
  height: 50px;
  color: purple;
}
</style>
