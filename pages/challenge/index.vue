<template>
  <div class="flex flex-col h-screen md:flex-row">
    <div class="flex-none h-14 md:w-20 md:h-full">
      <offer-filter
        :filters="filtersFrom"
        @select="(selected) => (from = selected)"
      ></offer-filter>
    </div>
    <offer-list
      :offers="filteredOffers"
      class="flex-grow overflow-y-auto"
    ></offer-list>
    <div class="flex-none h-14 md:w-20 md:h-full">
      <offer-filter
        :filters="filtersTo"
        @select="(selected) => (to = selected)"
      ></offer-filter>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { OfferService } from '~/services/offer'
import OfferList from '~/components/offers/list.vue'
import OfferFilter from '~/components/offers/filter.vue'
import { Offer } from '~/types/models/offer'

@Component({
  components: { OfferList, OfferFilter },
})
export default class Challenge extends Vue {
  async fetch() {
    await this.loadOffers()
  }

  @Inject() $offerService!: OfferService

  offers: Offer[] = []
  from: string = ''
  to: string = ''

  get filteredOffers() {
    return this.offers.filter((offer) => this.checkFilter(offer))
  }

  // TODO maybe check and combine from/top filters
  get filtersFrom(): string[] {
    return this.offers.reduce(
      (acc, offer) => [...new Set(acc), offer.origin],
      [] as string[]
    )
  }

  get filtersTo(): string[] {
    return this.offers.reduce(
      (acc, offer) => [...new Set(acc), offer.destination],
      [] as string[]
    )
  }

  private checkFilter(offer: Offer) {
    return (
      (this.from !== '' ? offer.origin === this.from : true) &&
      (this.to !== '' ? offer.destination === this.to : true)
    )
  }

  private async loadOffers() {
    this.offers = await this.$offerService.getOffers()
  }
}
</script>
