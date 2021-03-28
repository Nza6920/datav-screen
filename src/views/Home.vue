<template>
  <div class="home">
    <my-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </my-loading>
    <my-container v-else
                  :options="{ width: 3140, height: 2160}">
      <div class="header">
        <top-header/>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user :today-user="todayUser"
                        :growth-last-day="growthLastMonth"
                        :growth-last-month="growthLastMonth"/>
          </div>
          <div class="left2">444</div>
          <div class="left3">555</div>
          <div class="left4">666</div>
          <div class="left5">777</div>
          <div class="left6">888</div>
        </div>
        <div class="right">
          <div class="right-top1">right-top1</div>
          <div class="right-top2">right-top2</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">right-left1</div>
              <div class="right-left2">right-left2</div>
              <div class="right-left3">right-left3</div>
            </div>
            <div class="right-right">
              <div class="right-right1">right-right1</div>
              <div class="right-right2">right-right2</div>
            </div>
          </div>
        </div>
      </div>
    </my-container>
  </div>
</template>

<script>
/* eslint-disable */
import {onMounted, ref} from 'vue'
import TopHeader from "@/components/TopHeader/TopHeader";
import TotalUser from "@/components/TotalUser";
import screenData from "@/hooks/useScreenData";

export default {
  name: 'Home',
  components: {
    TopHeader,
    TotalUser
  },
  setup(ctx) {
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })

    return {
      loading,
      ...screenData()
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;

  #my-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header {
      width: 100%;
      height: 167px;
      background: yellow;
    }

    .separator {
      width: 100%;
      height: 10px;
      background: rgb(92, 88, 89);
    }

    .center {
      flex: 1;
      display: flex;
      width: 100%;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;

        .left1 {
          height: 300px;
          background: grey;
        }

        .left2 {
          height: 320px;
          background: grey;
        }

        .left3 {
          height: 280px;
          background: grey;
        }

        .left4 {
          height: 230px;
          background: grey;
        }

        .left5 {
          height: 360px;
          background: grey;
        }

        .left6 {
          height: 360px;
          background: grey;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        .right-top1 {
          width: 100%;
          height: 206px;
          background: grey;
        }

        .right-top2 {
          width: 100%;
          height: 48px;
          background: grey;
          margin: 10px 0;
        }

        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;

          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;

            .right-left1 {
              height: 999px;
              background: grey;
            }

            .right-left2 {
              height: 80px;
              background: grey;
            }

            .right-left3 {
              height: 350px;
              background: grey;
            }

            .right-left4 {
              height: 220px;
              background: grey;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            margin-right: 20px;

            .right-right1 {
              width: 100%;
              height: 999px;
              background: grey;
            }

            .right-right2 {
              flex: 1;
              width: 100%;
              margin-top: 20px;
              background: grey;
            }
          }
        }
      }
    }
  }
}

.loading-text {
  font-size: 20px;
  margin-top: 10px;
}
</style>
