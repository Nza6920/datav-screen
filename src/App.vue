<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/test">Test</router-link>
    </div>
    <div>
      <test-component-a></test-component-a>
      <!-- 使用svg -->
      <svg width="50" height="50" style="color: red">
        <use href="#more"></use>
      </svg>
      <svg width="50" height="50" style="color: green">
        <use href="#filledArrowRight"></use>
      </svg>
      <svg width="50" height="50" style="color: green">
        <use href="#arrowRight"></use>
      </svg>
      <Icon name="arrowRight" class="common-icon"></Icon>
      <Icon name="mobile" class="common-icon"></Icon>
      <Icon prefix="icon" name="bofang" class="common-icon"></Icon>
      <!--      <test-component-b></test-component-b>-->
      <!--      <test-component-c></test-component-c>-->
    </div>
    <router-view/>
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
