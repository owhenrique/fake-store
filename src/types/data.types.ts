export interface Product {
    _id: string
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
    favorited: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface Rating {
    rate: number
    count: number
  }