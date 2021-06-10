<template>
  <div
    class="
      grid
      gap-4
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-4
      content-start
    "
  >
    <offer-item
      v-for="offer in offers"
      :key="`offer-${offer.uuid}`"
      :data-test-id="`offer-${offer.uuid}`"
      :offer="offer"
    >
      <template #default="slotProps">
        {{ slotProps.origin }}/{{ slotProps.destination }}
      </template>
    </offer-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import OfferItem from '~/components/offers/item.vue'
import { Offer } from '~/types/models/offer'

@Component({
  name: 'OfferList',
  components: { OfferItem },
})
export default class OfferList extends Vue {
  @Prop({ required: true }) offers!: Offer[]
}
</script>
