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
    <offer-list :offers="offers"></offer-list>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { OfferService } from '~/services/offer'
import OfferList from '~/components/offers/list.vue'
import { Offer } from '~/types/models/offer'

@Component({
  components: { OfferList },
})
export default class Challenge extends Vue {
  async fetch() {
    await this.loadOffers()
  }

  @Inject() $offerService!: OfferService

  offers: Offer[] = []

  private async loadOffers(){
    console.log('LOADINGGG')
    this.offers = await this.$offerService.getOffers()
    console.log('FINISH', this.offers)
  }
}
</script>
