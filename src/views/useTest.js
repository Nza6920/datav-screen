/* eslint-disable */
import { computed, getCurrentInstance, onMounted, ref, watch } from 'vue'

export default function useTest () {

  // 获取路由
  const { ctx } = getCurrentInstance()
  console.log(ctx.$router)
  const gotoAbout = () => {
    ctx.$router.push('/about')
  }

  // 添加响应式属性
  // const state = reactive({
  //   count: 1
  // })
  // 同上
  const count = ref(2)
  const increment = () => {
    count.value++
  }

  // 计算属性
  const doubleCount = computed(() => count.value * 2)

  // 监听器
  watch(() => {
    return count.value
  }, () => {
    console.log('state changed')
  })

  // 生命周期 mounted
  onMounted(() => {
    console.log('on Mounted')
  })

  // 使用 vuex
  const number = computed(() => {
    return ctx.$store.state.number
  })
  const updateNumber = () => {
    // 同步调用
    // ctx.$store.commit('SET_NUMBER', count.value * 100)
    // 异步调用
    ctx.$store.dispatch('setNumber', count.value * 100)
  }
  const aa = computed(() => {
    // return ctx.$store.state.a.aa
    return ctx.$store.getters.aaValue
  })
  const updateAA = () => {
    // 同步调用
    ctx.$store.commit('SET_AA', count.value * 100)
  }

  return {
    count,
    doubleCount,
    increment,
    gotoAbout,
    number,
    updateNumber,
    aa,
    updateAA
  }
}
