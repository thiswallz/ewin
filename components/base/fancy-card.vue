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
        <slot name="block" />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          <slot name="title" />
        </div>
        <div
          class="
            block
            mt-1
            text-lg
            leading-tight
            font-medium
            text-black
            hover:underline
          "
        >
          <slot name="header" />
        </div>
        <p class="mt-2 text-gray-500">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'FancyCard',
})
export default class FancyCard extends Vue {}
</script>
