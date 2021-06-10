<template>
  <div
    class="
      flex flex-nowrap
      md:flex-col md:h-full
      items-baseline
      mt-4
      mb-6
      space-x-2
      relative
      items-center
    "
    data-test-id="filter-group"
  >
    <div
      class="
        font-bold
        text-xl
        md:text-2xl
        self-center
        text-white
        w-16
        md:w-auto
      "
    >
      <slot />
    </div>
    <button
      v-for="(filter, index) in filters"
      :key="`filter-${index}`"
      :data-test-id="`filter-${index}`"
      class="
        bg-white bg-opacity-50
        shadow-md
        rounded-full
        h-10
        w-10
        lg:w-20 lg:h-20
        self-center
        text-center
        p-1
        py-2
        m-1
        text-green-900
        hover:text-green-600
        font-semibold
        focus:outline-none
      "
      :class="{ active: selected === filter }"
      @click="select(filter)"
    >
      {{ filter }}
    </button>
    <button
      v-if="selected"
      data-test-id="clean"
      class="
        absolute
        bottom-0
        md:relative
        right-0
        p-1
        font-bold
        self-center
        text-white text-center
        hover:text-green-900
      "
      @click="select('')"
    >
      Clean
    </button>
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
    const newFilter = filter === this.selected ? '' : filter
    this.selected = newFilter
    this.$emit('select', newFilter)
  }

  // TODO dont show filters where is no data (?)
}
</script>
<style lang="scss" scoped>
.active {
  @apply bg-green-500 text-white #{!important};
}
</style>
