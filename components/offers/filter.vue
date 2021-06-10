<template>
  <div
    class="flex md:flex-col items-baseline mt-4 mb-6"
    data-test-id="filter-group"
  >
    <button data-test-id="clean" @click="select('')">Clean</button>
    <div
      v-for="(filter, index) in filters"
      :key="`filter-${index}`"
      :data-test-id="`filter-${index}`"
      class="bg-white bg-opacity-50 rounded-xl shadow-md overflow-hidden"
      :class="{ active: selected === filter }"
      @click="select(filter)"
    >
      {{ filter }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'OfferFilter',
})
export default class OfferFilter extends Vue {
  @Prop({ required: true }) filters!: string[]

  selected: string = ''

  select(filter: string) {
    this.selected = filter
    this.$emit('select', filter)
  }
}
</script>
<style lang="scss" scoped>
.active {
  @apply bg-green-500 text-white;
}
</style>
