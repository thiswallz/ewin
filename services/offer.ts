import { AxiosInstance } from 'axios'
import { Offer } from '~/types/models/offer'

const ENDPOINT = '/api/offers'

export class OfferService<T extends Offer = Offer> {
  $axios: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.$axios = axios
  }

  async getOffers(): Promise<T[]> {
    const { data } = await this.$axios.get<T[]>(`${ENDPOINT}`)
    return data ?? []
  }
}
