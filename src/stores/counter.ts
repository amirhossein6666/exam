import { defineStore } from 'pinia'

export const useProduct = defineStore('product', {
  state: () => {
    return {
      products : [] as Product[],
    }
  },
  actions : {
    addProduct(product : Product) {
      this.products.push(product)
    },
    
    removeProduct(productId : string) {
      console.log(productId)
      this.products = this.products.filter((product) => product.id !== productId);
    }
  }
})

interface Product {
  id : string,
  title: string
}