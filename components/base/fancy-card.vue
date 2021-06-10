<template>
  <div class="bg-white bg-opacity-50 rounded-xl shadow-md overflow-hidden">
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
        <div class="block mt-1 text-4xl leading-tight font-medium text-black">
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
