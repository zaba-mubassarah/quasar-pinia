<template>
  <div>
    <label>
      Value 1:
      <input v-model="value1" type="number" />
    </label>
    <br />
    <label>
      Value 2:
      <input v-model="value2" type="number" />
    </label>
    <br />
    <p>Sum 1: {{ sum1 }}</p>
  </div>
</template>

<script>
import { useSumStore } from './store'

export default {
  setup() {
    const store = useSumStore()

    return {
      value1: store.value1,
      value2: store.value2,
      sum1: store.sum1,
      sum2: store.sum2,
    }
  },
}
</script>
