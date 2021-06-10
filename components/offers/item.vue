<template>
  <fancy-card class="h-36">
    <template #title> {{ offer.seatAvailability }} seats available! </template>
    <template #block>
      <slot v-bind="offer" />
    </template>
    <template #header> {{ price }} </template>
    {{ offer.departureDate }} {{ offer.returnDate }}
  </fancy-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FancyCard from '~/components/base/fancy-card.vue'
import { Offer } from '~/types/models/offer'

@Component({
  name: 'OfferItem',
  components: { FancyCard },
})
export default class OfferItem extends Vue {
  @Prop({ required: true }) offer!: Offer

  get price() {
    // TODO depending on the currency return correct symbol / format ?
    return `€ ${this.offer.price.amount}`
  }

  // TODO gettet or something to manage seat/seats words
}
</script>
