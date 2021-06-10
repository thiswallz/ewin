<template>
  <div class="h-screen">
    <h1 class="text-white text-center text-6xl p-4 font-semibold">OFFERS!</h1>
    <div class="flex flex-col md:flex-row items-stretch">
      <div class="w-full h-16 md:w-20 lg:w-40 md:h-full sticky top-0">
        <offer-filter
          :filters="filtersFrom"
          @select="(selected) => (from = selected)"
          >FROM
        </offer-filter>
      </div>
      <div
        class="
          w-full
          h-16
          md:w-20
          lg:w-40
          md:h-full md:order-last
          sticky
          top-20
        "
      >
        <offer-filter
          :filters="filtersTo"
          @select="(selected) => (to = selected)"
          >TO</offer-filter
        >
      </div>
      <offer-list
        :offers="filteredOffers"
        class="flex-grow overflow-y-auto"
      ></offer-list>
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
  get filtersFrom() {
    return this.offers
      .map((offer) => offer.origin)
      .filter((value, index, self) => self.indexOf(value) === index)
  }

  get filtersTo() {
    return this.offers
      .map((offer) => offer.destination)
      .filter((value, index, self) => self.indexOf(value) === index)
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
