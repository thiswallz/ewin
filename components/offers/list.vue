<template>
  <div>
    <fancy-card v-for="offer in offers" :key="`offer-${offer.uuid}`">
      <template #title> FRA/FCO </template>
      <template #block> {{ offer.origin }} / {{ offer.destination }} </template>
      <template #header> Flight 23321123312 </template>
      sadd saddsaasdsd saddsa
    </fancy-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FancyCard from '~/components/base/fancy-card.vue'
import { Offer } from '~/types/models/offer'

@Component({
  name: 'OfferList',
  components: { FancyCard },
})
export default class OfferList extends Vue {
  @Prop({ required: true }) offers!: Offer[]
}
</script>
