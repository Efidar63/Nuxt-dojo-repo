<template>
  <div>
    <Head>
      <Title>Shoppie | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <div v-if="product">
      <ProductDetails :product="product" />
    </div>
    <div v-else-if="pending">
      Loading product...
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// Add the pending state to show loading indicator
const { data: product, pending, error } = await useFetch(uri, { key: id })

// Only throw error if we've finished loading and there's no product
if (!pending.value && !product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product Not Found',
    fatal: true
  })
}

definePageMeta({
  layout: 'products'
})
</script>
