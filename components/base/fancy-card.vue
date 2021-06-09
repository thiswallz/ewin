<template>
  <div
    class="
      max-w-md
      mx-auto
      bg-white
      rounded-xl
      shadow-md
      overflow-hidden
      md:max-w-2xl
    "
  >
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="h-48 w-full object-cover md:h-full md:w-48"
          src="/img/store.jpg"
          alt="Man looking at item at a store"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          Case study
        </div>
        <a
          href="#"
          class="
            block
            mt-1
            text-lg
            leading-tight
            font-medium
            text-black
            hover:underline
          "
          >Finding customers for your new business</a
        >
        <p class="mt-2 text-gray-500">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'FancyCard',
})
export default class FancyCard extends Vue {
  @Prop() size!: string
  @Prop() tooltip!: string

  tooltipOptions = {
    trigger: this.tooltip ? 'hover' : null,
    placement: 'bottom',
    classes: 'is-dark',
    content: this.tooltip,
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/variables.scss';

.qu-tag {
  cursor: initial;
}
.qu-tag:hover {
  border-color: $grey-lighter;
}
.qu-tag:focus {
  border-color: $grey-lighter;
  box-shadow: none;
}
</style>
