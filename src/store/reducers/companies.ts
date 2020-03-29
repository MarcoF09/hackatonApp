import { Actions } from '../actions/companies'
import { AnyAction } from 'redux'
import { Company } from 'src/types/company'

export type CompaniesState = Company[]

const tags1 = ['jabones', 'shampoo']
const tags2 = ['congelados', 'postres', 'eventos']
const tags3 = ['tortas', 'dulces', 'saladitos']

export const initialState: CompaniesState = [
  {
    id: 1,
    name: 'Nombre 1',
    address: 'Address 1',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Comidas',
    image: require('../../assets/home.jpg'),
    tags: tags1,
  },
  {
    id: 2,
    name: 'Nombre 2',
    address: 'Address 2',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Cuidado Personal',
    image: require('../../assets/experiences.jpg'),
    tags: tags2,
  },
  {
    id: 3,
    name: 'Nombre 3',
    address: 'Address 3',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Cuidado Personal',
    image: require('../../assets/experiences.jpg'),
    tags: tags2,
  },
  {
    id: 4,
    name: 'Nombre 4',
    address: 'Address 4',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Otros Negocios',
    image: require('../../assets/restaurant.jpg'),
    tags: tags3,
  },
  {
    id: 5,
    name: 'Nombre 5',
    address: 'Address 5',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Otros Negocios',
    image: require('../../assets/restaurant.jpg'),
    tags: tags3,
  },
  {
    id: 6,
    name: 'Nombre 6',
    address: 'Address 6',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Comidas',
    image: require('../../assets/home.jpg'),
    tags: tags1,
  },
  {
    id: 7,
    name: 'Nombre 7',
    address: 'Address 7',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Cuidado Personal',
    image: require('../../assets/experiences.jpg'),
    tags: tags2,
  },
  {
    id: 8,
    name: 'Nombre 8',
    address: 'Address 8',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Comidas',
    image: require('../../assets/home.jpg'),
    tags: tags1,
  },
  {
    id: 9,
    name: 'Nombre 9',
    address: 'Address 9',
    phone: '1234',
    whatsapp: '1234',
    disponibility: '24/7',
    instagramUrl: 'www.instagram.com',
    facebookUrl: 'www.facebook.com',
    category: 'Otros Negocios',
    image: require('../../assets/restaurant.jpg'),
    tags: tags3,
  },
]

export const companies = (
  state: CompaniesState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case Actions.GET_COMPANIES:
      return state
    default:
      return state
  }
}
