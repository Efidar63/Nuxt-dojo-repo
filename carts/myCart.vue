<template>
    <main class="cart-container">
      <h2>My Cart</h2>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.imageUrl" :alt="item.name" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p>Price: ${{ item.price.toFixed(2) }}</p>
            <p>Quantity: {{ item.quantity }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </main>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';

  const cartItems = ref([]);

  onMounted(() => {
    // Retrieve cart items from local storage (or your data store)
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      cartItems.value = JSON.parse(storedCart);
    }
  });
  </script>

  <style scoped>
  .cart-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }

  .cart-item {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 10px;
  }

  .cart-item-image {
    max-width: 100px;
    height: auto;
    margin-right: 20px;
  }

  .cart-item-details {
    flex: 1;
  }
  </style>
