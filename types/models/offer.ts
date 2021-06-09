import { Price } from './price'

export interface Offer {
  uuid: string
  origin: string
  destination: string
  departureDate: string
  returnDate: string
  seatAvailability: number
  offerType: 'BestPrice' | 'ExactMatch'
  price: Price
}
