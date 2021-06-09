<template>
  <div class="container mx-auto">
    <label class="block">
      <span class="text-gray-700">What type of event is it?</span>
      <select
        class="
          block
          w-full
          mt-1
          rounded-md
          bg-gray-100
          border-transparent
          focus:border-gray-500 focus:bg-white focus:ring-0
        "
      >
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </select>
    </label>

    <fancy-card>
      <template #title> FRA/FCO </template>
      <template #block> FRA/FCO </template>
      <template #header> Flight 23321123312 </template>
      sadd saddsaasdsd saddsa
    </fancy-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FancyCard from '~/components/base/fancy-card.vue'

@Component({
  components: { FancyCard },
})
export default class Challenge extends Vue {}
</script>
