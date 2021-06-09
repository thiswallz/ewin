import { Plugin } from '@nuxt/types'
import { OfferService } from '~/services/offer'

const servicesPlugin: Plugin = (ctx) => {
  const { app, $axios } = ctx
  const map = {
    $offerService: new OfferService($axios),
  }
  app.provide = () => map
}

export default servicesPlugin
