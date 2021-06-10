import { Offer } from '~/types/models/offer'

// sample taken from https://developer.lufthansa.com/docs/read/api_partner/promotions/Price_Offer
export const offers: Offer[] = [
  {
    origin: 'FRA',
    destination: 'FCO',
    departureDate: '2021-06-13',
    returnDate: '2021-06-14',
    seatAvailability: 7,
    price: {
      amount: 128.26,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'FRA',
    destination: 'ROM',
    departureDate: '2021-06-18',
    returnDate: '2021-06-22',
    seatAvailability: 1,
    price: {
      amount: 25.26,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU3333-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'KOL',
    destination: 'BAR',
    departureDate: '2021-06-22',
    returnDate: '2021-06-25',
    seatAvailability: 2,
    price: {
      amount: 28.26,
      currency: 'USD',
    },
    offerType: 'ExactMatch',
    uuid: 'UUU44444-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'KOL',
    destination: 'ITA',
    departureDate: '2021-06-25',
    returnDate: '2021-06-28',
    seatAvailability: 20,
    price: {
      amount: 59,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU111111-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'BUL',
    destination: 'SPN',
    departureDate: '2021-06-05',
    returnDate: '2021-06-06',
    seatAvailability: 4,
    price: {
      amount: 59,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU22222-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'SPN',
    destination: 'ITA',
    departureDate: '2021-06-15',
    returnDate: '2021-06-18',
    seatAvailability: 3,
    price: {
      amount: 98.6,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU0000000-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'KOL',
    destination: 'DUS',
    departureDate: '2021-06-26',
    returnDate: '2021-06-28',
    seatAvailability: 5,
    price: {
      amount: 12.1,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU0000001-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'KOL',
    destination: 'FRA',
    departureDate: '2021-06-12',
    returnDate: '2021-06-13',
    seatAvailability: 4,
    price: {
      amount: 52.9,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU0000003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'KOL',
    destination: 'USA',
    departureDate: '2021-06-12',
    returnDate: '2021-06-18',
    seatAvailability: 48,
    price: {
      amount: 650.18,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU0000004-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'USA',
    destination: 'ITA',
    departureDate: '2021-06-14',
    returnDate: '2021-06-28',
    seatAvailability: 8,
    price: {
      amount: 525,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU0000005-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'USA',
    destination: 'SPN',
    departureDate: '2021-06-10',
    returnDate: '2021-06-14',
    seatAvailability: 4,
    price: {
      amount: 449,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU0000008-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
  {
    origin: 'NED',
    destination: 'DUS',
    departureDate: '2021-07-04',
    returnDate: '2021-07-12',
    seatAvailability: 34,
    price: {
      amount: 228,
      currency: 'EUR',
    },
    offerType: 'BestPrice',
    uuid: 'UUU0000006-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
  },
]
