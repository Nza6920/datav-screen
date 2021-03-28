/* eslint-disable */
import {onMounted, onUnmounted, ref} from 'vue'

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  let task
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 50
      growthLastDay.value = growthLastDay.value + 1
      growthLastMonth.value = growthLastMonth.value + 1
    }, 3000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth
  }
}
