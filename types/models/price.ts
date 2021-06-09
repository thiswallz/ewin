export type Currency = 'EUR' | 'USD' // TODO perhaps it can be jsut a string

export interface Price {
  currency: Currency
  amount: number
}
