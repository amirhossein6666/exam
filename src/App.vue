<template>
  <div v-for="myproduct in products" :key="myproduct.id">
    {{ myproduct }}
    <button @click="remove(myproduct.id)"> remove </button>
  </div>
<input type="text" v-model="product.id">
<input type="text" v-model="product.title">
<button @click="addToProducts()">add to Product</button>
</template>

<script lang="ts">
import {useProduct} from './stores/counter'
import { defineComponent } from 'vue'
interface Product {
  id : string,
  title: string
}
export default defineComponent({
  data() {
    return {
      products : [] as Product[],
      product : {
        id: '',
        title: ''
      }
    }
  },
  mounted() {
    const store = useProduct()
    this.products = store.products

  },
  methods: {
    addToProducts() {
      const store2 = useProduct()
      store2.addProduct(this.product)
    },
    remove(myproductId : string) {
      const store3 = useProduct()
      store3.removeProduct(myproductId)
    }
  }

})
</script>

<style>

</style>