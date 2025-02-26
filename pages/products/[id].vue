<template>
  <div>
    <div v-if="product">
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.id }}</p>
    </div>
    <div v-else>
      <p>Loading product...</p>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// Add proper error handling and loading state
const { data: product, error } = await useFetch(uri, { key: id })

// Define page metadata with error handling
definePageMeta({
  layout: 'products'
})

// Handle the error if the fetch fails
if (error.value) {
  console.error('Failed to fetch product:', error.value)
}
</script>

<style scoped>
</style>
