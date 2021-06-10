<template>
  <div class="bg-white bg-opacity-50 rounded-xl shadow-md overflow-hidden">
    <div class="flex">
      <div class="md:flex-shrink-0 text-4xl w-22 self-center text-gray-800">
        <slot name="block" />
      </div>
      <div class="p-4 flex-1">
        <div
          class="
            uppercase
            tracking-wide
            text-sm text-indigo-500
            font-semibold
            text-right
          "
        >
          <slot name="title" />
        </div>
        <div
          class="block mt-1 text-4xl leading-tight font-medium text-gray-800"
        >
          <slot name="header" />
        </div>
        <p class="mt-2 text-gray-600 text-md">
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
