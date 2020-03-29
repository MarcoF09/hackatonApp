import { Actions } from '../actions/companies'
import { AnyAction } from 'redux'
import { Company } from '../../types/company'

export type CompaniesState = Company[]

const delicatezzenTags = ['tortas', 'dulces', 'saladitos']
const mocaTags = ['pastas', 'congelados', 'postres']
const adriTags = ['Tartas', 'Vegetariano', 'Vergano', 'Dulces']
const naturalProductosTags = ['jabones', 'shampoo']
const padarseTags = ['dulces']
const elkaTags = ['Viandas', 'vegetariano', 'congelados']
const greenTags = ['Hamburguesas', 'vegana', 'vegetariana']

export const initialState: CompaniesState = [
  {
    id: 1,
    name: 'Moca',
    address: 'Cordón, Montevideo, Uruguay',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'De 13:00hs - 19:00hs',
    email: 'Marciabal@chifflet.com',
    instagramUrl: 'https://www.instagram.com/mocacocinaartesanal',
    facebookUrl: 'https://www.facebook.com/mocacocinaartesanal',
    category: 'Comidas',
    image: require('../../assets/moca/mocaProfile.jpeg'),
    tags: mocaTags,
    description:
      'Pastas caseras vegetarianas. Utilizando ingredientes frescos y naturales',
    type: 'delivery_service',
    deliveryZone: 'Cordón',
    imagesDetail: [
      {
        description: 'Sorrentinos de espinaca',
        image: require('../../assets/moca/moca1.jpeg'),
      },
      {
        description: 'Sorrentinos distintos tipos',
        image: require('../../assets/moca/moca2.jpeg'),
      },
      {
        description: 'Ofertas',
        image: require('../../assets/moca/moca3.jpeg'),
      },
    ],
  },
  {
    id: 2,
    name: 'Adri comida saludable',
    address: 'Montevideo, Uruguay',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'De 11:00hs - 15:00hs',
    email: 'montenegroadriana250@gmail.com',
    instagramUrl: 'https://www.instagram.com/comida_saludable_adri/?hl=es',
    facebookUrl: 'https://www.facebook.com/pg/adri250/posts/',
    category: 'Comidas',
    image: require('../../assets/adri/adriProfile.jpeg'),
    tags: adriTags,
    description:
      'Emprendedora, Comida Casera Saludable, Estilo de vida, Menús Diarios y Semanales, Talleres',
    type: 'small_business',
    deliveryRange: '2 kilometros',
    imagesDetail: [
      {
        description: 'Hamburguesas de lentejas',
        image: require('../../assets/adri/adri1.jpeg'),
      },
      {
        description: 'Galletas Caseras',
        image: require('../../assets/adri/adri2.jpeg'),
      },
      {
        description: 'Tarta de jamón y queso',
        image: require('../../assets/adri/adri3.jpeg'),
      },
      {
        description: 'Lasagna',
        image: require('../../assets/adri/adri4.jpeg'),
      },
    ],
  },
  {
    id: 3,
    name: 'Naturalia Jabones',
    address: 'Playa Pascual, Uruguay',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'Todo el tiempo',
    instagramUrl: 'https://www.instagram.com/naturaliauruguay/',
    facebookUrl: 'https://www.facebook.com/naturaliauruguay/',
    category: 'Cuidado Personal',
    image: require('../../assets/naturalia/naturaliaProfile.jpg'),
    tags: naturalProductosTags,
    description:
      'Jabones y productos de cosmética, higiene y bienestar natural realizados de forma artesanal en playa Pascual.',
    type: 'small_business',
    deliveryRange: '10 kilometros',
    imagesDetail: [
      {
        description: 'Kit productos naturales',
        image: require('../../assets/naturalia/naturalia1.jpeg'),
      },
      {
        description: 'Desodorante Natural',
        image: require('../../assets/naturalia/naturalia2.jpeg'),
      },
    ],
  },
  {
    id: 4,
    name: "Pa' darse un gustito",
    address: 'Montevideo-Tacuarembó, Uruguay',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'Todo el tiempo',
    instagramUrl: 'https://instagram.com',
    facebookUrl: 'https://facebook.com',
    category: 'Postres',
    image: require('../../assets/padarse/padarseProfile.jpg'),
    tags: padarseTags,
    description: 'Alfajores de maicena, Sorrentinos, Galletitas personalizadas',
    type: 'delivery_service',
    deliveryRange: 'Todo el Uruguay',
    imagesDetail: [
      {
        description: 'Alfajores Personalizados',
        image: require('../../assets/padarse/padarse1.jpeg'),
      },
      {
        description: 'Sorrentinos caseros',
        image: require('../../assets/padarse/padarse2.jpeg'),
      },
    ],
  },
  {
    id: 5,
    name: 'Elkarrekin Viandas',
    address: 'Pedro F.Berro 916',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'Todo el tiempo',
    instagramUrl: 'https://www.instagram.com/elkarrekin.viandas/',
    facebookUrl:
      'https://www.facebook.com/pages/category/Local-Business/Elkarrekin-viandas-276603809820111/',
    category: 'Comidas',
    image: require('../../assets/elka/elkaProfile.jpg'),
    tags: elkaTags,
    description: 'Detox, Viandas saludables. Pedido de tartas y congelados',
    type: 'delivery_service',
    deliveryZone: 'La Blanqueada, Tres Cruces',
    imagesDetail: [
      {
        description: 'Torre de Zapallitos con cebolla caramelizada',
        image: require('../../assets/elka/elka1.jpeg'),
      },
      {
        description: 'Calabaza Rebosada',
        image: require('../../assets/elka/elka2.jpeg'),
      },
      {
        description: 'Tartas',
        image: require('../../assets/elka/elka3.jpeg'),
      },
    ],
  },
  {
    id: 6,
    name: 'Amapola Bio',
    address: 'Montevideo, Uruguay',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'De 12:00hs - 17:00hs',
    instagramUrl: 'https://www.instagram.com/amapola.bio.uy/?hl=en',
    facebookUrl: 'https://www.facebook.com/amapola.bio.uy/',
    category: 'Cuidado Personal',
    image: require('../../assets/amapola/amapolaProfile.jpg'),
    tags: naturalProductosTags,
    description: 'Productos capilares ecológicos y veganos',
    type: 'small_business',
    deliveryRange: '5 cuadras',
    imagesDetail: [
      {
        description: 'Combo mixto',
        image: require('../../assets/amapola/amapola1.jpeg'),
      },
      {
        description: 'Mascarilla capilar',
        image: require('../../assets/amapola/amapola2.jpeg'),
      },
    ],
  },
  {
    id: 7,
    name: 'Lola Delicatessen',
    address: 'Montevideo, Uruguay',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'De 12:00hs - 20:00hs',
    instagramUrl: 'https://instagram.com',
    facebookUrl: 'https://facebook.com',
    category: 'Postres',
    image: require('../../assets/del/delProfile.jpg'),
    tags: delicatezzenTags,
    description: 'Postres, tortas y reposteria',
    type: 'delivery_service',
    deliveryZone: 'Brazon Oriental, Atahualpa, Prado',
    imagesDetail: [
      {
        description: 'Budines caseros',
        image: require('../../assets/del/del1.jpeg'),
      },
    ],
  },
  {
    id: 8,
    name: 'Green MVD',
    address: 'Montevideo, Uruguay',
    phone: '000-1234',
    whatsapp: '000-1234',
    disponibility: 'Todo el día',
    instagramUrl: 'https://instagram.com',
    facebookUrl: 'https://facebook.com',
    category: 'Comidas',
    image: require('../../assets/green/greenProfile.jpeg'),
    tags: greenTags,
    description: 'Hamburguesas veganas y vegetarianas',
    type: 'delivery_service',
    deliveryZone: 'Todo el país',
    imagesDetail: [
      {
        description: 'Hamburguesas distintos tipos',
        image: require('../../assets/green/green1.jpeg'),
      },
    ],
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
